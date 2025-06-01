const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const DIST_DIR = path.join(__dirname, "..", "dist");

const mimeTypes = {
  html: "text/html",
  js: "application/javascript",
  css: "text/css",
  json: "application/json",
  svg: "image/svg+xml",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  ico: "image/x-icon",
  webp: "image/webp",
  txt: "text/plain",
  wasm: "application/wasm",
};

const server = http.createServer((req, res) => {
  const reqPath = req.url === "/" ? "/index.html" : req.url;
  const filePath = path.join(DIST_DIR, reqPath);
  const gzFilePath = filePath + ".gz";

  const ext = path.extname(filePath).slice(1);
  const contentType = mimeTypes[ext] || "application/octet-stream";
  const acceptsGzip = req.headers["accept-encoding"]?.includes("gzip");

  if (acceptsGzip) {
    fs.access(gzFilePath, fs.constants.F_OK, (err) => {
      if (!err) {
        res.writeHead(200, {
          "Content-Type": contentType,
          "Content-Encoding": "gzip",
          "Cache-Control": "max-age=86400",
          Vary: "Accept-Encoding",
        });
        return fs.createReadStream(gzFilePath).pipe(res);
      } else {
        // Fall back to uncompressed
        serveRaw();
      }
    });
  } else {
    serveRaw();
  }

  function serveRaw() {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.writeHead(404);
        return res.end("File not found");
      }

      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "max-age=86400",
      });
      fs.createReadStream(filePath).pipe(res);
    });
  }
});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

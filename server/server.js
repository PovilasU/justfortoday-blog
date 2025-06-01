const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const DIST_DIR = path.join(__dirname, "..", "dist");

const server = http.createServer((req, res) => {
  const reqPath = req.url === "/" ? "/index.html" : req.url;
  const filePath = path.join(DIST_DIR, reqPath);
  const gzFilePath = filePath + ".gz";

  fs.access(gzFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404);
      return res.end("File not found");
    }

    const ext = path.extname(filePath).slice(1);
    const mimeTypes = {
      html: "text/html",
      js: "application/javascript",
      css: "text/css",
      json: "application/json",
    };

    const contentType = mimeTypes[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Encoding": "gzip",
      "Cache-Control": "max-age=86400",
    });

    fs.createReadStream(gzFilePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

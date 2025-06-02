import "./styles/styles.css";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

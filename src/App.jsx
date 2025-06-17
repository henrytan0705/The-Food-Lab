import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import MenuPage from "./pages/Menu";
import ContactPage from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

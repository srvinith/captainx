import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Academy from "./pages/Academy";
import Company from "./pages/Company";
import Partners from "./pages/Partners";
import Careers from "./pages/Careers";
import Contact from "./components/Contact";
import Federations from "./pages/Federations";
import Tournament from "./pages/Tournament";
import Live from "./pages/Live";
import useScrollToHash from "./hooks/useScrollToHash";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";

const App = () => {
  useScrollToHash();
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // ✅ Change text direction dynamically
  useEffect(() => {
    if (language === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    }
  }, [language]);

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/products" element={<Product language={language} />} />
        <Route path="/products/academy" element={<Academy language={language}/>} />
        <Route path="/products/federations" element={<Federations language={language}/>} />
        <Route path="/products/tournaments" element={<Tournament language={language}/>} />
        <Route path="/products/live" element={<Live language={language}/>} />
        <Route path="/company" element={<Company language={language} />} />
        <Route path="/partners" element={<Partners language={language} />} />
        <Route path="/careers" element={<Careers language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="/news" element={<UnderConstruction language={language} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer language={language} />

 

    </>
  );
};

export default App;

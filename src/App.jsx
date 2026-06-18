import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import translations from "./data/translations";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("pov360-language");

    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pov360-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A0A0A]">
      <Navbar language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Home t={t} />
        <Services t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { key: "home", href: "#home" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
];

const Navbar = ({ language = "es", setLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsLangOpen(false);
    };

    if (isLangOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => window.removeEventListener("click", handleClickOutside);
  }, [isLangOpen]);

  const handleLanguageChange = (lang) => {
    if (setLanguage) {
      setLanguage(lang);
    }
    setIsLangOpen(false);
    setIsOpen(false);
  };

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-[#0A0A0A]/92 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-md"
          : "bg-[#0A0A0A]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-10">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="POV360"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-visible">
            <img
              src="/Isologotipo-POV360.png"
              alt="POV360"
              className="h-11 w-11 scale-[1.9] object-contain transition-transform duration-300 group-hover:scale-[1.5]"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
              POV360
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#D1D1D1]">
              Virtual Tours
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex text-white">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="relative text-sm font-medium text-[#F5F5F5] transition-colors duration-300 hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-[1px] after:w-0 after:bg-[#9db7d3] after:transition-all after:duration-300 hover:after:w-full"
            >
              {t?.nav?.[item.key] ?? item.key}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setIsLangOpen((prev) => !prev);
              }}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-[#9db7d3]/50 hover:bg-white/10"
              aria-label={t?.nav?.language ?? "Language"}
              aria-expanded={isLangOpen}
            >
              <span>{language.toUpperCase()}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangOpen && (
              <div
                onClick={(event) => event.stopPropagation()}
                className="absolute right-0 top-[calc(100%+10px)] min-w-[120px] overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/95 p-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => handleLanguageChange("es")}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-all duration-300 ${
                    language === "es"
                      ? "bg-white/10 text-white"
                      : "text-[#D1D1D1] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>ES</span>
                  <span className="text-xs opacity-70">Español</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleLanguageChange("en")}
                  className={`mt-1 flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-all duration-300 ${
                    language === "en"
                      ? "bg-white/10 text-white"
                      : "text-[#D1D1D1] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>EN</span>
                  <span className="text-xs opacity-70">English</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleMenuToggle}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#9db7d3]/50 hover:bg-white/10 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0A0A0A]/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
          <nav className="flex flex-col items-center gap-3">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold !text-white transition-all duration-300 hover:border-[#9db7d3]/40 hover:bg-white/10"
              >
                {t?.nav?.[item.key] ?? item.key}
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-2 pt-4">
            <button
              type="button"
              onClick={() => handleLanguageChange("es")}
              className={`rounded-2xl px-4 py-3 text-center text-sm font-semibold transition-all duration-300 ${
                language === "es"
                  ? "border border-[#9db7d3]/50 bg-[#9db7d3]/20 !text-white"
                  : "border border-white/10 bg-white/5 !text-white hover:bg-white/10"
              }`}
            >
              ES
            </button>

            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              className={`rounded-2xl px-4 py-3 text-center text-sm font-semibold transition-all duration-300 ${
                language === "en"
                  ? "border border-[#9db7d3]/50 bg-[#9db7d3]/20 !text-white"
                  : "border border-white/10 bg-white/5 !text-white hover:bg-white/10"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

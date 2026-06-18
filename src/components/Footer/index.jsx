import {
  Mail,
  MapPin,
} from "lucide-react";

import{
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/pov.360tour/",
    icon: FaInstagram,
  },
];

const servicesList = [
  "Fotos 360°",
  "Virtual Tour",
  "Google Street View",
  "Fotografía Profesional",
];

const Footer = ({ t }) => {
  const { ref, isVisible } = useRevealOnScroll({
    threshold: 0.08,
    rootMargin: "0px 0px -8% 0px",
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(157,183,211,0.16),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10 md:py-20">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-10 opacity-0 blur-sm"
          }`}
        >
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
            {/* BRAND */}
            <div>
              <a
                href="#home"
                className="group inline-flex items-center gap-4"
              >
                <img
                  src="/Isologotipo-POV360.png"
                  alt="POV360 Logo"
                  className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <div className="leading-none">
                  <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-white">
                    POV360
                  </span>

                  <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-[#D1D1D1]">
                    Virtual Tours
                  </span>
                </div>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#D1D1D1] md:text-[15px]">
                {t?.footer?.description}
              </p>

              {/* SOCIAL */}
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D1D1D1] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9db7d3]/45 hover:bg-white/10 hover:text-white"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                {t?.footer?.navigationTitle || "Navegación"}
              </h3>

              <nav className="mt-5 flex flex-col gap-3">
                <a
                  href="#home"
                  className="text-sm text-[#D1D1D1] transition-colors duration-300 hover:text-white"
                >
                  {t?.nav?.home}
                </a>

                <a
                  href="#services"
                  className="text-sm text-[#D1D1D1] transition-colors duration-300 hover:text-white"
                >
                  {t?.nav?.services}
                </a>

                <a
                  href="#contact"
                  className="text-sm text-[#D1D1D1] transition-colors duration-300 hover:text-white"
                >
                  {t?.nav?.contact}
                </a>
              </nav>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                {t?.footer?.servicesTitle || "Servicios"}
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                {servicesList.map((service) => (
                  <p
                    key={service}
                    className="text-sm text-[#D1D1D1]"
                  >
                    {service}
                  </p>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                {t?.footer?.contactTitle || "Contacto"}
              </h3>

              <div className="mt-5 space-y-4">
                <a
                  href="mailto:info.pov360@gmail.com"
                  className="flex items-start gap-3 transition-opacity duration-300 hover:opacity-100 hover:[&_p]:text-white"
                >
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#D1D1D1]">
                    <Mail size={16} />
                  </div>

                  <div>
                    <p className="text-sm text-[#D1D1D1]">
                      info.pov360@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/61472634605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-opacity duration-300 hover:opacity-100 hover:[&_p]:text-white"
                >
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#D1D1D1]">
                    <FaWhatsapp size={16} />
                  </div>

                  <div>
                    <p className="text-sm text-[#D1D1D1]">
                      +61 0472 634 605
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#D1D1D1]">
                    <MapPin size={16} />
                  </div>

                  <div>
                    <p className="text-sm text-[#D1D1D1]">
                      Perth, Western Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col gap-4 pt-6 text-sm text-[#A9ADB3] md:flex-row md:items-center md:justify-between">
            <p>
              © {currentYear} POV360. {t?.footer?.rights}
            </p>

            <a
              href="https://facundofagnanoportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[#7A7F85] transition-colors duration-300 hover:text-white"
            >
              Web design by{" "}
              <span className="font-medium text-[#D1D1D1]">
                Facu Fagnano
              </span>
            </a>

            <p className="text-[#7A7F85]">
              {t?.footer?.signature ||
                "Diseño visual inmersivo y presencia digital profesional."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
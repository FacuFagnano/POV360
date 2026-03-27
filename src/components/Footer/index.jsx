import {
  Mail, Phone, MapPin, Globe, Camera, Video} from "lucide-react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

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
            <div>
              <a href="#home" className="group inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D1D1D1]/25 bg-white/5 text-sm font-semibold tracking-[0.18em] text-white transition-all duration-300 group-hover:border-[#9db7d3]/45 group-hover:bg-white/10">
                  POV
                </div>

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

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D1D1D1] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9db7d3]/45 hover:bg-white/10 hover:text-white"
                >
                  <Camera size={18} />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D1D1D1] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9db7d3]/45 hover:bg-white/10 hover:text-white"
                >
                  <Globe size={18} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D1D1D1] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9db7d3]/45 hover:bg-white/10 hover:text-white"
                >
                  <Video size={18} />
                </a>
              </div>
            </div>

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

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                {t?.footer?.servicesTitle || "Servicios"}
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                <p className="text-sm text-[#D1D1D1]">Fotos 360°</p>
                <p className="text-sm text-[#D1D1D1]">Tours virtuales</p>
                <p className="text-sm text-[#D1D1D1]">Videos 360°</p>
                <p className="text-sm text-[#D1D1D1]">Google Street View</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                {t?.footer?.contactTitle || "Contacto"}
              </h3>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#D1D1D1]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-[#D1D1D1]">hola@pov360.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#D1D1D1]">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-[#D1D1D1]">+61 000 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#D1D1D1]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-[#D1D1D1]">Perth, Western Australia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-sm text-[#A9ADB3] md:flex-row md:items-center md:justify-between">
            <p>
              © {currentYear} POV360. {t?.footer?.rights}
            </p>

            <p className="text-[#7A7F85]">
              {t?.footer?.signature || "Diseño visual inmersivo y presencia digital profesional."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
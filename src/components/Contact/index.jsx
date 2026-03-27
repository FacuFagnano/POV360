import {
  Mail,
  Phone,
  MapPin,
  Building2,
  ClipboardList,
  Ruler,
} from "lucide-react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const Contact = ({ t }) => {
  const { ref, isVisible } = useRevealOnScroll({
    threshold: 0.08,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section id="contact" className="relative bg-[#f2f3f5] py-24 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(157,183,211,0.12),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-10 opacity-0 blur-sm"
          }`}
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#D1D1D1] bg-white px-4 py-2 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A7F85] md:text-sm">
                {t?.contact?.badge}
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#0A0A0A] sm:text-4xl md:text-5xl">
              {t?.contact?.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5f646b] md:text-lg">
              {t?.contact?.subtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-8 xl:grid-cols-[0.95fr_1.45fr]">
            <div
              className={`rounded-[2rem] border border-[#D1D1D1] bg-[#0A0A0A] p-7 text-white shadow-[0_18px_50px_rgba(10,10,10,0.14)] transition-all duration-700 md:p-8 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Mail size={24} strokeWidth={1.9} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {t?.contact?.infoTitle}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#D1D1D1] md:text-[15px]">
                {t?.contact?.infoText}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t?.contact?.contactItems?.emailLabel || "Email"}
                    </p>
                    <p className="mt-1 text-sm text-[#D1D1D1]">
                      hola@pov360.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t?.contact?.contactItems?.phoneLabel || "Teléfono"}
                    </p>
                    <p className="mt-1 text-sm text-[#D1D1D1]">
                      +61 000 000 000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t?.contact?.contactItems?.locationLabel || "Ubicación"}
                    </p>
                    <p className="mt-1 text-sm text-[#D1D1D1]">
                      Perth, Western Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-[2rem] border border-[#D1D1D1] bg-white p-7 shadow-[0_18px_50px_rgba(10,10,10,0.07)] transition-all duration-700 delay-100 md:p-8 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <form className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2.5 flex items-center gap-2 text-sm font-medium text-[#1f242a]"
                    >
                      <Mail size={16} className="text-[#7A7F85]" />
                      {t?.contact?.form?.fullNameLabel || "Nombre y apellido"}
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder={
                        t?.contact?.form?.fullNamePlaceholder || "Tu nombre completo"
                      }
                      className="h-13 w-full rounded-2xl border border-[#D1D1D1] bg-[#fafafa] px-4 text-sm text-[#0A0A0A] outline-none transition-all duration-300 placeholder:text-[#8a8f96] focus:border-[#9db7d3] focus:bg-white focus:ring-4 focus:ring-[#9db7d3]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2.5 flex items-center gap-2 text-sm font-medium text-[#1f242a]"
                    >
                      <Building2 size={16} className="text-[#7A7F85]" />
                      {t?.contact?.form?.companyLabel || "Inmobiliaria / Empresa"}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder={
                        t?.contact?.form?.companyPlaceholder || "Nombre de tu empresa"
                      }
                      className="h-13 w-full rounded-2xl border border-[#D1D1D1] bg-[#fafafa] px-4 text-sm text-[#0A0A0A] outline-none transition-all duration-300 placeholder:text-[#8a8f96] focus:border-[#9db7d3] focus:bg-white focus:ring-4 focus:ring-[#9db7d3]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2.5 flex items-center gap-2 text-sm font-medium text-[#1f242a]"
                    >
                      <Mail size={16} className="text-[#7A7F85]" />
                      {t?.contact?.form?.emailLabel || "Casilla de correo"}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t?.contact?.form?.emailPlaceholder || "Email"}
                      className="h-13 w-full rounded-2xl border border-[#D1D1D1] bg-[#fafafa] px-4 text-sm text-[#0A0A0A] outline-none transition-all duration-300 placeholder:text-[#8a8f96] focus:border-[#9db7d3] focus:bg-white focus:ring-4 focus:ring-[#9db7d3]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="mb-2.5 flex items-center gap-2 text-sm font-medium text-[#1f242a]"
                    >
                      <MapPin size={16} className="text-[#7A7F85]" />
                      {t?.contact?.form?.addressLabel || "Dirección del relevamiento"}
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder={
                        t?.contact?.form?.addressPlaceholder || "Selecciona una dirección"
                      }
                      className="h-13 w-full rounded-2xl border border-[#D1D1D1] bg-[#fafafa] px-4 text-sm text-[#0A0A0A] outline-none transition-all duration-300 placeholder:text-[#8a8f96] focus:border-[#9db7d3] focus:bg-white focus:ring-4 focus:ring-[#9db7d3]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2.5 flex items-center gap-2 text-sm font-medium text-[#1f242a]"
                    >
                      <Phone size={16} className="text-[#7A7F85]" />
                      {t?.contact?.form?.phoneLabel || "Teléfono"}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={t?.contact?.form?.phonePlaceholder || "Teléfono"}
                      className="h-13 w-full rounded-2xl border border-[#D1D1D1] bg-[#fafafa] px-4 text-sm text-[#0A0A0A] outline-none transition-all duration-300 placeholder:text-[#8a8f96] focus:border-[#9db7d3] focus:bg-white focus:ring-4 focus:ring-[#9db7d3]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="area"
                      className="mb-2.5 flex items-center gap-2 text-sm font-medium text-[#1f242a]"
                    >
                      <Ruler size={16} className="text-[#7A7F85]" />
                      {t?.contact?.form?.areaLabel || "Metros cuadrados a relevar"}
                    </label>
                    <input
                      id="area"
                      name="area"
                      type="text"
                      placeholder={t?.contact?.form?.areaPlaceholder || "Ej: 120 m²"}
                      className="h-13 w-full rounded-2xl border border-[#D1D1D1] bg-[#fafafa] px-4 text-sm text-[#0A0A0A] outline-none transition-all duration-300 placeholder:text-[#8a8f96] focus:border-[#9db7d3] focus:bg-white focus:ring-4 focus:ring-[#9db7d3]/15"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="details"
                    className="mb-2.5 flex items-start gap-2 text-sm font-medium leading-6 text-[#1f242a]"
                  >
                    <ClipboardList
                      size={16}
                      className="mt-1 shrink-0 text-[#7A7F85]"
                    />
                    <span>
                      {t?.contact?.form?.detailsLabel ||
                        "Indicá los servicios que deseás contratar y te contactaremos a la brevedad."}
                    </span>
                  </label>

                  <textarea
                    id="details"
                    name="details"
                    rows="12"
                    placeholder={
                      t?.contact?.form?.detailsPlaceholder ||
                      "Contanos qué servicios necesitás, detalles del espacio, ubicación y cualquier información útil para prepararte una propuesta."
                    }
                    className="min-h-[320px] w-full flex-1 rounded-[1.75rem] border border-[#D1D1D1] bg-[#fafafa] px-4 py-4 text-sm leading-7 text-[#0A0A0A] outline-none transition-all duration-300 placeholder:text-[#8a8f96] focus:border-[#9db7d3] focus:bg-white focus:ring-4 focus:ring-[#9db7d3]/15 lg:min-h-full"
                  />

                  <button
                    type="submit"
                    className="mt-5 inline-flex items-center justify-center self-start rounded-full border border-[#9db7d3]/40 bg-[#0A0A0A] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9db7d3]/60 hover:bg-[#111111] hover:shadow-[0_14px_35px_rgba(10,10,10,0.12)]"
                  >
                    {t?.contact?.button}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
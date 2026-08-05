import { useState } from "react";

import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  Building2,
  ClipboardList,
  Ruler,
} from "lucide-react";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/info.pov360@gmail.com";

const contactCards = [
  {
    label: "Email",
    value: "info.pov360@gmail.com",
    href: "mailto:info.pov360@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+61 0472 634 605",
    href: "https://wa.me/61472634605",
    icon: FaWhatsapp,
  },
  {
    label: "Location",
    value: "Perth, WA",
    href: null,
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: "Instagram",
    value: "@pov.360tour",
    href: "https://www.instagram.com/pov.360tour/",
    icon: FaInstagram,
  },
];

const Contact = ({ t }) => {
  const { ref, isVisible } = useRevealOnScroll({
    threshold: 0.08,
    rootMargin: "0px 0px -10% 0px",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const formData = new FormData(e.target);

    formData.append("_subject", "Nueva consulta desde POV360");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(t?.contact?.form?.formFail);
      }

      setSuccess(true);
      e.target.reset();
    } catch (err) {
      setError(t?.contact?.form?.formFailTryAgain);
    } finally {
      setLoading(false);
    }
  };

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
            <aside
              className={`rounded-[2rem] border border-[#D1D1D1] bg-[#0A0A0A] p-7 text-white shadow-[0_18px_50px_rgba(10,10,10,0.14)] transition-all duration-700 md:p-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
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
                {contactCards.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="flex mt-1.5 items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-[#9db7d3]/40 hover:bg-white/10">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm text-[#D1D1D1]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A7F85]">
                  {t?.contact?.socialTitle}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-[#D1D1D1] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9db7d3]/45 hover:bg-white/10 hover:text-white"
                      >
                        <Icon size={16} />
                        {item.value}
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div
              className={`rounded-[2rem] border border-[#D1D1D1] bg-white p-7 shadow-[0_18px_50px_rgba(10,10,10,0.07)] transition-all delay-100 duration-700 md:p-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <form
                onSubmit={handleSubmit}
                className="grid gap-6 lg:grid-cols-2"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Nueva consulta desde POV360"
                />

                <div className="space-y-6">
                  <InputField
                    id="fullName"
                    name="Nombre"
                    required
                    icon={UserRound}
                    label={
                      t?.contact?.form?.fullNameLabel || "Nombre y apellido"
                    }
                    placeholder={
                      t?.contact?.form?.fullNamePlaceholder ||
                      "Tu nombre completo"
                    }
                    type="text"
                  />

                  <InputField
                    id="company"
                    name="Empresa"
                    icon={Building2}
                    label={
                      t?.contact?.form?.companyLabel || "Inmobiliaria / Empresa"
                    }
                    placeholder={
                      t?.contact?.form?.companyPlaceholder ||
                      "Nombre de tu empresa"
                    }
                    type="text"
                  />

                  <InputField
                    id="email"
                    name="Email"
                    required
                    icon={Mail}
                    label={
                      t?.contact?.form?.emailLabel || "Casilla de correo *"
                    }
                    placeholder={t?.contact?.form?.emailPlaceholder || "Email"}
                    type="email"
                  />

                  <InputField
                    id="address"
                    name="Dirección"
                    required
                    icon={MapPin}
                    label={
                      t?.contact?.form?.addressLabel ||
                      "Dirección del relevamiento"
                    }
                    placeholder={
                      t?.contact?.form?.addressPlaceholder ||
                      "Selecciona una dirección"
                    }
                    type="text"
                  />

                  <InputField
                    id="phone"
                    name="Teléfono"
                    icon={Phone}
                    label={t?.contact?.form?.phoneLabel || "Teléfono"}
                    placeholder={
                      t?.contact?.form?.phonePlaceholder || "Teléfono"
                    }
                    type="tel"
                  />

                  <InputField
                    id="area"
                    name="Metros"
                    icon={Ruler}
                    label={
                      t?.contact?.form?.areaLabel ||
                      "Metros cuadrados a relevar"
                    }
                    placeholder={
                      t?.contact?.form?.areaPlaceholder || "Ej: 120 m²"
                    }
                    type="text"
                  />
                </div>

                <div className="flex flex-col">
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="mb-2.5 flex items-center gap-2 text-sm font-medium text-[#1f242a]"
                    >
                      <ClipboardList
                        size={16}
                        className="shrink-0 text-[#7A7F85]"
                      />

                      <span>{t?.contact?.form?.serviceLabel}</span>
                    </label>

                    <select
                      id="serviceType"
                      name="Servicio"
                      required
                      defaultValue=""
                      className="h-14 w-full cursor-pointer rounded-2xl border border-[#D1D1D1] bg-[#fafafa] px-4 text-sm text-[#0A0A0A] outline-none transition-all duration-300 focus:border-[#9db7d3] focus:bg-white focus:ring-4 focus:ring-[#9db7d3]/15"
                    >
                      <option value="" disabled>
                        {t?.contact?.form?.servicePlaceholder}
                      </option>

                      {t?.contact?.form?.serviceOptions?.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label
                    htmlFor="details"
                    className="mb-2.5 mt-6 flex items-start gap-2 text-sm font-medium leading-6 text-[#1f242a]"
                  >
                    <ClipboardList
                      size={16}
                      className="mt-1 shrink-0 text-[#7A7F85]"
                    />

                    <span>{t?.contact?.form?.detailsLabel}</span>
                  </label>

                  <textarea
                    id="details"
                    name="Comentarios"
                    required
                    rows={14}
                    placeholder={t?.contact?.form?.detailsPlaceholder}
                    className="h-[460px] w-full resize-none rounded-[1.75rem] border border-[#D1D1D1] bg-[#fafafa] px-5 py-4 text-sm leading-7 text-[#0A0A0A] outline-none transition-all duration-300 placeholder:text-[#8a8f96] focus:border-[#9db7d3] focus:bg-white focus:ring-4 focus:ring-[#9db7d3]/15"
                  />

                  <div className="mt-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full border border-[#0A0A0A] bg-[#0A0A0A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-[#111111] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {loading
                        ? "Enviando..."
                        : t?.contact?.button || "Enviar consulta"}
                    </button>
                  </div>

                  {success && (
                    <p className="mt-4 text-sm font-medium text-green-600">
                      {t?.contact?.form?.formSentSuccess}
                    </p>
                  )}

                  {error && (
                    <p className="mt-4 text-sm font-medium text-red-600">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputField = ({
  id,
  name,
  icon: Icon,
  label,
  placeholder,
  type,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2.5 flex items-center gap-2 text-sm font-medium text-[#1f242a]"
      >
        <Icon size={16} className="text-[#7A7F85]" />
        {label}
      </label>

      <input
        id={id}
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-[#D1D1D1] bg-[#fafafa] px-4 text-sm text-[#0A0A0A] outline-none transition-all duration-300 placeholder:text-[#8a8f96] focus:border-[#9db7d3] focus:bg-white focus:ring-4 focus:ring-[#9db7d3]/15"
      />
    </div>
  );
};

export default Contact;
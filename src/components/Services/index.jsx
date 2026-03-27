import {
  Image as ImageIcon,
  ScanSearch,
  Server,
  Map,
  Film,
  LayoutGrid,
} from "lucide-react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const iconMap = [
  ImageIcon,
  ScanSearch,
  Server,
  Map,
  Film,
  LayoutGrid,
];

const Services = ({ t }) => {
  const { ref, isVisible } = useRevealOnScroll({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
  });

  const services = t?.services?.items || [];

  return (
    <section
      id="services"
      className="relative bg-[#F5F5F5] py-24 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(157,183,211,0.10),transparent_30%)]" />

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
                {t?.services?.badge}
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#0A0A0A] sm:text-4xl md:text-5xl">
              {t?.services?.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5f646b] md:text-lg">
              {t?.services?.subtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[index] || ImageIcon;

              return (
                <article
                  key={service.title}
                  className={`group relative overflow-hidden rounded-3xl border border-[#D1D1D1] bg-white p-6 shadow-[0_12px_35px_rgba(10,10,10,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#9db7d3]/50 hover:shadow-[0_18px_45px_rgba(10,10,10,0.10)] md:p-7 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 90}ms`,
                  }}
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2rem] bg-[radial-gradient(circle,rgba(157,183,211,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D1D1D1] bg-[#0A0A0A] text-white transition-all duration-500 group-hover:border-[#9db7d3]/40 group-hover:bg-[#111111] group-hover:shadow-[0_10px_24px_rgba(10,10,10,0.16)]">
                      <Icon size={24} strokeWidth={1.9} />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-[#0A0A0A]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#5f646b] md:text-[15px]">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
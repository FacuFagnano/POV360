import {
  Image as ImageIcon,
  ScanSearch,
  Map,
  Camera,
} from "lucide-react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const positions = [
  "left-[50%] top-[10%] -translate-x-1/2",
  "left-[18%] top-[50%] -translate-y-1/2",
  "right-[18%] top-[50%] -translate-y-1/2",
  "left-[50%] bottom-[10%] -translate-x-1/2",
];

const icons = [ImageIcon, ScanSearch, Map, Camera];

const Services = ({ t }) => {
  const { ref, isVisible } = useRevealOnScroll({
    threshold: 0.08,
    rootMargin: "0px 0px -10% 0px",
  });

  const services = t?.services?.items || [];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f5f5f5] py-14 md:py-16"
    >
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

            <h2 className="text-2xl font-bold leading-tight text-[#0A0A0A] sm:text-3xl md:text-4xl">
              {t?.services?.title}
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#5f646b] md:text-base">
              {t?.services?.subtitle}
            </p>
          </div>

          <div className="relative mx-auto mt-8 hidden h-[560px] max-w-[860px] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.35)] lg:block">
            <img
              src="/services360.jpg"
              alt="POV360 services background"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_38%,rgba(0,0,0,0.58)_100%)]" />

            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/Isologotipo-POV360.png"
                alt="POV360 logo"
                className="w-28 object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
              />
            </div>

            {services.map((service, index) => {
              const Icon = icons[index] || ImageIcon;

              return (
                <div
                  key={service.title}
                  className={`group absolute z-30 h-16 w-16 ${positions[index]}`}
                >
                  <div
                    className="relative h-16 w-16 animate-[float_4s_ease-in-out_infinite]"
                    style={{
                      animationDelay: `${index * 0.28}s`,
                    }}
                  >
                    <div
                      className="
                        absolute left-1/2 top-1/2
                        flex h-16 w-16 -translate-x-1/2 -translate-y-1/2
                        items-center justify-center overflow-hidden
                        rounded-full border border-white/20 bg-black/45
                        text-white
                        shadow-[0_18px_45px_rgba(0,0,0,0.35)]
                        backdrop-blur-md
                        transition-all duration-500 ease-out
                        group-hover:h-[170px]
                        group-hover:w-[300px]
                        group-hover:rounded-3xl
                        group-hover:border-[#9db7d3]/70
                        group-hover:bg-black/75
                        group-hover:px-5
                        group-hover:shadow-[0_0_38px_rgba(157,183,211,0.35)]
                      "
                    >
                      <Icon
                        size={26}
                        strokeWidth={1.8}
                        className="absolute transition-all duration-300 group-hover:scale-75 group-hover:opacity-0"
                      />

                      <div className="w-[245px] translate-y-3 text-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="text-sm font-semibold leading-tight text-white">
                          {service.title}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#D1D1D1]">
                          {service.description}
                        </p>

                        {service.links?.length > 0 && (
                          <div className="mt-3 flex flex-wrap justify-center gap-2">
                            {service.links.map((link) => (
                              <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white transition-all duration-300 hover:border-[#9db7d3]/70 hover:bg-[#9db7d3]/20"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 lg:hidden">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <img
                src="/services360.jpg"
                alt="POV360 services background"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <img
                  src="/Isologotipo-POV360.png"
                  alt="POV360 logo"
                  className="w-24 object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => {
                const Icon = icons[index] || ImageIcon;

                return (
                  <article
                    key={service.title}
                    className="rounded-3xl border border-[#D1D1D1] bg-white p-5 shadow-[0_12px_35px_rgba(10,10,10,0.05)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D1D1D1] bg-[#0A0A0A] text-white">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[#0A0A0A]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#5f646b]">
                      {service.description}
                    </p>

                    {service.links?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-[#D1D1D1] bg-[#0A0A0A] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-[#9db7d3]/70 hover:bg-[#111111]"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const Home = ({ t }) => {
  const { ref, isVisible } = useRevealOnScroll({
    threshold: 0.15,
    rootMargin: "0px 0px -12% 0px",
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0A] pt-24 pb-20 md:pt-28"
    >
      <div className="absolute inset-0">
        <img
          src="/home/home-background.png"
          alt="POV360 immersive background"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-[#0A0A0A]/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(157,183,211,0.18),transparent_38%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-[#0A0A0A]/35 to-transparent" />
      <div className="relative z-30 mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <div
          ref={ref}
          className={`max-w-3xl transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-30 opacity-0 blur-sm"
          }`}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-[#D1D1D1]/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D1D1D1] md:text-sm">
              {t?.home?.badge}
            </span>
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl md:leading-[1.05]">
            {t?.home?.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#D1D1D1] sm:text-lg md:text-xl">
            {t?.home?.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-[#9db7d3]/40 bg-[#f5f5f5]/80 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9db7d3]/70 hover:bg-[#f5f5f5] hover:shadow-[0_10px_30px_rgba(157,183,211,0.18)]"
            >
              {t?.home?.primaryCta}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#D1D1D1]/30 bg-[#f5f5f5]/80 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-[#f5f5f5]"
            >
              {t?.home?.secondaryCta}
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-[#F5F5F5] via-[#F5F5F5]/70 to-transparent" />{" "}
    </section>
  );
};

export default Home;

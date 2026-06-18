import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/61472634605"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-[#D1D1D1]/20
        bg-[#0A0A0A]
        shadow-[0_12px_30px_rgba(0,0,0,0.35)]
        animate-[whatsappPulse_3s_ease-in-out_infinite]
        transition-all
        duration-300
        hover:scale-110
        hover:border-[#9db7d3]/70
        hover:shadow-[0_0_30px_rgba(157,183,211,0.35)]
      "
    >
      <FaWhatsapp className="text-white" size={36} />
    </a>
  );
};

export default WhatsAppFloat;
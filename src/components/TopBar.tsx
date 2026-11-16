import { MapPin, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden bg-[#10243A] text-white md:block">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-3">
        {/* Localisation */}
        <div className="flex items-center gap-2 text-xs">
          <MapPin size={15} className="shrink-0 text-[#56D5CC]" />
          <span>Chapelle Nsimeyong, descente Tam-Tam, Yaoundé</span>
        </div>

        {/* Coordonnées et réseaux sociaux */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <a
            href="tel:+237674502450"
            className="flex items-center gap-2 transition-colors hover:text-[#56D5CC]"
          >
            <Phone size={14} className="text-[#56D5CC]" />
            +237 674 502 450
          </a>

          <a
            href="tel:+237691095519"
            className="flex items-center gap-2 transition-colors hover:text-[#56D5CC]"
          >
            <Phone size={14} className="text-[#56D5CC]" />
            +237 691 095 519
          </a>

          <a
            href="https://www.facebook.com/VOTRE_PAGE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visiter notre page Facebook"
            className="flex items-center gap-2 transition-colors hover:text-[#56D5CC]"
          >
            <FaFacebookF size={14} />
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { GraduationCap, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#about" },
  { label: "Formations", href: "#formations" },
  { label: "Contact", href: "#contact" },
];

const formations = ["Auxiliaire de Vie Sociale", "Auxiliaire de Puériculture"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#10243A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-[1fr_1.5fr] sm:gap-8 lg:grid-cols-[1.2fr_1.8fr_1fr] lg:gap-0">
          {/* IDENTITÉ */}
          <ScrollReveal distance={18}>
            <div className="sm:pr-7 lg:pr-9">
              <Link href="#accueil" className="inline-flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16A6A1]">
                  <GraduationCap size={25} />
                </span>

                <span className="text-xl font-extrabold tracking-wide">
                  IFP <span className="text-[#65D1C9]">MEDHE</span>
                </span>
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
                Un institut engagé dans la formation professionnelle et le
                développement des compétences humaines et pratiques.
              </p>
            </div>
          </ScrollReveal>

          {/* NAVIGATION ET FORMATIONS */}
          <ScrollReveal delay={0.1} distance={18}>
            <div className="grid grid-cols-2 gap-5 border-y border-white/15 py-6 sm:border-y-0 sm:border-l sm:py-0 sm:pl-7 lg:border-l lg:border-r lg:px-9">
              {/* NAVIGATION */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-[#65D1C9]">
                  Navigation
                </h3>

                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-slate-300 transition-colors duration-300 hover:text-[#65D1C9]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FORMATIONS */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-[#65D1C9]">
                  Nos formations
                </h3>

                <ul className="space-y-3">
                  {formations.map((formation) => (
                    <li key={formation}>
                      <Link
                        href="#formations"
                        className="text-sm leading-6 text-slate-300 transition-colors duration-300 hover:text-[#65D1A1]"
                      >
                        {formation}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* CONTACT */}
          <ScrollReveal delay={0.2} distance={18}>
            <div className="sm:pl-7 lg:pl-9">
              <h3 className="mb-4 text-sm font-bold text-[#65D1C9]">
                Restons en contact
              </h3>

              <p className="max-w-xs text-sm leading-6 text-slate-300">
                Une question ou besoin d'informations sur nos formations ? Notre
                équipe est à votre écoute.
              </p>

              <Link
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#16A6A1] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#65D1C9] hover:text-[#10243A]"
              >
                Nous contacter
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* COPYRIGHT ET SIGNATURE */}
        <div className="mt-8 border-t border-white/15 pt-5">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} IFP MEDHE. Tous droits réservés.
            </p>

            <p className="text-xs text-slate-400">
              Conçu & développé par{" "}
              <span className="font-semibold text-[#65D1C9]">Frank Landry</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

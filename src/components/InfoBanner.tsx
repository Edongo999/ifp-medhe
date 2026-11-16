import { Clock3, CalendarCheck, Handshake, ArrowUpRight } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";

const information = [
  {
    icon: Clock3,
    label: "HORAIRES D'OUVERTURE",
    title: "Lundi – Vendredi",
    description: "08h00 – 17h00",
  },
  {
    icon: CalendarCheck,
    label: "ADMISSIONS",
    title: "Inscriptions ouvertes",
    description: "Renseignez-vous auprès de notre administration.",
  },
  {
    icon: Handshake,
    label: "NOTRE ENGAGEMENT",
    title: "À vos côtés à chaque étape",
    description: "Un accompagnement tout au long de votre parcours.",
  },
];

export default function InfoBanner() {
  return (
    <section className="relative z-30 mt-4 px-5 pb-12 sm:mt-2 sm:px-8 md:-mt-12 lg:px-10">
      {/* FOND BLANC SOUS LA ZONE DE CHEVAUCHEMENT */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-20 bg-white" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-3">
          {information.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal
                key={item.label}
                delay={index * 0.2}
                duration={1.2}
                distance={22}
              >
                <div
                  className="
                    group flex min-h-[170px] items-start gap-4
                    rounded-2xl bg-[#16A6A1] p-6 text-white
                    transition-all duration-300
                    hover:-translate-y-1 hover:bg-[#128C87]
                    hover:shadow-lg hover:shadow-[#16A6A1]/20
                  "
                >
                  {/* ICÔNE */}
                  <div
                    className="
                      flex h-12 w-12 shrink-0 items-center justify-center
                      rounded-xl bg-white/15 text-white
                      transition-colors duration-300
                      group-hover:bg-white group-hover:text-[#16A6A1]
                    "
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  {/* CONTENU */}
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-[0.14em] text-white/90">
                      {item.label}
                    </p>

                    <h3 className="mt-2 text-lg font-bold leading-snug text-white sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/95">
                      {item.description}
                    </p>

                    {item.label === "ADMISSIONS" && (
                      <a
                        href="#contact"
                        className="
                          mt-3 inline-flex items-center gap-1
                          text-sm font-bold text-white
                          transition-opacity hover:opacity-80
                        "
                      >
                        Nous contacter
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

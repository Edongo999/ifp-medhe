"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

import { ArrowUpRight, HeartHandshake, Baby, CheckCircle2 } from "lucide-react";

const formations = [
  {
    id: 1,
    category: "SANTÉ ET ACCOMPAGNEMENT",
    title: "Auxiliaire de Vie Sociale",
    description:
      "Développez les compétences nécessaires pour accompagner les personnes âgées et les personnes en situation de handicap dans leur quotidien.",
    image: "/images/ifp-medhe/auxilliare.jpg",
    alt: "Formation en accompagnement des personnes âgées",
    icon: HeartHandshake,
    skills: [
      "Accompagnement au quotidien",
      "Hygiène et confort",
      "Accompagnement des personnes dépendantes",
    ],
  },
  {
    id: 2,
    category: "PETITE ENFANCE",
    title: "Auxiliaire de Puériculture",
    description:
      "Préparez-vous à accompagner les nourrissons et les jeunes enfants en participant à leur bien-être, leur éveil et leur développement.",
    image: "/images/ifp-medhe/enfant.jpg",
    alt: "Formation en accompagnement de la petite enfance",
    icon: Baby,
    skills: [
      "Soins et hygiène de l'enfant",
      "Éveil et développement",
      "Accompagnement du jeune enfant",
    ],
  },
];

export default function Formations() {
  return (
    <section
      id="formations"
      className="relative border-t border-[#16A6A1]/15 bg-[#F1F6F8] py-8 sm:py-20 lg:py-8"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* EN-TÊTE */}
        <div className="mb-10 w-full sm:mb-14">
          {/* SURTITRE */}
          <ScrollReveal distance={15}>
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#16A6A1]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#16A6A1] sm:text-xs">
                Nos formations
              </span>
              <span className="h-[2px] w-8 bg-[#16A6A1]" />
            </div>
          </ScrollReveal>

          {/* TITRE */}
          <ScrollReveal delay={0.1} distance={20}>
            <h2 className="text-center text-3xl font-bold leading-tight tracking-tight text-[#10243A] sm:text-4xl lg:text-[46px]">
              Construisez votre avenir{" "}
              <span className="text-[#16A6A1]">professionnel</span>
            </h2>
          </ScrollReveal>

          {/* DESCRIPTION */}
          <ScrollReveal delay={0.1} distance={20}>
            <p
              className="
                mt-4
                w-full
                max-w-[1200px]
                text-justify
                text-sm
                leading-7
                text-slate-600
                hyphens-auto
                [overflow-wrap:break-word]
                sm:text-[15px]
              "
            >
              À IFP MEDHE, nous proposons des parcours de formation conçus pour
              vous transmettre des connaissances solides, développer vos
              compétences pratiques et vous préparer aux réalités du monde
              professionnel. Que vous souhaitiez accompagner les personnes
              âgées, intervenir auprès des personnes en situation de handicap ou
              contribuer au bien-être et à l'épanouissement des jeunes enfants,
              nos formations vous permettent de vous préparer à exercer un
              métier fondé sur l'écoute, la responsabilité et le sens humain.
            </p>
          </ScrollReveal>
        </div>

        {/* CARTES DES FORMATIONS */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {formations.map((formation, index) => {
            const Icon = formation.icon;

            return (
              <ScrollReveal key={formation.id} delay={0.1} distance={30}>
                <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#10243A]/10">
                  {/* IMAGE */}
                  <ScrollReveal delay={0.05} distance={20}>
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#10243A]">
                      <Image
                        src={formation.image}
                        alt={formation.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/75 via-transparent to-transparent" />

                      {/* BADGE */}
                      <div className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#10243A]/70 px-3 py-2 text-white backdrop-blur-md sm:bottom-5 sm:left-6">
                        <Icon size={16} className="text-[#65D1C9]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider sm:text-xs">
                          {formation.category}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* CONTENU */}
                  <div className="p-5 sm:p-7">
                    {/* TITRE */}
                    <ScrollReveal delay={0.05} distance={15}>
                      <h3 className="text-xl font-bold leading-snug text-[#10243A] sm:text-2xl">
                        {formation.title}
                      </h3>
                    </ScrollReveal>

                    {/* DESCRIPTION */}
                    <ScrollReveal delay={0.05} distance={15}>
                      <p className="mt-3 text-justify text-sm leading-7 text-slate-600">
                        {formation.description}
                      </p>
                    </ScrollReveal>

                    {/* COMPÉTENCES */}
                    <ScrollReveal delay={0.05} distance={15}>
                      <div className="mt-5 border-t border-slate-100 pt-5">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#10243A]">
                          Compétences abordées
                        </p>

                        <ul className="space-y-2.5">
                          {formation.skills.map((skill, skillIndex) => (
                            <ScrollReveal
                              key={skill}
                              delay={skillIndex * 0.08}
                              distance={12}
                            >
                              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                                <CheckCircle2
                                  size={17}
                                  className="mt-0.5 shrink-0 text-[#16A6A1]"
                                />
                                <span>{skill}</span>
                              </li>
                            </ScrollReveal>
                          ))}
                        </ul>
                      </div>
                    </ScrollReveal>

                    {/* ACTION */}
                    <ScrollReveal delay={0.1} distance={15}>
                      <Link
                        href="#contact"
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#10243A] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16A6A1] sm:w-auto"
                      >
                        Demander des informations
                        <ArrowUpRight size={17} />
                      </Link>
                    </ScrollReveal>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* MESSAGE DE FIN */}
        <ScrollReveal delay={0.1} distance={20}>
          <div className="mt-10 text-center sm:mt-14">
            <p className="text-sm leading-7 text-slate-600">
              Vous souhaitez en savoir plus sur nos parcours ?
            </p>

            <Link
              href="#contact"
              className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#16A6A1] transition-colors hover:text-[#10243A]"
            >
              Contactez notre équipe
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

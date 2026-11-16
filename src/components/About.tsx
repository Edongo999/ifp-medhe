"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  Target,
  BriefcaseBusiness,
  Plus,
  HeartPulse,
} from "lucide-react";

const engagements = [
  {
    icon: BookOpen,
    title: "Accompagnement pédagogique",
  },
  {
    icon: Target,
    title: "Développement des compétences",
  },
  {
    icon: HeartHandshake,
    title: "Apprentissage pratique",
  },
  {
    icon: BriefcaseBusiness,
    title: "Préparation professionnelle",
  },
];

const imageContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const imageItemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function About() {
  return (
    <section
      id="institut"
      className="overflow-hidden bg-white py-1 sm:py-16 lg:py-0"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* CONTENU - PREMIER SUR MOBILE */}
          <div className="order-1 text-center lg:order-2 lg:py-4 lg:text-left">
            {/* SURTITRE */}
            <ScrollReveal>
              <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5 lg:justify-start">
                <span className="h-[2px] w-8 bg-[#16A6A1]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#16A6A1] sm:text-xs sm:tracking-[0.2em]">
                  À propos de nous
                </span>
              </div>
            </ScrollReveal>

            {/* TITRE */}
            <ScrollReveal delay={0.1}>
              <h2 className="mx-auto max-w-xl text-2xl font-bold leading-[1.2] tracking-tight text-[#10243A] sm:text-4xl lg:mx-0 lg:text-[46px]">
                Bienvenue à <span className="text-[#16A6A1]">IFP MEDHE</span>
              </h2>
            </ScrollReveal>

            {/* DESCRIPTION */}
            <ScrollReveal delay={0.2}>
              <div className="mx-auto mt-4 max-w-xl text-justify text-sm leading-7 text-slate-600 [text-align-last:left] sm:mt-6 sm:text-[15px] lg:mx-0 lg:text-left">
                <p>
                  Se former, acquérir des compétences et se préparer à exercer
                  un métier qui a du sens.
                </p>

                <p className="mt-3 text-slate-500">
                  IFP MEDHE accompagne les apprenants dans leur parcours de
                  formation professionnelle à travers une approche associant
                  connaissances théoriques et apprentissage pratique.
                </p>

                <p className="mt-3 text-slate-500">
                  L'institut met l'accent sur le développement des compétences
                  et la préparation aux métiers de l'accompagnement des
                  personnes et de la petite enfance.
                </p>
              </div>
            </ScrollReveal>

            {/* ENGAGEMENTS */}
            <div className="mx-auto mt-6 max-w-xl border-t border-slate-200 pt-5 sm:mt-8 lg:mx-0">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {engagements.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <ScrollReveal
                      key={item.title}
                      delay={0.35 + index * 0.15}
                      distance={20}
                    >
                      <div className="group flex min-h-[82px] items-center gap-2.5 rounded-lg border border-[#1B3A56] bg-[#10243A] px-3 py-3 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-[#1B3A56] hover:shadow-lg hover:shadow-[#10243A]/10 sm:min-h-[76px] sm:gap-3 sm:px-4 sm:py-4">
                        <Icon
                          size={19}
                          strokeWidth={1.8}
                          className="shrink-0 text-[#65D1C9] transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
                        />

                        <span className="text-xs font-semibold leading-snug text-[#F1F5F9] sm:text-sm">
                          {item.title}
                        </span>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <ScrollReveal delay={0.9}>
              <Link
                href="/a-propos"
                className="mx-auto mt-6 inline-flex w-full max-w-xl items-center justify-center gap-3 rounded-md bg-[#10243A] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1B3A56] hover:shadow-lg hover:shadow-[#10243A]/15 sm:mt-8 sm:w-auto sm:px-6 sm:py-4 lg:mx-0"
              >
                En savoir plus
                <ArrowUpRight size={18} />
              </Link>
            </ScrollReveal>
          </div>

          {/* IMAGE - DEUXIÈME SUR MOBILE */}
          <ScrollReveal
            delay={0.15}
            distance={35}
            className="relative isolate order-2 mx-auto w-full max-w-[600px] lg:order-1"
          >
            {/* COMPOSITION ANIMÉE */}
            <motion.div
              variants={imageContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative"
            >
              {/* CADRE DÉCORATIF */}
              <motion.div
                variants={imageItemVariants}
                className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-2xl border-2 border-[#16A6A1]/30 sm:-bottom-5 sm:-left-5"
              />

              {/* HALO TURQUOISE */}
              <motion.div
                variants={imageItemVariants}
                className="absolute -right-5 -top-5 -z-10 h-32 w-32 rounded-full bg-[#16A6A1]/10 blur-3xl animate-pulse sm:-right-8 sm:-top-8 sm:h-40 sm:w-40"
              />

              {/* ÉLÉMENT CIRCULAIRE ANIMÉ */}
              <motion.div
                variants={imageItemVariants}
                className="absolute -right-3 -top-3 z-20 hidden h-16 w-16 items-center justify-center rounded-full border border-dashed border-[#16A6A1]/50 bg-white/70 backdrop-blur-sm animate-[spin_25s_linear_infinite] sm:flex sm:-right-5 sm:-top-5 sm:h-20 sm:w-20"
              >
                <div className="h-3 w-3 rounded-full bg-[#16A6A1]" />
              </motion.div>

              {/* IMAGE PRINCIPALE */}
              <motion.div
                variants={imageItemVariants}
                className="group relative aspect-[5/4] overflow-hidden rounded-xl bg-slate-100 shadow-xl shadow-[#10243A]/10 sm:aspect-[5/4] sm:rounded-2xl"
              >
                <Image
                  src="/images/ifp-medhe/about.jpg"
                  alt="Institut de formation professionnelle IFP MEDHE"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* VOILE DÉGRADÉ */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/80 via-transparent to-[#10243A]/10" />

                {/* ÉLÉMENTS GRAPHIQUES */}
                <motion.div
                  variants={imageItemVariants}
                  className="absolute right-3 top-3 flex gap-1 text-white/80 sm:right-5 sm:top-5 sm:gap-2"
                >
                  <Plus size={18} strokeWidth={2.5} />
                  <Plus size={18} strokeWidth={2.5} />
                </motion.div>

                {/* BADGE */}
                <motion.div
                  variants={imageItemVariants}
                  className="absolute left-3 top-3 flex max-w-[calc(100%-55px)] items-center gap-2 rounded-full border border-white/25 bg-[#10243A]/60 px-3 py-2 text-white shadow-lg backdrop-blur-md sm:left-5 sm:top-5 sm:px-4"
                >
                  <HeartPulse size={15} className="shrink-0 text-[#65D1C9]" />
                  <span className="truncate text-[9px] font-bold tracking-[0.10em] sm:text-[10px] sm:tracking-[0.15em]">
                    FORMATION & ACCOMPAGNEMENT
                  </span>
                </motion.div>

                {/* SIGNATURE VISUELLE */}
                <motion.div
                  variants={imageItemVariants}
                  className="absolute bottom-3 left-3 right-3 sm:bottom-7 sm:left-7 sm:right-7"
                >
                  <div className="max-w-[280px] border-l-[3px] border-[#65D1C9] bg-[#10243A]/90 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:max-w-[300px] sm:px-6 sm:py-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#65D1C9] sm:text-xs sm:tracking-[0.18em]">
                      IFP MEDHE
                    </p>
                    <p className="mt-1.5 text-base font-semibold leading-snug sm:mt-2 sm:text-xl">
                      La formation au service de l'humain.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* PETITS POINTS DÉCORATIFS */}
              <motion.div
                variants={imageItemVariants}
                className="absolute -bottom-6 right-5 flex gap-1.5 sm:-bottom-8 sm:right-8 sm:gap-2"
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <span
                    key={item}
                    className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${
                      item === 1 || item === 5
                        ? "bg-[#16A6A1]"
                        : "bg-[#16A6A1]/25"
                    }`}
                  />
                ))}
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

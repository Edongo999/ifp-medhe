"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { FormEvent } from "react";

import {
  X,
  GraduationCap,
  ArrowRight,
  User,
  Phone,
  Mail,
  BookOpen,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  const [mounted, setMounted] = useState(false);

  // Vérifier que le composant est monté côté navigateur
  useEffect(() => {
    setMounted(true);
  }, []);

  // Bloquer le défilement de la page et gérer la touche Échap
  useEffect(() => {
    if (!mounted || !isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, mounted]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connexion à l'API ou au service de réception à mettre en place.
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#081827]/85 p-2 backdrop-blur-md sm:p-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[calc(100dvh-16px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
      >
        {/* EN-TÊTE */}
        <div className="relative shrink-0 overflow-hidden bg-[#10243A] px-5 py-5 text-white sm:px-9 sm:py-8">
          <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#16A6A1]/20 blur-3xl sm:h-56 sm:w-56" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le formulaire"
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:right-5 sm:top-5 sm:h-10 sm:w-10"
          >
            <X size={19} />
          </button>

          <div className="relative">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#16A6A1] sm:mb-5 sm:h-12 sm:w-12">
              <GraduationCap size={23} />
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#65D1C9] sm:text-xs">
              IFP MEDHE · Admissions
            </p>

            <h2
              id="registration-title"
              className="mt-1.5 max-w-md pr-8 text-xl font-extrabold leading-tight sm:mt-2 sm:text-3xl"
            >
              Construisez votre avenir professionnel.
            </h2>

            <p className="mt-2 max-w-lg text-xs leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-6">
              Faites le premier pas vers votre formation en remplissant ce
              formulaire.
            </p>
          </div>
        </div>

        {/* FORMULAIRE */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:px-9 sm:py-8">
            <div className="mb-5 flex items-start gap-2.5 rounded-xl border border-[#16A6A1]/15 bg-[#F1F6F8] p-3 sm:mb-6 sm:gap-3 sm:p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#16A6A1] sm:h-9 sm:w-9">
                <ShieldCheck size={18} />
              </div>

              <div>
                <p className="text-xs font-bold text-[#10243A] sm:text-sm">
                  Demande d'information et d'admission
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                  Renseignez vos informations pour manifester votre intérêt.
                </p>
              </div>
            </div>

            <div className="mb-4 sm:mb-5">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#10243A] sm:text-sm">
                Informations personnelles
              </h3>
              <div className="mt-2 h-1 w-9 rounded-full bg-[#16A6A1]" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {/* NOM */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1.5 block text-xs font-semibold text-[#10243A] sm:text-sm"
                >
                  Nom et prénom <span className="text-[#16A6A1]">*</span>
                </label>

                <div className="relative">
                  <User
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Votre nom complet"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-[#10243A] outline-none transition placeholder:text-slate-400 focus:border-[#16A6A1] focus:bg-white focus:ring-4 focus:ring-[#16A6A1]/10 sm:h-12 sm:pl-11"
                  />
                </div>
              </div>

              {/* TÉLÉPHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-xs font-semibold text-[#10243A] sm:text-sm"
                >
                  Téléphone <span className="text-[#16A6A1]">*</span>
                </label>

                <div className="relative">
                  <Phone
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+237 6XX XXX XXX"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-[#10243A] outline-none transition placeholder:text-slate-400 focus:border-[#16A6A1] focus:bg-white focus:ring-4 focus:ring-[#16A6A1]/10 sm:h-12 sm:pl-11"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-semibold text-[#10243A] sm:text-sm"
                >
                  Adresse e-mail <span className="text-[#16A6A1]">*</span>
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="exemple@email.com"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-[#10243A] outline-none transition placeholder:text-slate-400 focus:border-[#16A6A1] focus:bg-white focus:ring-4 focus:ring-[#16A6A1]/10 sm:h-12 sm:pl-11"
                  />
                </div>
              </div>

              {/* FORMATION */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="formation"
                  className="mb-1.5 block text-xs font-semibold text-[#10243A] sm:text-sm"
                >
                  Formation souhaitée <span className="text-[#16A6A1]">*</span>
                </label>

                <div className="relative">
                  <BookOpen
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <select
                    id="formation"
                    name="formation"
                    required
                    defaultValue=""
                    className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-[#10243A] outline-none transition focus:border-[#16A6A1] focus:bg-white focus:ring-4 focus:ring-[#16A6A1]/10 sm:h-12 sm:pl-11"
                  >
                    <option value="" disabled>
                      Sélectionnez une formation
                    </option>
                    <option value="Auxiliaire de Vie Sociale">
                      Auxiliaire de Vie Sociale
                    </option>
                    <option value="Auxiliaire de Puériculture">
                      Auxiliaire de Puériculture
                    </option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold text-[#10243A] sm:text-sm"
                >
                  Votre message{" "}
                  <span className="font-normal text-slate-400">
                    (facultatif)
                  </span>
                </label>

                <div className="relative">
                  <MessageSquare
                    size={17}
                    className="absolute left-3.5 top-3.5 text-slate-400"
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Posez vos questions ou précisez vos attentes..."
                    className="min-h-[85px] w-full resize-y rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm text-[#10243A] outline-none transition placeholder:text-slate-400 focus:border-[#16A6A1] focus:bg-white focus:ring-4 focus:ring-[#16A6A1]/10 sm:pl-11"
                  />
                </div>
              </div>
            </div>

            {/* BOUTONS */}
            <div className="mt-5 flex flex-col-reverse gap-2.5 border-t border-slate-100 pt-5 sm:mt-7 sm:flex-row sm:justify-end sm:gap-3 sm:pt-6">
              <button
                type="button"
                onClick={onClose}
                className="min-h-11 rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Annuler
              </button>

              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#16A6A1] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#16A6A1]/20 transition hover:bg-[#128C87] sm:px-7"
              >
                Envoyer ma demande
                <ArrowRight size={17} />
              </button>
            </div>

            <p className="mt-4 text-center text-[10px] leading-4 text-slate-400 sm:text-xs sm:leading-5">
              Vos informations sont destinées au traitement de votre demande
              auprès de l'IFP MEDHE.
            </p>
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import RegistrationModal from "./RegistrationModal";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);

  const openRegistration = () => {
    setMenuOpen(false);
    setRegistrationOpen(true);
  };

  return (
    <>
      <header className="relative z-40 w-full bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 flex-col">
            <span className="text-xl font-extrabold tracking-tight text-[#10243A] md:text-2xl">
              IFP <span className="text-[#16A6A1]">MEDHE</span>
            </span>
            <span className="text-[8px] font-medium tracking-[0.13em] text-gray-500 md:text-[9px] md:tracking-widest">
              Excellence • Formation • Avenir
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#10243A] transition-colors hover:text-[#16A6A1]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions desktop */}
          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              onClick={openRegistration}
              className="inline-flex items-center gap-2 rounded-lg bg-[#16A6A1] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#16A6A1]/20 transition hover:-translate-y-0.5 hover:bg-[#128C87]"
            >
              S'inscrire
              <ArrowRight size={16} />
            </button>

            <LanguageSwitcher />
          </div>

          {/* Actions mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher compact />

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F1F5F9] text-[#10243A] transition hover:bg-[#16A6A1] hover:text-white"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white px-5 pb-6 pt-2 shadow-xl md:hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-gray-100 py-4 text-sm font-medium text-[#10243A] transition-colors hover:text-[#16A6A1]"
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={openRegistration}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#16A6A1] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#128C87]"
              >
                S'inscrire
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Formulaire indépendant du menu */}
      <RegistrationModal
        isOpen={registrationOpen}
        onClose={() => setRegistrationOpen(false)}
      />
    </>
  );
}

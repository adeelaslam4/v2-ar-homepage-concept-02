"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Arrow from "./Arrow";

const LINKS = [
  { label: "Ansatz", href: "#ansatz" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über Alina", href: "#alina" },
  { label: "Speaking", href: "#speaking" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-3 z-50 px-3 md:top-4 md:px-5">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between rounded-2xl bg-charcoal px-4 text-ivory shadow-[0_20px_50px_-30px_rgba(0,0,0,0.5)] md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="A.R. ASCENDANCY – Startseite">
          <Image src="/logo/monogram-original@2x.png" alt="" width={654} height={660} unoptimized priority className="h-8 w-auto" />
          <Image src="/logo/wordmark-original@2x.png" alt="A.R. ASCENDANCY" width={926} height={66} unoptimized priority className="hidden h-[11px] w-auto sm:block" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="navlink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="mailto:office@ar-ascendancy.com" className="hidden text-[0.82rem] text-ivory/70 transition-colors hover:text-ivory lg:inline">
            office@ar-ascendancy.com
          </a>
          <a href="#kontakt" className="btn btn-gold btn-sm hidden md:inline-flex">
            Erstgespräch
            <Arrow />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 top-0 h-[1.5px] w-full bg-ivory transition-transform duration-300 ${open ? "translate-y-[5.5px] rotate-45" : ""}`} />
              <span className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-ivory transition-transform duration-300 ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-x-3 top-[5.5rem] z-40 rounded-2xl bg-charcoal p-6 text-ivory shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] transition-all duration-300 md:hidden ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="h-sub text-[1.6rem]">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#kontakt" onClick={() => setOpen(false)} className="btn btn-gold mt-6 w-full justify-center">
          Erstgespräch vereinbaren
          <Arrow />
        </a>
      </div>
    </header>
  );
}

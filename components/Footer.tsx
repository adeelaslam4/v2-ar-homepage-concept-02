import Image from "next/image";

const NAV = [
  { label: "Ansatz", href: "#ansatz" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über Alina", href: "#alina" },
  { label: "Speaking", href: "#speaking" },
];

export default function Footer() {
  return (
    <footer className="px-5 pb-8 pt-16 md:pt-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Image src="/logo/lockup-original@2x.png" alt="A.R. ASCENDANCY" width={1000} height={1000} unoptimized className="h-32 w-auto" />
            <p className="mt-4 font-label text-[0.72rem] font-semibold tracking-[0.18em] text-mute">CLARITY · DECISION · ASCENT</p>
            <p className="copy mt-6 max-w-[380px] text-mute">
              Executive Coaching, Consulting, Mentoring &amp; Strategic Advisory. Berlin.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="font-label text-[0.72rem] font-semibold tracking-[0.14em] text-mute-2">NAVIGATION</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="text-[0.95rem] transition-colors hover:text-gold-deep">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-label text-[0.72rem] font-semibold tracking-[0.14em] text-mute-2">KONTAKT</p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              <li>
                <a href="mailto:office@ar-ascendancy.com" className="transition-colors hover:text-gold-deep">
                  office@ar-ascendancy.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alina-rogall-502749411/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-deep">
                  LinkedIn
                </a>
              </li>
            </ul>
            <p className="mt-8 font-label text-[0.72rem] font-semibold tracking-[0.14em] text-mute-2">RECHTLICHES</p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              <li>
                <a href="#impressum" className="transition-colors hover:text-gold-deep" title="Text folgt">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#datenschutz" className="transition-colors hover:text-gold-deep" title="Text folgt">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-[0.78rem] text-mute md:flex-row md:items-center md:justify-between">
          <span>© 2026 A.R. ASCENDANCY · Alina Rogall · Berlin</span>
          <span>Konzept 02 · Vorschau · Texte zur Freigabe</span>
        </div>
      </div>
    </footer>
  );
}

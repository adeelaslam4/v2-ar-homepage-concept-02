"use client";

import { useState } from "react";
import Arrow from "./Arrow";

const SERVICES = [
  {
    n: "01",
    t: "Executive Coaching",
    tag: "1:1 · Einzelpersonen, Selbstständige, Führungskräfte",
    d: "Für Menschen, die trotz äußerem Erfolg spüren, dass ihre bisherige Realität nicht mehr zu ihnen passt. Klarer entscheiden, bewusster führen, tief verankerte Muster nachhaltig verändern.",
  },
  {
    n: "02",
    t: "Strategic Advisory",
    tag: "Entscheidungen mit Tragweite",
    d: "Sparring für Entscheidungen, die sich nicht delegieren lassen: Richtung, Positionierung, Übergänge. Eine externe Perspektive, die Denkweisen challengt — die Entscheidung bleibt bei Ihnen.",
  },
  {
    n: "03",
    t: "Consulting",
    tag: "Unternehmen, Führungskräfte & Teams",
    d: "Bewusste Selbstführung, klare Entscheidungsfindung und nachhaltige Veränderung gezielt stärken — als Teamarbeit, individuell und praxisnah.",
  },
  {
    n: "04",
    t: "Mentoring",
    tag: "Begleitung über die Entscheidung hinaus",
    d: "Wenn die Richtung gewählt ist, beginnt die eigentliche Arbeit: Entscheidungen durch Unsicherheit und Veränderung hindurch halten, bis sie gelebte Realität sind.",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="leistungen" className="px-3 md:px-5">
      <div data-panel className="card-dark mx-auto max-w-[1320px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p data-reveal className="eyebrow text-gold">
              Leistungen
            </p>
            <h2 data-reveal data-delay="80" className="h-section mt-6 text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem]">
              Für Menschen in
              <br />
              <span className="text-mute-2">Entscheidungspositionen.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:self-end">
            <p data-reveal data-delay="160" className="copy text-ivory/70">
              Vier Formate, ein Anspruch: Klarheit, die Entscheidungen trägt. Auf Basis von Mental
              Reconditioning und Methoden der Entscheidungsfindung — individuell als 1:1
              Zusammenarbeit oder als Teamarbeit.
            </p>
          </div>
        </div>

        <ul data-reveal-group data-stagger="100" className="mt-14 md:mt-20">
          {SERVICES.map((s, i) => (
            <li
              key={s.n}
              className="srow relative"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              aria-expanded={active === i}
            >
              <span className="num">{s.n}</span>
              <div>
                <h3 className="title">{s.t}</h3>
                <p className="mt-2 font-label text-[0.8rem] font-medium tracking-[0.04em] text-mute-2">{s.tag}</p>
                {/* Mobile: description always visible beneath the title */}
                <p className="desc mt-3 md:hidden">{s.d}</p>
              </div>
              <p
                className="desc hidden md:block transition-[opacity,transform] duration-500"
                style={{ opacity: active === i ? 1 : 0.55, transform: active === i ? "translateY(0)" : "translateY(4px)" }}
              >
                {s.d}
              </p>
              <span className="arrow justify-self-end" aria-hidden="true">
                <Arrow />
              </span>
              <span className="glow" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Image from "next/image";
import Nav from "@/components/Nav";
import Motion from "@/components/Motion";
import Arrow from "@/components/Arrow";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { PHOTOS } from "@/lib/images";

const CALENDLY = "#kontakt"; // Calendly link to be supplied by the client
const MAIL = "mailto:office@ar-ascendancy.com";

/* Code-built visual: a single ascending line, drawn on scroll. */
function AscentLine({ className = "" }: { className?: string }) {
  return (
    <svg data-ascent viewBox="0 0 600 220" fill="none" className={className} aria-hidden="true">
      <path d="M0 200 C 120 200, 160 150, 230 140 S 330 110, 400 70 S 520 20, 600 8" stroke="#d6c1a3" strokeWidth="1.5" />
      <path d="M0 212 C 140 212, 190 185, 260 180 S 360 160, 430 120 S 540 60, 600 40" stroke="#d6c1a3" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  );
}

const PRINCIPLES = [
  {
    k: "Clarity",
    t: "Klarheit",
    d: "Die eigene Realität so sehen, wie sie ist — bevor die nächste vollständig sichtbar wird. Ohne Beschönigung, ohne Dramatisierung.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="4" />
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4" />
      </svg>
    ),
  },
  {
    k: "Decision",
    t: "Entscheidung",
    d: "Optionen bewerten, innere Konflikte sichtbar machen und die eigene Richtung bewusst wählen — rational verstanden und innerlich getragen.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M10 36 24 12l14 24" />
        <path d="M17 24h14" />
        <circle cx="24" cy="12" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    k: "Ascent",
    t: "Aufstieg",
    d: "Die getroffene Entscheidung durch Unsicherheit und Veränderung hindurch halten — bis sie zur gelebten Realität geworden ist.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M8 38h32" />
        <path d="M12 32 22 20l6 6 10-14" />
        <path d="M32 12h6v6" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    n: "01",
    t: "Standortbestimmung",
    d: "Ein kostenfreies Erstgespräch. Wo stehen Sie, was passt nicht mehr, und welche Entscheidung steht eigentlich an? Klar, direkt, vertraulich.",
  },
  {
    n: "02",
    t: "Perspektivwechsel",
    d: "Strukturierte Reflexion, Mental Reconditioning und Methoden der Entscheidungsfindung — je nach Situation kombiniert, nie nach Schema.",
  },
  {
    n: "03",
    t: "Richtung halten",
    d: "Entscheidungen umsetzen und durch Widerstand tragen: individuell im 1:1 oder gemeinsam mit Ihrem Team. Die Entscheidung bleibt immer bei Ihnen.",
  },
];

export default function Home() {
  return (
    <>
      <Motion />
      <Nav />

      <main>
        {/* ───────── HERO ───────── */}
        <section className="relative px-5 pb-6 pt-16 md:pt-24">
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-[1040px] text-center">
              <p data-hero-after className="eyebrow justify-center text-mute opacity-0 translate-y-4">
                Executive Coaching · Strategic Advisory · Berlin
              </p>
              <h1 className="h-display mt-7 text-[2.7rem] sm:text-[3.6rem] md:text-[4.4rem] lg:text-[5rem] xl:text-[5.4rem]">
                <span className="block">
                  {["Klarheit,", "die"].map((w) => (
                    <span key={w} className="hero-word mr-[0.22em]">
                      {w}
                    </span>
                  ))}
                </span>
                <span className="block">
                  <span className="hero-mark mark" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 19 19 5M9 5h10v10" />
                    </svg>
                  </span>
                  {["Entscheidungen", "trägt"].map((w) => (
                    <span key={w} className="hero-word mr-[0.22em]">
                      {w}
                    </span>
                  ))}
                </span>
                <span className="block text-mute-2">
                  {["und", "Führung", "verändert."].map((w) => (
                    <span key={w} className="hero-word mr-[0.22em]">
                      {w}
                    </span>
                  ))}
                </span>
              </h1>
              <p data-hero-after className="lede mx-auto mt-8 max-w-[640px] opacity-0 translate-y-4">
                Executive Coaching, Consulting, Mentoring und Strategic Advisory für Führungskräfte,
                Unternehmer:innen und Teams, die ihre nächste Realität bewusst gestalten wollen.
              </p>
              <div data-hero-after className="mt-9 flex flex-col items-center justify-center gap-3 opacity-0 translate-y-4 sm:flex-row">
                <a href={CALENDLY} className="btn btn-gold">
                  Kostenfreies Erstgespräch
                  <Arrow />
                </a>
                <a href="#ansatz" className="btn btn-ghost">
                  Ansatz entdecken
                </a>
              </div>
            </div>

            {/* Split composition: dark editorial panel + art-directed portrait panel */}
            <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-5">
              <div data-panel className="card-dark relative overflow-hidden p-8 md:p-10 lg:p-12">
                <div className="grid-texture absolute inset-0" aria-hidden="true" />
                <div className="relative flex h-full flex-col">
                  <p className="eyebrow text-gold">Über die Beraterin</p>
                  <h2 className="h-section mt-6 text-[2.2rem] lg:text-[3rem]">
                    Perspektive zuerst.
                    <br />
                    <span className="text-mute-2">Dann Entscheidung.</span>
                  </h2>
                  <p className="copy mt-6 max-w-[460px] text-ivory/75">
                    Ich arbeite mit Menschen, die äußerlich erfolgreich sind und innerlich spüren,
                    dass die nächste Etappe eine andere Klarheit verlangt. Mental Reconditioning,
                    strukturierte Reflexion und strategische Beratung — individuell, direkt, praxisnah.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#alina" className="btn btn-gold btn-sm">
                      Mehr über Alina
                      <Arrow />
                    </a>
                    <a href="#leistungen" className="btn btn-ghost-dark btn-sm">
                      Leistungen ansehen
                    </a>
                  </div>

                  <div className="card-inner-dark mt-10 flex items-center gap-5 p-4 md:mt-auto">
                    <div className="flex h-16 w-16 flex-none items-center justify-center rounded-xl bg-charcoal">
                      <Image src="/logo/monogram-original@2x.png" alt="" width={654} height={660} unoptimized className="h-10 w-auto" />
                    </div>
                    <div>
                      <p className="font-label text-[0.95rem] font-semibold tracking-[0.06em]">CLARITY · DECISION · ASCENT</p>
                      <p className="mt-1 text-[0.85rem] text-mute-2">Der Dreiklang hinter jeder Zusammenarbeit.</p>
                      <a href="#ansatz" className="mt-2 inline-flex items-center gap-2 text-[0.82rem] font-medium text-gold">
                        Ansatz lesen <Arrow className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div data-mask className="frame frame-dark aspect-[4/5] rounded-3xl md:aspect-auto md:h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={PHOTOS.heroPortrait} alt="Alina Rogall, Founder & CEO A.R. ASCENDANCY" fetchPriority="high" />
                </div>
                {/* Two quiet cards: what she offers, not numbers */}
                <div data-reveal-group className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-3 md:inset-x-5 md:bottom-5">
                  <div className="card p-4">
                    <p className="font-label text-[0.72rem] font-semibold tracking-[0.1em] text-gold-deep">1:1</p>
                    <p className="mt-1 text-[0.95rem] font-semibold leading-snug">Executive Coaching</p>
                    <p className="mt-1 text-[0.78rem] text-mute">Für Einzelpersonen, Selbstständige &amp; Führungskräfte</p>
                  </div>
                  <div className="card p-4">
                    <p className="font-label text-[0.72rem] font-semibold tracking-[0.1em] text-gold-deep">TEAMS</p>
                    <p className="mt-1 text-[0.95rem] font-semibold leading-snug">Unternehmen &amp; Teams</p>
                    <p className="mt-1 text-[0.78rem] text-mute">Selbstführung, Entscheidung, Veränderung</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Discipline strip — typographic, no logos */}
            <div data-reveal className="strip mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 md:mt-14">
              {["Executive Coaching", "Strategic Advisory", "Consulting", "Mentoring", "Leadership", "Decision-Making"].map((d) => (
                <span key={d} className="strip-item">
                  <span className="dot" aria-hidden="true" />
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── PHILOSOPHY ───────── */}
        <section id="ansatz" className="px-5 py-24 md:py-32">
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-[760px] text-center">
              <p data-reveal className="eyebrow justify-center text-mute">
                Haltung
              </p>
              <h2 data-reveal data-delay="80" className="h-section mt-6 text-[2.4rem] md:text-[3.4rem] lg:text-[4rem]">
                Think consciously.
                <br />
                <span className="text-mute-2">Change everything.</span>
              </h2>
              <p data-reveal data-delay="160" className="lede mx-auto mt-6 max-w-[560px]">
                Keine Methode von der Stange. Drei Prinzipien, die jede Zusammenarbeit tragen —
                und die Reihenfolge, in der Veränderung tatsächlich entsteht.
              </p>
            </div>

            <div data-reveal-group data-stagger="110" className="mx-auto mt-14 grid max-w-[1080px] gap-4 md:grid-cols-3 md:gap-5">
              {PRINCIPLES.map((p) => (
                <div key={p.k} className="card group p-7 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-gold md:p-8">
                  <div className="flex items-center justify-between">
                    <p className="font-label text-[0.74rem] font-semibold tracking-[0.12em] text-mute-2 transition-colors duration-500 group-hover:text-gold-deep">
                      {p.k.toUpperCase()}
                    </p>
                  </div>
                  <div className="mt-10 flex h-28 items-center justify-center text-mute-2 transition-colors duration-500 group-hover:text-gold-deep">
                    <div className="h-20 w-20">{p.icon}</div>
                  </div>
                  <h3 className="h-sub mt-8 text-[1.35rem]">{p.t}</h3>
                  <p className="copy mt-3 text-mute">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── SERVICES (dark) ───────── */}
        <Services />

        {/* ───────── APPROACH ───────── */}
        <section id="ablauf" className="px-5 py-24 md:py-32">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-12 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-5">
                <div className="md:sticky md:top-32">
                  <p data-reveal className="eyebrow text-mute">
                    Ablauf
                  </p>
                  <h2 data-reveal data-delay="80" className="h-section mt-6 text-[2.4rem] md:text-[3.2rem]">
                    Drei Schritte.
                    <br />
                    <span className="text-mute-2">Eine Richtung.</span>
                  </h2>
                  <p data-reveal data-delay="160" className="lede mt-6 max-w-[420px]">
                    Ein klarer Prozess, der Ihre Zeit respektiert — und Ihre Entscheidung nicht
                    abnimmt, sondern trägt.
                  </p>
                  <div data-mask className="frame mt-10 aspect-[16/10] rounded-3xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={PHOTOS.approach} alt="" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 lg:col-start-7 lg:col-span-6">
                <ol data-reveal-group data-stagger="120" className="divide-y divide-line border-y border-line">
                  {STEPS.map((s) => (
                    <li key={s.n} className="grid gap-4 py-10 md:grid-cols-[5rem_1fr] md:gap-8">
                      <span className="font-label text-[0.8rem] font-semibold tracking-[0.12em] text-gold-deep">{s.n}</span>
                      <div>
                        <h3 className="h-sub text-[1.6rem] md:text-[2rem]">{s.t}</h3>
                        <p className="copy mt-4 max-w-[520px] text-mute">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
                  <a href={CALENDLY} className="btn btn-ink">
                    Erstgespräch vereinbaren
                    <Arrow />
                  </a>
                  <span className="text-[0.9rem] text-mute">Kostenfrei, 30 Minuten, vertraulich.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── FOUNDER ───────── */}
        <section id="alina" className="px-5 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1320px]">
            <div data-panel className="grid overflow-hidden rounded-3xl bg-ivory-2 md:grid-cols-12">
              <div className="relative md:col-span-5">
                <div data-mask className="frame aspect-[4/5] md:h-full md:aspect-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={PHOTOS.founder} alt="Alina Rogall" loading="lazy" />
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 md:col-span-7 md:p-14 lg:p-20">
                <p data-reveal className="eyebrow text-mute">
                  Über Alina
                </p>
                <h2 data-reveal data-delay="80" className="h-section mt-6 text-[2rem] md:text-[2.6rem] lg:text-[3rem]">
                  Ich weiß, wie es ist, eine vertraute Realität zu verlassen —{" "}
                  <span className="text-mute-2">bevor die nächste vollständig sichtbar ist.</span>
                </h2>
                <p data-reveal data-delay="160" className="copy mt-7 max-w-[560px] text-mute">
                  Genau daraus ist A.R. ASCENDANCY entstanden: klar sehen, bewusst entscheiden und die
                  eigene Richtung halten, bis Veränderung zur gelebten Realität wird. Als Consultant,
                  Mentor &amp; Strategic Advisor begleite ich Menschen mit Veränderungswunsch dabei,
                  Klarheit zu finden, selbstsichere Entscheidungen zu treffen und sich selbst zu führen.
                </p>
                <div data-reveal data-delay="240" className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <div>
                    <p className="font-semibold">Alina Rogall</p>
                    <p className="text-[0.9rem] text-mute">Founder &amp; CEO, A.R. ASCENDANCY · Berlin</p>
                  </div>
                  <a href="#alina" className="btn btn-ghost btn-sm">
                    Read my story
                    <Arrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── SPEAKING ───────── */}
        <section id="speaking" className="px-5 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid items-end gap-8 border-t border-line pt-14 md:grid-cols-12">
              <div className="md:col-span-7">
                <p data-reveal className="eyebrow text-mute">
                  Speaking &amp; Podcasts
                </p>
                <h2 data-reveal data-delay="80" className="h-section mt-6 text-[2rem] md:text-[2.8rem]">
                  Für Bühnen, Interviews und Gespräche, die{" "}
                  <span className="text-mute-2">neue Perspektiven eröffnen.</span>
                </h2>
                <p data-reveal data-delay="160" className="copy mt-6 max-w-[560px] text-mute">
                  Rund um Mindset, Entscheidungen, Self-Leadership und Veränderung — zu meiner Arbeit
                  und zu meiner Person.
                </p>
              </div>
              <div data-reveal data-delay="200" className="flex md:col-span-5 md:justify-end">
                <a href={`${MAIL}?subject=Podcast%20%26%20Speaking%20Anfrage`} className="btn btn-ghost">
                  Podcast &amp; Speaking Anfragen
                  <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── FINAL CTA (dark) ───────── */}
        <section id="kontakt" className="px-3 pb-3 md:px-5 md:pb-5">
          <div data-panel className="card-dark relative mx-auto max-w-[1320px] overflow-hidden px-8 py-20 md:px-14 md:py-28 lg:px-20">
            <AscentLine className="pointer-events-none absolute -bottom-6 left-1/2 w-[60%] max-w-[640px] opacity-60 md:left-[46%]" />
            <div className="relative grid gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <p data-reveal className="eyebrow text-gold">
                  Ready to meet the standard?
                </p>
                <h2 data-reveal data-delay="80" className="h-display mt-6 text-[2.8rem] md:text-[4rem] lg:text-[5rem]">
                  Ready for your
                  <br />
                  <span className="text-mute-2">new reality?</span>
                </h2>
                <p data-reveal data-delay="160" className="lede mt-6 max-w-[540px] text-ivory/70">
                  Ein kostenfreies Erstgespräch — 30 Minuten, in denen wir klären, ob und wie eine
                  Zusammenarbeit Sinn ergibt.
                </p>
              </div>
              <div data-reveal data-delay="240" className="flex flex-col gap-4 md:col-span-4 md:items-end md:justify-end">
                <a href={CALENDLY} className="btn btn-gold">
                  Kostenfreies Erstgespräch vereinbaren
                  <Arrow />
                </a>
                <a href={MAIL} className="text-[0.95rem] text-ivory/70 underline-offset-4 transition-colors hover:text-gold md:text-right">
                  office@ar-ascendancy.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

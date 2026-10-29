"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Page motion, driven by data attributes:
 *  - .hero-word / .hero-mark        → staggered headline reveal on load
 *  - [data-reveal]                  → rise + fade on scroll
 *  - [data-reveal-group]            → children rise + fade, staggered
 *  - [data-mask]                    → image mask reveal (clip-path) + settle
 *  - [data-ascent]                  → SVG line draws itself
 * Respects prefers-reduced-motion (everything rendered static).
 */
export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.classList.add("motion-off");
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const ease = "power3.out";

    const ctx = gsap.context(() => {
      // Hero headline: words, then the gold mark, then supporting copy / CTAs
      const tl = gsap.timeline({ defaults: { ease } });
      tl.to(".hero-word", { opacity: 1, y: 0, duration: 0.8, stagger: 0.06 }, 0.15)
        .to(".hero-mark", { opacity: 1, scale: 1, rotate: 0, duration: 0.6, ease: "back.out(1.6)" }, 0.55)
        .to("[data-hero-after]", { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, 0.75);

      // Generic reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease,
          delay: Number(el.dataset.delay || 0) / 1000,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((el) => {
        gsap.to(el.children, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease,
          stagger: Number(el.dataset.stagger || 90) / 1000,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      // Image mask reveals
      gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((el) => {
        const img = el.querySelector("img");
        const t = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", once: true } });
        t.to(el, { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.inOut" }, 0);
        if (img) t.to(img, { scale: 1, duration: 1.5, ease }, 0.1);
      });

      // Line artwork draws itself
      gsap.utils.toArray<SVGPathElement>("[data-ascent] path").forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(p, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power2.inOut",
          scrollTrigger: { trigger: p, start: "top 80%", once: true },
        });
      });

      // Dark sections: a soft lift as they enter, giving the light→dark transition a beat
      gsap.utils.toArray<HTMLElement>("[data-panel]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          scale: 0.985,
          duration: 0.9,
          ease,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, ScrollTrigger, ensureGsapRegistered } from "../lib/gsap";
import { EXPLORATIONS } from "../data";

const [col1, col2] = [
  EXPLORATIONS.filter((_, i) => i % 2 === 0),
  EXPLORATIONS.filter((_, i) => i % 2 === 1),
];

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !contentRef.current) return;

    ensureGsapRegistered();

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      gsap.to(col1Ref.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom bottom", scrub: true },
      });
      gsap.to(col2Ref.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom bottom", scrub: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] bg-bg">
      <div
        ref={contentRef}
        className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Spielwiese</span>
        </div>
        <h2 className="mb-4 font-display text-3xl text-text-primary md:text-5xl">
          Technische <em className="italic">Experimente</em>
        </h2>
        <p className="mb-8 max-w-md text-sm text-muted md:text-base">
          Einblicke in meine Arbeit — Ausschnitte, Screenshots und Momente
          hinter den Kulissen.
        </p>
        <a
          href="https://github.com/liamd-schneider"
          target="_blank"
          rel="noreferrer"
          className="group relative rounded-full text-sm"
        >
          <span className="absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]" />
          <span className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-text-primary transition-colors">
            Auf GitHub ansehen <span aria-hidden>↗</span>
          </span>
        </a>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
        <div className="grid max-w-[1400px] grid-cols-2 gap-12 px-6 md:gap-40">
          <div ref={col1Ref} className="flex flex-col gap-8">
            {col1.map((item) => (
              <button
                key={item.slug}
                onClick={() => setLightbox(item.image)}
                className="pointer-events-auto aspect-square w-full max-w-[320px] cursor-pointer overflow-hidden rounded-2xl border border-stroke shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-[1.03]"
                style={{ transform: `rotate(${item.rotate}deg)` }}
              >
                <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div ref={col2Ref} className="flex flex-col gap-8">
            {col2.map((item) => (
              <button
                key={item.slug}
                onClick={() => setLightbox(item.image)}
                className="pointer-events-auto aspect-square w-full max-w-[320px] cursor-pointer overflow-hidden rounded-2xl border border-stroke shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-[1.03]"
                style={{ transform: `rotate(${item.rotate}deg)` }}
              >
                <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-6"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              src={lightbox}
              alt=""
              className="max-h-[85vh] max-w-[85vw] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

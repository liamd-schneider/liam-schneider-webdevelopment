import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { useHlsVideo } from "../hooks/useHlsVideo";
import { HLS_SRC, SOCIALS, CONTACT_EMAIL } from "../data";

const MARQUEE_TEXT = "AUTOMATISIERT. GEHOSTET. GEWARTET. • ";

export default function ContactFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useHlsVideo(videoRef, HLS_SRC);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const tween = gsap.to(marquee, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-y-[-1] object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col gap-16 md:gap-20">
        <div className="overflow-hidden">
          <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="font-display text-5xl italic text-text-primary/90 md:text-7xl"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-display text-3xl italic text-text-primary md:text-5xl">
            Lass uns etwas Großartiges bauen.
          </h2>
          <a href={`mailto:${CONTACT_EMAIL}`} className="group relative rounded-full text-sm">
            <span className="absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]" />
            <span className="relative block rounded-full bg-text-primary px-7 py-3.5 text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
              {CONTACT_EMAIL}
            </span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 pt-6 md:px-10">
          <div className="flex gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted transition-colors hover:text-text-primary"
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Verfügbar für neue Projekte
          </div>
        </div>
      </div>
    </section>
  );
}

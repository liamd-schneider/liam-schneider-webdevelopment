import { useEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsap";
import { useHlsVideo } from "../hooks/useHlsVideo";
import { HLS_SRC, ROLES } from "../data";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useHlsVideo(videoRef, HLS_SRC);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.1
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={rootRef} className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted">
          Portfolio &apos;26
        </span>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          Liam Schneider
        </h1>

        <p className="blur-in mb-2 text-base text-muted md:text-lg">
          Ein{" "}
          <span key={roleIndex} className="animate-role-fade-in inline-block font-display italic text-text-primary">
            {ROLES[roleIndex]}
          </span>{" "}
          aus Deutschland.
        </p>

        <p className="blur-in mb-12 max-w-md text-sm text-muted md:text-base">
          Ich entwickle Websites, automatisiere wiederkehrende Prozesse und
          kümmere mich um Hosting und Wartung – damit deine digitalen Systeme
          einfach und zuverlässig laufen.
        </p>

        <div className="blur-in inline-flex gap-4">
          <a
            href="#work"
            className="group relative rounded-full text-sm hover:scale-105"
          >
            <span className="absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]" />
            <span className="relative block rounded-full bg-text-primary px-7 py-3.5 text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
              Projekte ansehen
            </span>
          </a>
          <a
            href="#contact"
            className="group relative rounded-full text-sm hover:scale-105"
          >
            <span className="absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]" />
            <span className="relative block rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-text-primary transition-colors duration-300 group-hover:border-transparent">
              Kontakt aufnehmen
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scrollen</span>
        <span className="relative h-10 w-px overflow-hidden bg-stroke">
          <span className="animate-scroll-down absolute inset-x-0 top-0 h-1/3 bg-text-primary" />
        </span>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToId(id: string) {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      setActive(id);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        <a
          href="#home"
          onClick={scrollToId("home")}
          className="group relative flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
        >
          <span className="accent-gradient absolute inset-0 rounded-full transition-[background-image] duration-300 [background-image:linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)] group-hover:[background-image:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]" />
          <span className="relative flex h-[calc(100%-2px)] w-[calc(100%-2px)] items-center justify-center rounded-full bg-bg">
            <span className="font-display text-[13px] italic text-text-primary">LS</span>
          </span>
        </a>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={scrollToId(link.id)}
            className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
              active === link.id
                ? "bg-stroke/50 text-text-primary"
                : "text-muted hover:bg-stroke/50 hover:text-text-primary"
            }`}
          >
            {link.label}
          </a>
        ))}

        <span className="mx-1 h-5 w-px bg-stroke" />

        <a
          href="#contact"
          onClick={scrollToId("contact")}
          className="group relative rounded-full text-xs sm:text-sm"
        >
          <span className="absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]" />
          <span className="relative flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-muted backdrop-blur-md transition-colors group-hover:text-text-primary sm:px-4 sm:py-2">
            Hallo sagen <span aria-hidden>↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
}

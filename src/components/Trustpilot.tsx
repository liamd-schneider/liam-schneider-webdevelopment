import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  TRUSTPILOT_BUSINESS_ID,
  TRUSTPILOT_TEMPLATE_ID,
  TRUSTPILOT_TOKEN,
  TRUSTPILOT_PROFILE_URL,
  TESTIMONIALS,
} from "../data";

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: Element | null, force?: boolean) => void;
    };
  }
}

const SCRIPT_SRC = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";

const headerMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return parts.length > 1
    ? `${parts[0][0]}${parts[1][0]}`
    : name.slice(0, 2);
}

export default function Trustpilot() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function render() {
      window.Trustpilot?.loadFromElement(widgetRef.current, true);
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      render();
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = render;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="bewertungen" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div {...headerMotion} className="mb-10 md:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">Bewertungen</span>
          </div>
          <h2 className="font-display text-3xl text-text-primary md:text-5xl">
            Erfahre, was <em className="italic">Kunden</em> über meine Arbeit sagen
          </h2>
        </motion.div>

        <div className="mb-14 flex justify-center">
          <div
            ref={widgetRef}
            className="trustpilot-widget w-full max-w-[560px]"
            data-locale="de-DE"
            data-template-id={TRUSTPILOT_TEMPLATE_ID}
            data-businessunit-id={TRUSTPILOT_BUSINESS_ID}
            data-style-height="52px"
            data-style-width="100%"
            data-token={TRUSTPILOT_TOKEN}
          >
            <a href={TRUSTPILOT_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              Trustpilot
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((review, i) => (
            <motion.div
              key={review.author + review.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
              className="flex flex-col gap-4 rounded-2xl border border-stroke bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stroke text-xs font-medium uppercase text-text-primary">
                  {initials(review.author)}
                </span>
                <div className="min-w-0">
                  <div className="truncate text-sm text-text-primary">{review.author}</div>
                  <div className="text-xs text-muted">
                    {review.location} · {review.reviewCount}
                  </div>
                </div>
              </div>

              <div className="text-[#00b67a]" aria-label={`${review.rating} von 5 Sternen`}>
                {"★".repeat(review.rating)}
              </div>

              <div>
                <h3 className="mb-1.5 text-sm font-medium text-text-primary">{review.title}</h3>
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted">
                  {review.text}
                </p>
              </div>

              <span className="mt-auto pt-2 text-xs text-muted/70">{review.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

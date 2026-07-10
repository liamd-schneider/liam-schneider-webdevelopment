import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// scattered "pinned photos" look: alternating rotation + vertical stagger
const LAYOUT = [
  { rotate: -5, y: 10 },
  { rotate: 4, y: -14 },
  { rotate: -3, y: 18 },
  { rotate: 6, y: -8 },
  { rotate: -6, y: 14 },
  { rotate: 3, y: -18 },
];

export default function ProjectCollage({ images, alt }: { images: string[]; alt: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (images.length === 0) return null;

  return (
    <div className="border-t border-stroke bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Weitere Einblicke</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-y-16">
          {images.map((src, i) => {
            const layout = LAYOUT[i % LAYOUT.length];
            return (
              <motion.button
                key={src}
                onClick={() => setLightbox(src)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  rotate: layout.rotate,
                  translateY: layout.y,
                  zIndex: i,
                  marginLeft: i === 0 ? 0 : -72,
                }}
                whileHover={{ rotate: 0, scale: 1.08, zIndex: 50 }}
                className="relative aspect-4/3 w-[260px] shrink-0 cursor-pointer overflow-hidden rounded-xl border border-stroke bg-bg shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] transition-shadow duration-300 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.75)] sm:w-[340px] md:w-[380px]"
              >
                <img
                  src={src}
                  alt={`${alt} – weiterer Einblick ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.button>
            );
          })}
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
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              src={lightbox}
              alt=""
              className="max-h-[85vh] max-w-[85vw] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

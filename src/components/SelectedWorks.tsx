import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data";

const MotionLink = motion(Link);

const headerMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function SelectedWorks() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div {...headerMotion} className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">Ausgewählte Arbeiten</span>
            </div>
            <h2 className="font-display text-3xl text-text-primary md:text-5xl">
              Aktuelle <em className="italic">Projekte</em>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted md:text-base">
              Ein Einblick in Projekte, die ich von der ersten Idee bis zum
              Livegang begleitet habe.
            </p>
          </div>

          <Link to="/projekte" className="group relative hidden rounded-full text-sm md:inline-flex">
            <span className="absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]" />
            <span className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-text-primary transition-colors">
              Alle Projekte ansehen <span aria-hidden>→</span>
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {featured.map((project, i) => (
            <MotionLink
              key={project.slug}
              to={`/projekte/${project.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl border border-stroke bg-surface ${project.span ?? "md:col-span-6"} ${project.aspect ?? "aspect-4/3"}`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                <span className="gradient-border-ring rounded-full bg-white px-6 py-3 text-sm text-bg">
                  Ansehen — <em className="font-display italic">{project.title}</em>
                </span>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS } from "../data";

const MotionLink = motion(Link);

export default function ProjectsOverview() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="flex items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="font-display text-lg italic text-text-primary">
          Liam Schneider
        </Link>
        <Link
          to="/#work"
          className="text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-text-primary"
        >
          ← Zurück zur Startseite
        </Link>
      </header>

      <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-6 md:px-10 md:pb-28 lg:px-16">
        <div className="mb-12 md:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">Alle Projekte</span>
          </div>
          <h1 className="font-display text-3xl text-text-primary md:text-5xl">
            Das komplette <em className="italic">Portfolio</em>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <MotionLink
              key={project.slug}
              to={`/projekte/${project.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
              className="group relative aspect-4/3 overflow-hidden rounded-3xl border border-stroke bg-surface"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg via-bg/10 to-transparent p-5">
                <span className="mb-1.5 font-display text-[11px] uppercase tracking-widest text-white/75">
                  {project.category}
                </span>
                <span className="font-display text-lg italic text-white">{project.title}</span>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </div>
  );
}

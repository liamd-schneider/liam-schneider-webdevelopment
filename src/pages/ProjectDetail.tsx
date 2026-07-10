import { Link, useParams } from "react-router-dom";
import ProjectGallery from "../components/ProjectGallery";
import ProjectCollage from "../components/ProjectCollage";
import { PROJECTS } from "../data";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg px-6 text-center">
        <h1 className="font-display text-3xl italic text-text-primary">Projekt nicht gefunden</h1>
        <Link to="/" className="text-sm text-muted underline transition-colors hover:text-text-primary">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }

  const heroImage = project.heroImage ?? project.image;
  const extraImages = (project.images ?? []).filter((src) => src !== project.image && src !== heroImage);

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
          ← Alle Projekte
        </Link>
      </header>

      <ProjectGallery image={heroImage} alt={project.title} />

      <div className="mx-auto max-w-[900px] px-6 py-14 md:px-10 md:py-20">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted">{project.category}</span>
            <h1 className="mt-4 font-display text-4xl italic text-text-primary md:text-6xl">
              {project.title}
            </h1>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative shrink-0 rounded-full text-sm"
            >
              <span className="absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]" />
              <span className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-text-primary transition-colors">
                Live-Seite ansehen <span aria-hidden>↗</span>
              </span>
            </a>
          )}
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">{project.about}</p>

        <div className="mt-14 flex flex-col gap-12">
          <div>
            <h2 className="mb-3 font-display text-xl italic text-text-primary">Herausforderung</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted">{project.challenge}</p>
          </div>
          <div>
            <h2 className="mb-3 font-display text-xl italic text-text-primary">Lösung</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted">{project.solution}</p>
          </div>
          <div>
            <h2 className="mb-3 font-display text-xl italic text-text-primary">Ergebnis</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted">{project.result}</p>
          </div>
        </div>
      </div>

      <ProjectCollage images={extraImages} alt={project.title} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      {/* subtiles Hintergrund-Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* sanfter Glow oben rechts */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent)" }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <a
          href="#"
          className="font-display text-sm font-medium tracking-tight text-foreground sm:text-base"
        >
          Liam Schneider
          <span className="text-muted"> — Web Development</span>
        </a>

        <span className="hidden items-center gap-2 font-mono text-xs text-muted sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          in Arbeit
        </span>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-1 flex-col items-start justify-center px-6 sm:px-10">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-muted sm:text-sm">
          status: building()
        </p>

        <h1 className="max-w-4xl font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-foreground sm:text-[7vw] lg:text-[6.5vw]">
          Hier entsteht
          <br />
          etwas Gro&szlig;es
          <span className="inline-block w-[0.5ch] animate-blink text-accent">
            _
          </span>
        </h1>

        <p className="mt-8 max-w-md text-balance font-body text-base leading-relaxed text-muted sm:text-lg">
          Eine neue Website von Liam Schneider entsteht gerade. Sauber
          gebaut, durchdacht gestaltet — bald online.
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col gap-2 border-t border-line px-6 py-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span>&copy; {new Date().getFullYear()} Liam Schneider</span>
        <span className="flex items-center gap-2 sm:hidden">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          in Arbeit
        </span>
        <span>web-development</span>
      </footer>
    </main>
  );
}

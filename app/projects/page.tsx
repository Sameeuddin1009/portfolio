import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data";

export const metadata: Metadata = {
  title: "Projects | Sameeuddin Rashad Syed",
  description: "Case studies from Sameeuddin Rashad Syed's data and business analysis work.",
};

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-1 flex-col text-ink">
      <Header />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="reveal text-sm text-ink-soft">Selected work</p>
        <h1 className="reveal reveal-delay-1 mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          Case studies from real reporting and analysis work.
        </h1>
        <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-8 text-ink-soft">
          Screenshots and deeper write-ups for each of these are still being added — this page will grow as the
          projects do.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        {projects.map((project) => (
          <article key={project.slug} id={project.slug} className="border-t border-rule py-10 first:border-0 first:pt-0">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs text-ink-soft">{project.stack}</p>
              {project.featured && (
                <span className="bg-accent-warm px-2 py-0.5 font-mono text-xs text-paper">Featured</span>
              )}
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              {project.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">{project.outcome}</p>
            <ul className="mt-5 max-w-2xl space-y-2">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex aspect-video max-w-2xl items-center justify-center border border-dashed border-rule bg-panel/30 font-mono text-xs text-ink-soft">
              Screenshot coming soon
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}

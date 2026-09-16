import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { profile, skillGroups, experience, projects, focusAreas } from "./data";

const featuredProject = projects.find((p) => p.featured) ?? projects[0];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 flex-col text-ink">
      <Header />

      <section id="home" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="reveal flex flex-col justify-center">
            <p className="text-sm text-ink-soft">{profile.role}</p>
            <h1 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-[1.12] text-ink sm:text-5xl">
              I turn scattered operational data into tools people rely on.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-ink-soft">
              MIS Executive at Rostre Spaces — I build the dashboards, automations, and internal software that keep
              reporting honest and decisions fast.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-rule pt-6 text-sm">
              <span className="text-ink-soft">
                <span className="font-mono text-ink">Open to roles</span>
              </span>
              <span className="text-ink-soft">{profile.location}</span>
              <a href={`mailto:${profile.email}`} className="text-accent transition duration-300 hover:underline">
                {profile.email}
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:opacity-85"
              >
                View projects
              </Link>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-ink px-6 py-3 text-sm font-medium text-ink transition duration-300 hover:bg-ink hover:text-paper"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-1 relative min-h-[360px] overflow-hidden border border-rule sm:min-h-[440px] lg:min-h-0">
            <Image
              src="/photo.jpg"
              alt={profile.name}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-accent/10 mix-blend-multiply" />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
              style={{ background: "linear-gradient(to bottom, transparent, var(--paper))" }}
            />
            <div className="absolute bottom-4 left-4 font-mono text-xs text-paper drop-shadow-sm">
              {profile.name}
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="border-y border-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm text-ink-soft">About</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-ink">
              My work turns raw operational data into decisions people can act on.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink-soft">
              My MIS role has put me inside real reporting workflows — validating data, building dashboards, and
              shipping the internal tools that operations and sales teams use every day. I want to bring that same
              rigor to full-time Data Analyst and Business Analyst work: framing the right question, finding the
              signal in messy data, and presenting it so someone can act on it in the same meeting.
            </p>
          </div>

          <div className="border border-rule bg-panel/40 p-6">
            <p className="font-mono text-xs text-ink-soft">Currently focused on</p>
            <div className="mt-5 space-y-4">
              {focusAreas.map((item) => (
                <p key={item} className="border-t border-rule pt-4 text-base leading-7 text-ink-soft first:border-0 first:pt-0">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-9 max-w-2xl">
          <p className="text-sm text-ink-soft">Skills</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink">
            Practical tools for reporting, validation, dashboards, and automation.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="bg-paper p-6">
              <h3 className="font-serif text-lg font-semibold text-ink">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-ink-soft">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-rule bg-panel/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm text-ink-soft">Experience</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">MIS Executive</h2>
            <p className="mt-4 text-base text-ink-soft">Rostre Spaces, Hyderabad</p>
            <p className="mt-1 font-mono text-sm text-ink-soft">Dec 2025 – Present</p>
          </div>
          <div className="space-y-4">
            {experience.map((item) => (
              <div key={item} className="flex gap-4 border-t border-rule pt-4 first:border-0 first:pt-0">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                <p className="text-base leading-7 text-ink-soft">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-ink-soft">Selected work</p>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-semibold leading-tight text-ink">
              {featuredProject.title}
            </h2>
          </div>
          <Link
            href="/projects"
            className="whitespace-nowrap text-sm font-medium text-accent transition duration-300 hover:underline"
          >
            View all projects →
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">{featuredProject.outcome}</p>
      </section>

      <section className="border-y border-rule bg-panel/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm text-ink-soft">Education</p>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-ink sm:text-3xl">
              B.Tech in Computer Science and Business Systems
            </h2>
            <p className="mt-4 text-base text-ink-soft">G. Pulla Reddy Engineering College, Kurnool</p>
            <p className="mt-1 font-mono text-sm text-ink-soft">2020 – 2024 · CGPA 7.18 / 10</p>
          </div>
          <div className="border border-rule bg-paper p-6">
            <p className="font-mono text-xs text-ink-soft">What I&apos;m doing next</p>
            <p className="mt-4 font-serif text-xl font-semibold leading-snug text-ink">
              Deepening SQL and Power BI enough to own an analysis end to end.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              I want to keep learning by building things real people use, and get sharper at turning data into a
              clear recommendation, not just a clean chart.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
        <div className="border border-ink bg-ink p-8 text-paper md:p-12">
          <p className="text-sm text-paper/60">Contact</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Need cleaner reporting, dashboards, or workflow automation?
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-sm bg-accent-warm px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:opacity-90"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-paper/40 px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-paper/10"
            >
              LinkedIn
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center justify-center rounded-sm border border-paper/40 px-6 py-3 text-sm font-medium text-paper transition duration-300 hover:bg-paper/10"
            >
              {profile.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

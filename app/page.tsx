const skills = [
  {
    title: "Programming",
    items: ["Python"],
  },
  {
    title: "Database & querying",
    items: ["MySQL", "SQL joins", "CTEs", "Window functions"],
  },
  {
    title: "Analysis & dashboards",
    items: ["Microsoft Excel", "Power BI", "Google Sheets", "Power Query"],
  },
  {
    title: "Automation",
    items: ["Google Apps Script", "Trigger-based workflows", "Email notifications"],
  },
];

const projects = [
  {
    title: "IPL Team Performance & Auction Strategy Analysis",
    stack: "SQL, Excel",
    summary:
      "Analyzed 10+ IPL seasons to evaluate team and player performance, identify high-impact players, and support auction strategy decisions.",
    points: [
      "Used joins, CTEs, and window functions to study performance patterns.",
      "Built Excel dashboards for trend analysis and player comparison.",
      "Converted raw match data into decision-ready auction insights.",
    ],
  },
  {
    title: "Zomato Global Restaurant Data Analysis",
    stack: "Excel, Power Query",
    summary:
      "Explored 9K+ restaurant records across 15+ countries to understand ratings, pricing, and market expansion opportunities.",
    points: [
      "Cleaned and transformed restaurant data with Power Query.",
      "Designed dashboards to compare ratings, cost, and location trends.",
      "Created insights that highlight practical expansion signals.",
    ],
  },
  {
    title: "Automated Production, Checklist & MIS Reporting System",
    stack: "Google Sheets, Apps Script, Excel",
    summary:
      "Designed production entry sheets, automated MIS workflows, and checklist notifications for better operational visibility.",
    points: [
      "Created trigger-based checklist automation with email notifications.",
      "Built KPI dashboards for workflow visibility and efficiency.",
      "Reduced manual follow-ups through status-driven reporting.",
    ],
  },
];

const stats = [
  { value: "30%", label: "less manual reporting time" },
  { value: "10+", label: "IPL seasons analyzed" },
  { value: "9K+", label: "restaurant records studied" },
  { value: "15+", label: "countries in analysis" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#171717]">
      <header className="sticky top-0 z-30 border-b border-black/10 bg-[#f6f3ec]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-sm font-bold uppercase tracking-[0.24em]">
            SR
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[#4d4a45] md:flex">
            <a href="#about" className="transition hover:text-black">
              About
            </a>
            <a href="#skills" className="transition hover:text-black">
              Skills
            </a>
            <a href="#experience" className="transition hover:text-black">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-black">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>
          <a
            href="mailto:rashad100902@gmail.com"
            className="rounded-full bg-[#171717] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2f6f5e]"
          >
            Hire me
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-[#2f6f5e]">
            Data Analyst & MIS Executive
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-[#171717] sm:text-6xl lg:text-7xl">
            Sameeuddin Rashad Syed
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4d4a45]">
            Detail-oriented analyst building clean datasets, KPI dashboards, and automated reporting systems that help
            teams make faster, more confident decisions.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#2f6f5e] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#245647]"
            >
              View projects
            </a>
            <a
              href="https://linkedin.com/sameeuddin-rashad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3 text-sm font-bold text-[#171717] transition hover:border-[#2f6f5e] hover:text-[#2f6f5e]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative min-h-[430px] overflow-hidden rounded-[8px] border border-black/10 bg-[#191919] p-5 text-white shadow-2xl shadow-black/15">
          <div className="absolute inset-x-0 top-0 h-12 border-b border-white/10 bg-[#242424]" />
          <div className="relative z-10 flex h-full flex-col pt-10">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">MIS dashboard</p>
                <h2 className="mt-2 text-2xl font-bold">Operations visibility</h2>
              </div>
              <span className="rounded-full bg-[#c8ef6a] px-3 py-1 text-xs font-bold text-[#111]">Live KPI</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-3xl font-black text-[#c8ef6a]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-5 text-white/65">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
              {[82, 64, 91, 73, 88, 58, 79].map((height, index) => (
                <div key={index} className="grid grid-cols-[3rem_1fr] items-center gap-3">
                  <span className="text-xs text-white/45">W{index + 1}</span>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-[#c8ef6a]" style={{ width: `${height}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#2f6f5e]">About</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">I turn messy operations data into clear action.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#4d4a45]">
            <p>
              I am a Data Analyst and MIS Executive based in Kurnool, Andhra Pradesh, currently working with Rostre
              Spaces in Hyderabad. My work focuses on data cleaning, dashboard development, automated reporting, and
              workflow visibility for management teams.
            </p>
            <p>
              I enjoy combining SQL, Excel, Power BI, Google Sheets, and Python to create reporting systems that reduce
              manual effort, improve accuracy, and make business decisions easier to track.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#2f6f5e]">Toolkit</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Skills built for reporting, analysis, and automation.</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {skills.map((group) => (
            <article key={group.title} className="rounded-[8px] border border-black/10 bg-white p-5">
              <h3 className="text-lg font-black">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-[#eef1df] px-3 py-1 text-sm font-semibold text-[#3b4630]">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-[#171717] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#c8ef6a]">Experience</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">MIS Executive at Rostre Spaces</h2>
            <p className="mt-4 text-white/55">Hyderabad | Dec 2025 - Present</p>
          </div>
          <div className="space-y-4">
            {[
              "Automated MIS reporting using Advanced Excel and Google Sheets, reducing manual reporting time by 30% while improving data accuracy.",
              "Developed interactive KPI dashboards and production entry tracking sheets to standardize operational data capture.",
              "Built trigger-based checklist automation with status-driven email notifications using Google Sheets and Google Apps Script.",
            ].map((item) => (
              <div key={item} className="rounded-[8px] border border-white/10 bg-white/[0.06] p-5 text-base leading-7 text-white/78">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#2f6f5e]">Projects</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
          Analytics work that moves from raw data to practical business decisions.
        </h2>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col rounded-[8px] border border-black/10 bg-white p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f6f5e]">{project.stack}</p>
              <h3 className="mt-4 text-2xl font-black leading-tight">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#4d4a45]">{project.summary}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[#4d4a45]">
                {project.points.map((point) => (
                  <li key={point} className="border-t border-black/10 pt-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#2f6f5e]">Education</p>
            <h2 className="mt-4 text-3xl font-black">B.Tech in Computer Science and Business Systems</h2>
            <p className="mt-4 text-lg leading-8 text-[#4d4a45]">
              G. Pulla Reddy Engineering College, Kurnool, A.P
            </p>
            <p className="mt-2 font-semibold text-[#4d4a45]">2020 - 2024 | CGPA: 7.18</p>
          </div>
          <div className="rounded-[8px] bg-[#eef1df] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2f6f5e]">Current focus</p>
            <p className="mt-4 text-2xl font-black leading-snug">
              Building cleaner reporting systems with SQL, Excel, Power BI, Google Sheets, and automation.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[8px] bg-[#2f6f5e] p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/65">Contact</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            Looking for a data analyst who can clean, automate, and explain the numbers?
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:rashad100902@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-[#2f6f5e] transition hover:bg-[#c8ef6a] hover:text-[#171717]"
            >
              rashad100902@gmail.com
            </a>
            <a
              href="tel:+917285977299"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10"
            >
              +91 7285977299
            </a>
          </div>
          <p className="mt-6 text-white/70">Kurnool, Andhra Pradesh | Open to data analyst and MIS roles</p>
        </div>
      </section>
    </main>
  );
}

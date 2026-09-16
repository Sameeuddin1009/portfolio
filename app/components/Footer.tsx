import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs">
          {profile.location} · Open to Data Analyst and Business Analyst roles
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={`mailto:${profile.email}`} className="transition duration-300 hover:text-ink">
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition duration-300 hover:text-ink">
            LinkedIn
          </a>
          <a href={`tel:${profile.phone}`} className="transition duration-300 hover:text-ink">
            {profile.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}

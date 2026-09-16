"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "../data";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#profile", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-serif text-lg font-semibold text-ink">
          {profile.name}
        </Link>
        <div className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {links.map((link) => {
            const isHome = link.href === "/";
            const active = isHome ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-1 transition ${active ? "text-ink" : "hover:text-ink"}`}
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            );
          })}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-sm bg-accent-warm px-4 py-2 text-sm font-medium text-paper transition duration-300 hover:opacity-90"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

"use client";

import { motion, useScroll } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="h-px origin-left bg-neutral-900"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5 sm:px-8">
        <a
          href="#top"
          className="text-sm font-medium tracking-tight text-neutral-900"
        >
          {profile.name}
        </a>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

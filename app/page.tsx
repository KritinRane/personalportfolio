import IDCard from "@/components/IDCard";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { experiences, profile, skills } from "@/lib/data";

export default function Home() {
  return (
    <div id="top" className="bg-white font-sans text-neutral-900">
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center gap-14 px-6 pt-24 sm:px-8">
        <IDCard />
        <Reveal className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-neutral-500">{profile.title}</p>
          <p className="mt-1 text-sm text-neutral-400">{profile.tagline}</p>
        </Reveal>
        <a
          href="#about"
          className="absolute bottom-10 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-400"
        >
          Scroll
          <span className="h-8 w-px animate-pulse bg-neutral-300" />
        </a>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-2xl px-6 py-28 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            About
          </p>
          <p className="mt-6 text-2xl leading-relaxed text-neutral-800 sm:text-3xl">
            {profile.about}
          </p>
          <p className="mt-6 text-sm text-neutral-400">{profile.location}</p>
        </Reveal>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="mx-auto max-w-2xl px-6 py-28 sm:px-8"
      >
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            Experience
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-16">
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.org}-${exp.role}`} delay={i * 0.05}>
              <div className="flex flex-col gap-1 border-b border-line pb-8 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {exp.org} · {exp.location}
                  </p>
                </div>
                <div className="text-sm text-neutral-400 sm:text-right">
                  <p>{exp.period}</p>
                  <p>{exp.type}</p>
                </div>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm leading-relaxed text-neutral-600"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-2xl px-6 py-28 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            Skills
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line px-4 py-1.5 text-sm text-neutral-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto flex max-w-2xl flex-col items-start gap-6 px-6 py-32 sm:px-8"
      >
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            Contact
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s work together.
          </h2>
          <div className="mt-8 flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
            >
              {profile.email}
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>

        <p className="mt-16 text-xs text-neutral-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </section>
    </div>
  );
}

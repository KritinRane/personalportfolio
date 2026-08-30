import ContactForm from "@/components/ContactForm";
import IDCard from "@/components/IDCard";
import Reveal from "@/components/Reveal";
import { experiences, profile, projects } from "@/lib/data";

export default function Home() {
  return (
    <div id="top" className="bg-white font-sans text-neutral-900">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 sm:px-8">
        <IDCard />
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

        <div className="mt-12 ml-1.5 flex flex-col border-l border-line sm:ml-2">
          {experiences.map((exp, i) => (
            <Reveal
              key={`${exp.org}-${exp.role}`}
              delay={i * 0.04}
              className="relative pb-14 pl-8 last:pb-0 sm:pl-10"
            >
              <span
                className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ring-4 ring-white ${
                  exp.current ? "bg-neutral-900" : "bg-white border border-neutral-300"
                }`}
              />
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                {exp.period} · {exp.location}
              </p>
              <h3 className="mt-2 text-lg font-medium text-neutral-900">
                {exp.role}
              </h3>
              <p className="text-sm text-neutral-500">{exp.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {exp.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.current && (
                  <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-white">
                    Current
                  </span>
                )}
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-2xl px-6 py-28 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            Projects
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-10">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              delay={i * 0.04}
              className="border-b border-line pb-10 last:border-none last:pb-0"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-600"
                  >
                    {project.name}
                  </a>
                ) : (
                  <h3 className="text-lg font-medium text-neutral-900">
                    {project.name}
                  </h3>
                )}
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                  {project.period}
                </p>
              </div>
              {project.badge && (
                <p className="mt-1 text-xs font-medium text-neutral-500">
                  {project.badge}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-neutral-950 px-6 py-28 text-neutral-100 sm:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-4">
              <p className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Contact
              </p>
              <span className="h-px w-full bg-neutral-800" />
            </div>
            <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-400">
              Open to AI/ML, software engineering, and technical PM
              opportunities. Fill out the form below or reach out directly.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-amber-600 px-5 py-2.5 text-sm font-medium text-amber-500 transition-colors hover:bg-amber-950/40"
              >
                {profile.email}
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
              >
                GitHub ↗
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>

            <ContactForm />
          </Reveal>

          <p className="mt-10 text-xs text-neutral-600">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </section>
    </div>
  );
}

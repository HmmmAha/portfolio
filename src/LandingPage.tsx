import React from 'react';

interface SkillGroup {
  category: string;
  items: string[];
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

interface SocialLink {
  label: string;
  url: string;
}

export interface LandingPageProps {
  name?: string;
  role?: string;
  tagline?: string;
  bio?: string;
  email?: string;
  socialLinks?: SocialLink[];
  skills?: SkillGroup[];
  projects?: Project[];
}

const defaultSkills: SkillGroup[] = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Redux', 'i18next'] },
  { category: 'Backend', items: ['C#', 'Azure Functions', 'Cosmos DB'] },
  { category: 'Platform', items: ['Event Hub', 'Event Grid', 'GA4', 'MSAL'] },
];

const defaultProjects: Project[] = [
  {
    title: 'LMS To-Do Widget',
    description:
      'A React and TypeScript widget for a learning management platform: chip-based content filtering, infinite scroll, and offline-friendly state via Redux-persist.',
    tags: ['React', 'TypeScript', 'Redux', 'Azure Functions'],
  },
  {
    title: 'Cosmos DB Sync Pipeline',
    description:
      'Staging and synchronization pipelines for organizational data in Cosmos DB, including soft-delete and restore behavior across multiple entity types.',
    tags: ['C#', 'Azure Functions', 'Cosmos DB'],
  },
  {
    title: 'GA4 Analytics Integration',
    description:
      'Wired Google Analytics 4 into a React, MSAL, and Redux application, resolving hook-lifecycle and module-compatibility issues along the way.',
    tags: ['React', 'GA4', 'MSAL'],
  },
];

const defaultSocial: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/your-handle' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/your-handle' },
];

export default function LandingPage({
  name = 'Sen',
  role = 'Full-stack developer',
  tagline = 'I build systems that keep data in sync — from React interfaces to event-driven Azure backends.',
  bio = 'I work across the stack in the Azure ecosystem: React and TypeScript on the front end, C# Azure Functions and Cosmos DB on the back end, tied together with Event Hub and Event Grid. Most of my recent work has gone into a learning management platform — widgets, sync pipelines, and the plumbing that keeps them talking to each other.',
  email = 'you@example.com',
  socialLinks = defaultSocial,
  skills = defaultSkills,
  projects = defaultProjects,
}: LandingPageProps) {
  return (
    <div className="bg-paper text-ink font-sans leading-relaxed antialiased">
      <header className="mx-auto flex max-w-[960px] items-center justify-between px-6 py-7">
        <span className="font-display text-lg font-semibold">{name}</span>
        <nav className="flex gap-7 text-[0.95rem]">
          <a
            href="#work"
            className="hover:text-signal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-4 focus-visible:rounded-sm"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:text-signal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-4 focus-visible:rounded-sm"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-signal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-4 focus-visible:rounded-sm"
          >
            Contact
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-[960px] grid-cols-1 items-center gap-10 px-6 pb-24 pt-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="flex flex-col gap-1.5 font-display text-[clamp(2.4rem,5vw,3.4rem)] font-semibold leading-[1.05]">
            {name}
            <span className="font-sans text-[1.1rem] font-medium text-signal-dark">{role}</span>
          </h1>
          <p className="mt-5 max-w-[46ch] text-[1.05rem] text-muted">{tagline}</p>
          <div className="mt-8 flex gap-3.5">
            <a
              href="#work"
              className="inline-flex items-center rounded bg-ink px-5 py-2.5 text-[0.95rem] font-medium text-paper transition-colors duration-150 hover:bg-signal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2 motion-reduce:transition-none"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded border border-line px-5 py-2.5 text-[0.95rem] font-medium text-ink transition-colors duration-150 hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2 motion-reduce:transition-none"
            >
              Get in touch
            </a>
          </div>
        </div>
        <SystemDiagram />
      </section>

      <section id="about" className="mx-auto max-w-[640px] border-t border-line px-6 py-16">
        <h2 className="font-display text-[1.4rem] font-semibold">About</h2>
        <p className="mt-4 text-muted">{bio}</p>
      </section>

      <section className="mx-auto max-w-[960px] border-t border-line px-6 py-16">
        <h2 className="font-display text-[1.4rem] font-semibold">Stack</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 font-mono text-[0.85rem] font-medium text-signal-dark">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[0.95rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[960px] border-t border-line px-6 py-16">
        <h2 className="font-display text-[1.4rem] font-semibold">Projects</h2>
        <div className="mt-8 flex flex-col">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid grid-cols-1 gap-6 border-t border-line py-7 last:border-b md:grid-cols-[1fr_1.6fr]"
            >
              <h3 className="font-display text-[1.1rem] font-semibold">{project.title}</h3>
              <div>
                <p className="mb-3 max-w-[60ch] text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[3px] border border-line px-2 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="mt-2.5 inline-block border-b border-signal-dark text-[0.9rem] text-signal-dark"
                  >
                    View project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="mx-auto max-w-[960px] border-t border-line px-6 pb-12 pt-16">
        <h2 className="font-display text-[1.4rem] font-semibold">Get in touch</h2>
        <a
          href={`mailto:${email}`}
          className="mt-4 inline-block border-b-2 border-signal font-display text-[1.6rem]"
        >
          {email}
        </a>
        <div className="mt-6 flex gap-5 text-[0.95rem] text-muted">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-12 text-[0.85rem] text-muted">
          © {new Date().getFullYear()} {name}
        </p>
      </footer>
    </div>
  );
}

function SystemDiagram() {
  const nodes = [
    { id: 'ui', label: 'React UI', x: 40, y: 40 },
    { id: 'api', label: 'Azure Function', x: 200, y: 110 },
    { id: 'db', label: 'Cosmos DB', x: 360, y: 40 },
    { id: 'hub', label: 'Event Hub', x: 200, y: 220 },
  ];
  const edges: [string, string][] = [
    ['ui', 'api'],
    ['api', 'db'],
    ['api', 'hub'],
    ['hub', 'db'],
  ];
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg
      className="w-full max-w-[400px] justify-self-center"
      viewBox="0 0 400 260"
      role="img"
      aria-label="Diagram of a React front end connected to an Azure Function, Cosmos DB, and Event Hub"
    >
      {edges.map(([from, to], i) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="stroke-line" strokeWidth={1.5} />;
      })}
      {nodes.map((n, i) => (
        <g
          key={n.id}
          className="animate-pulse motion-reduce:animate-none"
          style={{ animationDelay: `${i * 0.6}s` }}
        >
          <circle cx={n.x} cy={n.y} r={9} className="fill-paper stroke-signal-dark" strokeWidth={2} />
          <text x={n.x} y={n.y + 24} textAnchor="middle" className="fill-muted font-mono text-[10px]">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

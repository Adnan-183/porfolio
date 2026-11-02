import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { backendWork, projectData, projectDomains } from '../data/projects-data';
import { ProjectDomain } from '../types';
import ProjectCard, { StatusLabel, StoreLinks } from './ProjectCard';
import Reveal from './ui/Reveal';
import Section from './ui/Section';

type Filter = 'All' | 'Live' | ProjectDomain;

const featured = projectData.filter((p) => p.featured);
const others = projectData.filter((p) => !p.featured);
const filters: Filter[] = ['All', 'Live', ...projectDomains];

const Projects = () => {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = others.filter((p) =>
    filter === 'All' ? true : filter === 'Live' ? p.status === 'Published' : p.domain === filter
  );

  return (
    <Section
      id="work"
      label="Selected work"
      title={
        <>
          The <em className="text-accent">server</em> side and the <em className="text-accent">app</em> side.
        </>
      }
      intro="Backend systems I build and run at Geekybugs, then the mobile apps I've shipped. Most of it is logistics, ride-hailing and tracking: live maps, bidding, payments and the APIs behind them."
    >
      <Reveal className="mb-4 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-3xl">Backend &amp; APIs</h3>
        <p className="label">At Geekybugs</p>
      </Reveal>
      <div className="grid border-b border-line sm:grid-cols-2">
        {backendWork.map((work, i) => (
          <Reveal
            key={work.id}
            delay={(i % 2) * 0.08}
            className="h-full border-t border-line sm:[&:nth-child(odd)]:border-r"
          >
            <article className="group flex h-full flex-col py-7 transition-colors duration-300 hover:bg-surface sm:px-6">
              <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</p>
              <h4 className="mt-3 font-serif text-3xl leading-tight transition-transform duration-300 group-hover:translate-x-1">
                {work.title}
              </h4>
              <p className="mt-3 leading-relaxed text-fg/85">{work.description}</p>
              <ul className="mt-4 flex-1 space-y-1.5 text-sm text-muted">
                {work.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-accent">–</span>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[11px] text-muted">{work.stack.join(' / ')}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-4 mt-20 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-3xl">Mobile apps</h3>
        <p className="label">{featured.length} featured</p>
      </Reveal>
      <div className="border-b border-line">
        {featured.map((project, i) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-serif text-3xl">
            More apps <span className="text-muted">({others.length})</span>
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  filter === f ? 'text-accent underline underline-offset-4' : 'text-muted hover:text-fg'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ul className="border-b border-line">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((project) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid gap-2 border-t border-line py-4 md:grid-cols-[14rem_1fr_auto] md:gap-8"
              >
                <div>
                  <h4 className="font-serif text-2xl leading-tight">{project.title}</h4>
                  <p className="mt-1">
                    <StatusLabel status={project.status} />
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted md:pt-1">{project.description}</p>
                <div className="md:pt-1">
                  <StoreLinks project={project} />
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
          {visible.length === 0 && <li className="border-t border-line py-6 text-sm text-muted">Nothing here yet.</li>}
        </ul>
      </Reveal>
    </Section>
  );
};

export default Projects;

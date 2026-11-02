import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectData, projectDomains } from '../data/projects-data';
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
          Apps that move <em className="text-accent">people</em> and <em className="text-accent">parcels</em>.
        </>
      }
      intro="A few of the mobile apps I've shipped. Most are logistics, ride-hailing and tracking products with live maps, bidding and payments. The backend and web work behind them is under Experience."
    >
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
            Also built <span className="text-muted">({others.length})</span>
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

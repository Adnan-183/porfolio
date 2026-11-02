import { Project, ProjectStatus } from '../types';

const statusText: Record<ProjectStatus, string> = {
  Published: 'Live',
  'In Development': 'In progress',
  Unreleased: 'Private',
};

export const ProjectLogo = ({ project, size = 'md' }: { project: Project; size?: 'sm' | 'md' }) => {
  const box = size === 'sm' ? 'h-9 w-9' : 'h-14 w-14';
  if (!project.thumbnail) {
    return (
      <div className={`${box} flex shrink-0 items-center justify-center border border-line font-serif text-lg italic text-muted`}>
        {project.title.charAt(0)}
      </div>
    );
  }
  return (
    <div className={`${box} shrink-0 overflow-hidden border border-line bg-white`}>
      <img src={project.thumbnail} alt="" loading="lazy" className="h-full w-full object-contain p-1" />
    </div>
  );
};

export const StatusLabel = ({ status }: { status?: ProjectStatus }) =>
  status ? (
    <span className={`font-mono text-[11px] ${status === 'Published' ? 'text-success' : 'text-muted'}`}>
      {status === 'Published' && '● '}
      {statusText[status]}
    </span>
  ) : null;

export const StoreLinks = ({ project }: { project: Project }) => {
  const links = [
    { label: 'App Store', href: project.links.appStore },
    { label: 'Google Play', href: project.links.googlePlay },
    { label: 'Website', href: project.links.web },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  if (links.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-u"
          aria-label={`${project.title} on ${link.label}`}
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
};

/** One entry in the featured index: a full-width row with a hover state. */
const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <article className="group grid gap-5 border-t border-line py-8 transition-colors duration-300 hover:bg-surface sm:grid-cols-[3rem_1fr] sm:px-3 lg:grid-cols-[3rem_1fr_15rem]">
    <p className="font-mono text-xs text-muted sm:pt-3">{String(index + 1).padStart(2, '0')}</p>

    <div className="min-w-0">
      <div className="flex items-center gap-4">
        <ProjectLogo project={project} />
        <div>
          <h3 className="font-serif text-4xl leading-none transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl">
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-[11px] text-muted">
            {project.domain} · <StatusLabel status={project.status} />
          </p>
        </div>
      </div>
      <p className="mt-5 max-w-2xl leading-relaxed text-fg/85">{project.description}</p>
      <p className="mt-4 font-mono text-[11px] text-muted">{project.tech.join(' / ')}</p>
    </div>

    <div className="flex flex-col justify-between gap-4 sm:col-start-2 lg:col-start-auto lg:items-end lg:text-right">
      {project.metric && <p className="font-serif text-xl italic text-accent lg:text-2xl">{project.metric}</p>}
      <StoreLinks project={project} />
    </div>
  </article>
);

export default ProjectCard;

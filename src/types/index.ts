export type ProjectDomain =
  | 'Logistics & Mobility'
  | 'GPS & Tracking'
  | 'Commerce & Services'
  | 'Social & Media';

export type ProjectStatus = 'Published' | 'In Development' | 'Unreleased';

export interface Project {
  id: string;
  title: string;
  description: string;
  domain: ProjectDomain;
  tech: string[];
  thumbnail?: string;
  status?: ProjectStatus;
  /** Short proof point, e.g. download count or store presence. */
  metric?: string;
  featured?: boolean;
  links: {
    googlePlay?: string;
    appStore?: string;
    web?: string;
  };
  features?: string[];
}

export interface Service {
  id: 'backend' | 'mobile' | 'frontend';
  title: string;
  description: string;
  points: string[];
  stack: string[];
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

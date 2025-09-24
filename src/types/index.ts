export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string;
  thumbnail: string;
  category: 'mobile' | 'web' | 'backend';
  status: 'Published' | 'In Development' | 'Unpublished' | 'In-Development';
  working: 'Feature Development' | 'Self-Driven Project' | 'Worked within Agile Team';
  links: {
    googlePlay?: string;
    appStore?: string;
    web?: string;
  };
  features?: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'mobile' | 'backend' | 'tools' | 'other';
}

export interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  gradient: string;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
}
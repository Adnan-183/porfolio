export interface Project {
  title: string;
  description: string;
  tech: string;
  thumbnail: string;
  link?: string;
  googlePlayLink?: string;
  appStoreLink?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
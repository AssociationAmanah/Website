export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  location: string;
  image: string;
  gallery: string[];
  date: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ImpactStat {
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}
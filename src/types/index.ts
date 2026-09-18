export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'hospitality';
  location: string;
  year: string;
  heroImage: string;
  gallery: string[];
  description: string;
  concept: string;
  details: { label: string; value: string }[];
  stats: { label: string; value: string }[];
  featured: boolean;
}

export interface Service {
  id: number;
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  capabilities: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'founders' | 'designers' | 'architects' | 'team';
  image: string;
  bio: string;
  socials: { platform: string; url: string; icon: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  project: string;
  text: string;
  rating: number;
  image: string;
  role: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: 'trends' | 'inspiration' | 'articles';
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
  author: {
    name: string;
    role: string;
    image: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

import { NavItem, SocialLink } from '../types';

export const headerLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Studio', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Team', href: '/team' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' }
];

export const footerLinks: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Studio', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Team', href: '/team' },
  { label: 'Journal', href: '/journal' }
];

export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/atelier', icon: 'fa-brands fa-instagram' },
  { platform: 'Pinterest', url: 'https://pinterest.com/atelier', icon: 'fa-brands fa-pinterest' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/atelier', icon: 'fa-brands fa-linkedin-in' },
  { platform: 'Facebook', url: 'https://facebook.com/atelier', icon: 'fa-brands fa-facebook-f' }
];

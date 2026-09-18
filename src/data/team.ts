import { TeamMember } from '../types';

export const team: TeamMember[] = [
  {
    id: 'kabir-sen',
    name: 'Kabir Sen',
    role: 'Founder & Principal Architect',
    category: 'founders',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600',
    bio: 'With over 18 years of experience designing luxury projects globally, Kabir leads the architectural vision of Atelier. His work focuses on clean volumetric shapes, structural honesty, and spatial storytelling.',
    socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'fa-brands fa-linkedin-in' },
      { platform: 'Instagram', url: 'https://instagram.com', icon: 'fa-brands fa-instagram' }
    ]
  },
  {
    id: 'meera-sen',
    name: 'Meera Sen',
    role: 'Co-Founder & Creative Director',
    category: 'founders',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600',
    bio: 'Meera curates the sensory identity of Atelier. She oversees the selection of materials, textiles, collectible art, and custom lighting designs, ensuring each space resonates with deeply personal textures.',
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com', icon: 'fa-brands fa-instagram' },
      { platform: 'Pinterest', url: 'https://pinterest.com', icon: 'fa-brands fa-pinterest' }
    ]
  },
  {
    id: 'rohan-mehta',
    name: 'Rohan Mehta',
    role: 'Senior Associate Architect',
    category: 'architects',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600',
    bio: 'Rohan manages the technical architectural detailing and site execution. He is passionate about structural integration, sustainable thermal solutions, and local stone masonry techniques.',
    socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'fa-brands fa-linkedin-in' }
    ]
  },
  {
    id: 'aisha-dev',
    name: 'Aisha Dev',
    role: 'Lead Interior Designer',
    category: 'designers',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600',
    bio: 'Aisha specializes in creating warm, layered residential interiors and boutique hospitality hubs. Her design philosophy revolves around spatial alignment, fluted textures, and bespoke furniture.',
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com', icon: 'fa-brands fa-instagram' },
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'fa-brands fa-linkedin-in' }
    ]
  },
  {
    id: 'tarun-verma',
    name: 'Tarun Verma',
    role: 'Director of Project Execution',
    category: 'team',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600',
    bio: 'Tarun acts as the bridge between paper plans and physical reality. He manages contractors, timelines, quality inspections, and detailed millwork installations to maintain Atelier standards.',
    socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'fa-brands fa-linkedin-in' }
    ]
  }
];

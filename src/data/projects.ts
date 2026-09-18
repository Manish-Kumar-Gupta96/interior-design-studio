import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'mira-residence',
    title: 'Mira Residence',
    category: 'residential',
    location: 'Mumbai, India',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1600',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600'
    ],
    description: 'A minimalist sanctuary overlooking the Arabian Sea, featuring bespoke warm wood paneling, tactile linen fabrics, and a highly functional layout designed to accommodate multi-generational living.',
    concept: 'The core design concept centers around "Slowing Down." We maximized ocean views by installing floor-to-ceiling panoramic glass windows, creating a seamless connection to the horizon. Using a muted palette of sand, bone, and charcoal, we introduced warm, natural white oak surfaces and hand-applied lime plaster walls to bounce natural light beautifully during the golden hour.',
    details: [
      { label: 'Client', value: 'Private Family' },
      { label: 'Built Area', value: '4,200 sq. ft.' },
      { label: 'Materials', value: 'Travertine, White Oak, Lime Plaster' },
      { label: 'Scope', value: 'Full Interior Architecture & Curation' }
    ],
    stats: [
      { label: 'Natural Light Increase', value: '40%' },
      { label: 'Custom Joinery Pieces', value: '18' },
      { label: 'Design Duration', value: '6 Months' }
    ],
    featured: true
  },
  {
    id: 'verve-hq',
    title: 'Verve Head Office',
    category: 'commercial',
    location: 'Bangalore, India',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1600',
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1600'
    ],
    description: 'A light-filled office space designed to inspire collaboration and deep focus. Integrating smart acoustics and lush biophilia, this project redefines corporate environment guidelines.',
    concept: 'Taking inspiration from Bangalore\'s rich garden-city history, we created a "Green Hub" workspace. The office layout splits the desk clusters with acoustic planter boxes and organic moss screens. We utilized exposed structural steel, soft curved glass partitions, and raw concrete surfaces to establish an industrial yet warm aesthetic.',
    details: [
      { label: 'Client', value: 'Verve Group' },
      { label: 'Built Area', value: '12,500 sq. ft.' },
      { label: 'Materials', value: 'Fluted Glass, Terrazzo, Recycled Felt' },
      { label: 'Scope', value: 'Workplace Strategy & Spatial Design' }
    ],
    stats: [
      { label: 'Collaboration Hubs', value: '6' },
      { label: 'Acoustic Absorption Rate', value: '82%' },
      { label: 'Biophilic Plant Count', value: '120+' }
    ],
    featured: true
  },
  {
    id: 'aura-resort',
    title: 'Aura Luxury Villa',
    category: 'hospitality',
    location: 'Goa, India',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600'
    ],
    description: 'An exclusive tropical luxury villa celebrating indoor-outdoor living. Tactile terracotta floors, woven cane furnishings, and open pavilions dissolve the barriers between house and nature.',
    concept: 'Our concept was to merge traditional Portuguese-Goan architectural elements with minimalist modern geometries. Clay terracotta tiles lay the foundation, offset by dark solid teak wood frames and custom woven ratan screens. Local materials and natural cross-ventilation reduce active cooling needs, providing sustainable luxury.',
    details: [
      { label: 'Client', value: 'Aura Boutique Resorts' },
      { label: 'Built Area', value: '6,800 sq. ft.' },
      { label: 'Materials', value: 'Terracotta, Local Teak, Woven Rattan' },
      { label: 'Scope', value: 'Architecture, Interior & Styling' }
    ],
    stats: [
      { label: 'Natural Ventilation Flow', value: '95%' },
      { label: 'Sourced Local Artworks', value: '24' },
      { label: 'Energy Savings', value: '30%' }
    ],
    featured: true
  },
  {
    id: 'brutalist-loft',
    title: 'The Brutalist Loft',
    category: 'residential',
    location: 'Pune, India',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600'
    ],
    description: 'An expansive industrial loft utilizing board-formed raw concrete surfaces, exposed pipeline systems, and highly detailed leather and brass elements to balance hard architectural structural features.',
    concept: 'We embraced the brutalist architecture of the apartment and contrasted it with luxurious comfort. Soft velvet drapes, distressed leather sofas, and custom antiqued brass light fixtures soften the raw, board-formed concrete walls. The kitchen island acts as a massive monolithic block of brushed granite, centering the open-plan loft.',
    details: [
      { label: 'Client', value: 'Creative Director' },
      { label: 'Built Area', value: '2,800 sq. ft.' },
      { label: 'Materials', value: 'Board-formed Concrete, Leather, Brass' },
      { label: 'Scope', value: 'Full Space Overhaul & Art Curation' }
    ],
    stats: [
      { label: 'Ceiling Height', value: '18 ft.' },
      { label: 'Monolithic Stone Weight', value: '2.4 Tons' },
      { label: 'Project Phase Time', value: '4 Months' }
    ],
    featured: false
  },
  {
    id: 'minimalist-bistro',
    title: 'Minimalist Bistro',
    category: 'hospitality',
    location: 'Delhi, India',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600',
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1600',
      'https://images.unsplash.com/photo-1463797900201-81b479c78241?q=80&w=1600'
    ],
    description: 'A calming oasis in the center of busy Delhi. Neutral linen textures, fluted wall detailing, and subtle spotlighting create an intimate and relaxed dining atmosphere.',
    concept: 'Our vision was a silent culinary sanctuary. Fluted wall panels run continuously along the walls to guide the eye through the space. We used micro-cement floor finishes and beige travertine countertops to achieve a seamless, continuous textural feeling, emphasizing warmth through architectural lighting.',
    details: [
      { label: 'Client', value: 'Harvest Culinary group' },
      { label: 'Built Area', value: '1,800 sq. ft.' },
      { label: 'Materials', value: 'Microcement, Travertine, Fluted Ash Wood' },
      { label: 'Scope', value: 'Full Cafe Concept, Layout & Furniture Design' }
    ],
    stats: [
      { label: 'Cozy Seating Capacity', value: '45 Pax' },
      { label: 'Acoustic Panel Insulation', value: '75%' },
      { label: 'Execution Frame', value: '90 Days' }
    ],
    featured: false
  },
  {
    id: 'apex-studios',
    title: 'Apex Design Offices',
    category: 'commercial',
    location: 'Hyderabad, India',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600'
    ],
    description: 'A dynamic, high-concept workspace featuring asymmetric meeting rooms, custom collaborative tables, and premium acoustic materials that boost productivity.',
    concept: 'We built a "Studio of Flow." Meeting pods are finished in curved birch plywood panels and fluted glass panels to retain transparency while providing privacy. Staggered desk systems encourage spontaneous discussions, balanced by a fully soundproof, darkened quiet room for screen-intensive work.',
    details: [
      { label: 'Client', value: 'Apex Tech Group' },
      { label: 'Built Area', value: '8,500 sq. ft.' },
      { label: 'Materials', value: 'Birch Plywood, Fluted Glass, Felt acoustic panels' },
      { label: 'Scope', value: 'Workspace Audit, Spatial Planning & Fit-outs' }
    ],
    stats: [
      { label: 'Interactive Pods', value: '4' },
      { label: 'Custom Joinery Hours', value: '350' },
      { label: 'Energy efficiency rank', value: 'A++' }
    ],
    featured: false
  }
];
export const categories = ['all', 'residential', 'commercial', 'hospitality'] as const;
export type ProjectCategory = typeof categories[number];

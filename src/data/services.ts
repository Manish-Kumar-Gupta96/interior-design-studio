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

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    slug: "residential",
    title: "Residential Interiors",
    shortTitle: "Residential",
    description:
      "Thoughtful homes shaped around the people who live in them. We create interiors that balance architecture, comfort, materiality and everyday rituals.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    capabilities: [
      "Private Residences",
      "Apartments",
      "Villas & Holiday Homes",
      "Renovations",
      "Custom Furniture",
      "Art & Object Curation"
    ]
  },
  {
    id: 2,
    number: "02",
    slug: "commercial",
    title: "Commercial Interiors",
    shortTitle: "Commercial",
    description:
      "Purposeful environments designed to strengthen the identity of businesses while creating spaces where people want to work, meet and connect.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    capabilities: [
      "Workspaces",
      "Creative Studios",
      "Retail Environments",
      "Showrooms",
      "Corporate Interiors",
      "Brand Environments"
    ]
  },
  {
    id: 3,
    number: "03",
    slug: "hospitality",
    title: "Hospitality & Leisure",
    shortTitle: "Hospitality",
    description:
      "Immersive spaces that create memorable experiences through atmosphere, material, light and carefully considered details.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
    capabilities: [
      "Restaurants",
      "Boutique Hotels",
      "Cafés & Bars",
      "Private Clubs",
      "Wellness Spaces",
      "Guest Experiences"
    ]
  },
  {
    id: 4,
    number: "04",
    slug: "styling",
    title: "Styling & Art Direction",
    shortTitle: "Styling",
    description:
      "The final layer of a space. We curate furniture, artwork, objects, textiles and visual details to give every interior its own character.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    capabilities: [
      "Furniture Selection",
      "Art Curation",
      "Object Styling",
      "Textiles",
      "Photography Direction",
      "Visual Storytelling"
    ]
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding your lifestyle, ambitions, architecture and the way you want the space to feel."
  },
  {
    number: "02",
    title: "Define",
    description:
      "Ideas become a clear design direction through references, materials, spatial studies and a considered visual language."
  },
  {
    number: "03",
    title: "Design",
    description:
      "We develop the details — from spatial planning and furniture to lighting, materials and bespoke elements."
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We coordinate the final stages with precision, ensuring the original design intent survives every detail of execution."
  }
];

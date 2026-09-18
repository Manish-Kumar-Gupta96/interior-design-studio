export interface ContactOption {
  value: string;
  label: string;
}

export const projectTypes: ContactOption[] = [
  {
    value: "residential",
    label: "Residential"
  },
  {
    value: "commercial",
    label: "Commercial"
  },
  {
    value: "hospitality",
    label: "Hospitality"
  },
  {
    value: "renovation",
    label: "Renovation"
  },
  {
    value: "styling",
    label: "Styling & Art Direction"
  }
];

export const projectSizes: ContactOption[] = [
  {
    value: "under-1000",
    label: "Under 1,000 sq ft"
  },
  {
    value: "1000-2500",
    label: "1,000 – 2,500 sq ft"
  },
  {
    value: "2500-5000",
    label: "2,500 – 5,000 sq ft"
  },
  {
    value: "5000-10000",
    label: "5,000 – 10,000 sq ft"
  },
  {
    value: "10000-plus",
    label: "10,000+ sq ft"
  }
];

export const budgets: ContactOption[] = [
  {
    value: "under-10",
    label: "Under ₹10 Lakh"
  },
  {
    value: "10-25",
    label: "₹10 – ₹25 Lakh"
  },
  {
    value: "25-50",
    label: "₹25 – ₹50 Lakh"
  },
  {
    value: "50-100",
    label: "₹50 Lakh – ₹1 Crore"
  },
  {
    value: "100-plus",
    label: "₹1 Crore+"
  },
  {
    value: "discuss",
    label: "Let's discuss"
  }
];

export const timelines: ContactOption[] = [
  {
    value: "immediate",
    label: "Ready to begin"
  },
  {
    value: "1-3",
    label: "Within 1 – 3 months"
  },
  {
    value: "3-6",
    label: "Within 3 – 6 months"
  },
  {
    value: "6-12",
    label: "Within 6 – 12 months"
  },
  {
    value: "exploring",
    label: "Still exploring"
  }
];

export const servicesRequired: ContactOption[] = [
  {
    value: "full-interior",
    label: "Full Interior Design"
  },
  {
    value: "space-planning",
    label: "Space Planning"
  },
  {
    value: "furniture",
    label: "Furniture & Joinery"
  },
  {
    value: "lighting",
    label: "Lighting Design"
  },
  {
    value: "styling",
    label: "Styling & Art Direction"
  },
  {
    value: "consultation",
    label: "Design Consultation"
  }
];

export const contactFaqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "We work across residential, commercial and hospitality interiors, from individual rooms and apartments to larger homes, workplaces, restaurants and boutique hospitality spaces."
  },
  {
    question: "Where does the studio work?",
    answer:
      "Our studio is based in Mumbai and works across India. We also consider selected projects outside India depending on the scope and requirements."
  },
  {
    question: "When should I contact the studio?",
    answer:
      "Ideally, as early as possible. Early involvement allows us to influence planning, materials, lighting and other decisions before construction begins."
  },
  {
    question: "Do you work with existing architects?",
    answer:
      "Yes. We regularly collaborate with architects, contractors, developers and other consultants as part of a wider project team."
  }
];

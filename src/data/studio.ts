export interface StudioValue {
  number: string;
  title: string;
  description: string;
}

export interface StudioMilestone {
  year: string;
  title: string;
  description: string;
}

export const studioValues: StudioValue[] = [
  {
    number: "01",
    title: "Timeless over trendy",
    description:
      "We create spaces designed to remain relevant beyond a particular moment, season or trend."
  },
  {
    number: "02",
    title: "Material with meaning",
    description:
      "Every material is selected for its texture, character, performance and relationship with the architecture."
  },
  {
    number: "03",
    title: "People first",
    description:
      "A beautiful interior only works when it supports the people who inhabit it and the life that happens within it."
  },
  {
    number: "04",
    title: "Details matter",
    description:
      "The smallest details often create the strongest sense of quality, identity and belonging."
  }
];

export const studioMilestones: StudioMilestone[] = [
  {
    year: "2018",
    title: "The beginning",
    description:
      "Our studio began with a simple belief: thoughtful design can make everyday life feel better."
  },
  {
    year: "2020",
    title: "Growing the practice",
    description:
      "We expanded our work across residential interiors, developing a distinctive approach to material and proportion."
  },
  {
    year: "2022",
    title: "Beyond residential",
    description:
      "The studio began working across hospitality, workplace and commercial environments."
  },
  {
    year: "2024",
    title: "A wider perspective",
    description:
      "Our multidisciplinary practice grew to include styling, art direction and bespoke furniture."
  },
  {
    year: "2026",
    title: "Looking forward",
    description:
      "Today we continue to explore how architecture, objects, light and people can come together in meaningful ways."
  }
];

export const studioStats = [
  {
    value: "08+",
    label: "Years of practice"
  },
  {
    value: "42",
    label: "Completed projects"
  },
  {
    value: "11",
    label: "Cities"
  },
  {
    value: "18",
    label: "Design awards"
  }
];

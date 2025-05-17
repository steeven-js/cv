interface Formation {
  year: string;
  title: string;
  institution: string;
}

interface Skill {
  name: string;
  experience: string;
  description: string;
}

interface Experience {
  period: string;
  position: string;
  company: string;
  description: string;
}

interface Contact {
  icon: string;
  value: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
}

export const personalInfo: PersonalInfo = {
  name: "Cristopher Galarce",
  title: "Product Designer",
  summary: "Over 6 years working in UX. I'm a Product Designer made for agile teams. I work with an obsessive Passion-Driven mindset to provide desirable products for users and business. I work with multidisciplinary teams in eCommerce B2B-B2C, Finance, Banking, Insurance and Health projects. BA in Graphic Design."
};

export const contactInfo: Contact[] = [
  {
    icon: "w-2.5 h-2 left-[1px] top-[2px] absolute bg-purple-500",
    value: "cristopher@galarce.pro"
  },
  {
    icon: "w-2 h-2 left-[1.50px] top-[1.50px] absolute bg-purple-500",
    value: "@cristophergalarce"
  },
  {
    icon: "w-2.5 h-1.5 left-[1px] top-[2.87px] absolute bg-purple-500",
    value: "@galarce"
  },
  {
    icon: "w-2.5 h-2.5 left-[1px] top-[1px] absolute bg-purple-500",
    value: "@galarce"
  }
];

export const formations: Formation[] = [
  {
    year: "2020",
    title: "Scrum Master Professional SMPC®",
    institution: "Certiprof"
  },
  {
    year: "2020",
    title: "Agile Methodologies Specialist",
    institution: "University Class Ennovate"
  },
  {
    year: "2020",
    title: "Path to Excellence in Lean Project Management",
    institution: "Pontificia U. Católica de Chile - Coursera"
  },
  {
    year: "2016",
    title: "BA in Graphic Design (4 years)",
    institution: "Universidad de las Américas"
  }
];

export const skills: Skill[] = [
  {
    name: "UX Research and Design",
    experience: "+5 years",
    description: "Interviews, Usability testing, Heuristic, Personas, Journey, Benchmark, Guerrilla, Analytics, Wireframing, Rapid Prototyping, User flows, Interaction, User Stories, JTBD, Storyboards, Information Architecture"
  },
  {
    name: "UI and Visual Design",
    experience: "+6 years",
    description: "Tokens, Components, Patterns, Design System, Responsive, Illustration, Microinteractions, Figma"
  },
  {
    name: "Agile",
    experience: "+4 years",
    description: "Scrum, Kanban, Lean Inception, Design Sprint, Design Thinking, Design Ops, Jira, Lean Project Management"
  }
];

export const experiences: Experience[] = [
  {
    period: "Jul. 2020 - Currently",
    position: "UI Designer",
    company: "Multiplica Chile",
    description: "Working with designers, POs and PMs to deliver user-centered solutions to the public site of Coopeuch. Designing interfaces and creating patterns over a UI Components Kit in Sketch-Abstract-Invision workflow."
  },
  {
    period: "Jul. 2019 - Abr. 2020",
    position: "Product Designer",
    company: "Acid Labs Chile",
    description: "Collaborated with client and engineers to define the features and how many sprints for development. Conducted research, interviews, usability and guerrilla tests to define the experience and visual design of eCommerce clients like Manantial and CCU."
  },
  {
    period: "Mar. 2017 - Mar. 2019",
    position: "Product Designer",
    company: "2Brains Chile",
    description: "Created a UI Kit of components to scale and optimize the increments of different products of clients like Bci Bank, Falabella Bank and Bci Insurance Brokers. Creating wireframes, storyboards, and screen flows, all the way through to the visual design. Working with PMs, POs, SMs, engineers and other designers."
  },
  {
    period: "2014 - 2017",
    position: "UX/UI Designer",
    company: "Freelance and Teacher",
    description: "Working with some startups and independent designers, creating their websites and other pieces for web. Teacher in Graphic Design in Universidad de las Américas."
  },
  {
    period: "2010 - 2014",
    position: "Art Director",
    company: "Freelance",
    description: "Working with some startups and advertising agencies. Producing different pieces for web, print, advertising and branding. Teacher in Graphic Design at Universidad de las Américas."
  }
];

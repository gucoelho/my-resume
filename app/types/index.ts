type Contact = {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
};

type Education = {
  course: string;
  school: string;
  startYear: string;
  endYear: string;
};

type Skill = {
  name: string;
  category: "backend" | "frontend" | "mobile" | "devops" | "cloud" | "concepts" | "agile";
  years: number;
};

type Language = {
  name: string;
  level: "native" | "beginner" | "intermediate" | "advanced" | "fluent";
};

type Experience = {
  title: string;
  company: string;
  startPeriod: string;
  endPeriod: string;
  isCurrent?: boolean;
  details: (string | string[])[];
};

type Details = {
  birthdate: string;
  local: string;
  country: string;
  contact: Contact;
}

type Resume = {
  name: string;
  details: Details;
  education: Education[];
  skills: Skill[];
  languages: Language[];
  summary: string;
  experience: Experience[];
};
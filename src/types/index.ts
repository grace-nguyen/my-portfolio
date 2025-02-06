export interface Employment {
    company: string;
    position: string;
    duration: string;
    responsibilities: string[];
  }
  export interface SkillItem {
    name: string;
    icon: string;
  }
  
  export interface Skill {
    category: string;
    items: SkillItem[];
  }
  
  export interface Education {
    degree: string;
    university: string;
    duration: string;
    responsibilities: string[];
  }
  
  export interface Certificate {
    title: string;
    linkTitle: string;
    date: string;
    responsibilities: string[];
  }
  
  export interface PortfolioData {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    portfolio: string;
    professionalSummary: string;
    employments: Employment[];
    skills: Skill[];
    education: Education[];
    certificates: Certificate[];
  }
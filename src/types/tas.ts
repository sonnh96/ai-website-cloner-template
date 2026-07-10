export interface NavDropdownLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownLink[];
}

export interface StatCard {
  value: string;
  label: string;
  tone: "navy" | "crimson" | "light";
}

export interface CurriculumStage {
  label: string;
  tagline?: string;
  image: string;
  href: string;
}

export interface FacilityStat {
  value: string;
  label: string;
  tone: "navy" | "crimson" | "light";
}

export interface FacilityImage {
  src: string;
  alt: string;
  className?: string;
}

export interface ArticleCard {
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

export interface NewsCard {
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  cohort: string;
  avatar: string;
}

export interface UniversityLogo {
  name: string;
  image: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

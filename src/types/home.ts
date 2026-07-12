export interface NavDropdownColumn {
  heading?: string;
  links: { label: string; href: string }[];
}

export interface NavItem {
  label: string;
  href: string;
  sidebar?: { label: string; href: string }[];
  columns?: NavDropdownColumn[];
  previewImage?: string;
}

export interface StatCard {
  iconSrc: string;
  value: string;
  label: string;
  description: string;
}

export interface AcronymLine {
  letter: string;
  rest: string;
  translation: string;
  iconSrc: string;
}

export interface CampusCard {
  name: string;
  address: string;
  imageSrc: string;
  badgeSrc: string;
  href: string;
}

export interface NewsCard {
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  imageSrc: string;
  logoSrcs: string[];
  href: string;
}

export interface PartnerLogo {
  name: string;
  imageSrc: string;
}

export interface CampusContact {
  name: string;
  address: string;
  vpAddress?: string;
  telephone?: string;
  hotline: string;
  email: string;
  socialLinks: { icon: string; href: string }[];
}

export interface FooterLinkGroup {
  links: { label: string; href: string }[];
}

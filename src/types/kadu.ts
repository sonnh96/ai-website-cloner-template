export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavDropdownItem[];
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image1: string;
  image2: string;
}

export interface CategoryCard {
  icon: string;
  label: string;
  href: string;
}

export interface CourseCard {
  id: string;
  image: string;
  price: string | "Free";
  title: string;
  href: string;
  lessons: number;
  weeks: number;
  description?: string;
  instructorAvatar: string;
  instructorName: string;
  rating: number;
}

export interface CourseTab {
  id: string;
  label: string;
  courses: CourseCard[];
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface VideoCard {
  id: string;
  image: string;
  title?: string;
}

export interface TrainerTab {
  id: string;
  avatar: string;
  name: string;
  videos: VideoCard[];
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  image: string;
  authorAvatar: string;
  authorName: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

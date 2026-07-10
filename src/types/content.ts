export type Locale = "vi" | "en" | "kr" | "zh";

export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export interface HeaderContent {
  inquiryCta: string;
  library: string;
  careers: string;
  nav: NavItem[];
}

export interface HeroSlide {
  type: "image" | "video";
  src: string;
  /** Poster frame shown while a video slide loads; required for type "video". */
  poster?: string;
}

export interface HeroContent {
  title: string;
  cta: string;
  scrollHint: string;
  slides: HeroSlide[];
}

export interface PrincipalContent {
  heading: string;
  paragraphs: string[];
  photoSrc: string;
}

export interface ProgramTrack {
  title: string;
  levels: string[];
  cta: string;
  imageSrc: string;
}

export interface ProgramsContent {
  heading: string;
  intro: string;
  tracks: ProgramTrack[];
}

export interface StarCard {
  title: string;
  description: string;
  iconSrc: string;
}

export interface FiveStarsContent {
  heading: string;
  cards: StarCard[];
}

export interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

export interface StatsContent {
  heading: string;
  items: StatItem[];
  backgroundSrc: string;
}

export interface NewsItem {
  tag: string;
  date: string;
  title: string;
  imageSrc?: string;
  cta: string;
}

export interface NewsContent {
  heading: string;
  featured: NewsItem;
  items: NewsItem[];
  exploreMoreCta: string;
}

export interface UniversityRegion {
  id: number;
  label: string;
}

export interface UniversityContent {
  heading: string;
  subheading: string;
  selectAreaLabel: string;
  regions: UniversityRegion[];
}

export interface ValueCard {
  icon: string;
  label: string;
}

export interface ValuesContent {
  heading: string;
  activeLabel: string;
  cards: ValueCard[];
  gallerySrc: string;
}

export interface Testimonial {
  quote: string;
  name: string;
}

export interface TestimonialsContent {
  heading: string;
  items: Testimonial[];
}

export interface InquiryFormContent {
  heading: string;
  subheading: string;
  fields: {
    parentName: string;
    studentAge: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    nationality: string;
    program: string;
    programPlaceholder: string;
  };
  submitCta: string;
  backgroundSrc: string;
}

export interface FooterContent {
  memberOf: string;
  contactHeading: string;
  hotlineLabel: string;
  hotline: string;
  hotlineNote: string;
  phone: string;
  emails: string;
  address: string;
  schoolFullName: string;
  companyName: string;
  privacyPolicy: string;
}

export interface HomeContent {
  locale: Locale;
  languageLabel: string;
  flagSrc: string;
  header: HeaderContent;
  hero: HeroContent;
  principal: PrincipalContent;
  programs: ProgramsContent;
  fiveStars: FiveStarsContent;
  stats: StatsContent;
  news: NewsContent;
  university: UniversityContent;
  values: ValuesContent;
  testimonials: TestimonialsContent;
  inquiryForm: InquiryFormContent;
  footer: FooterContent;
}

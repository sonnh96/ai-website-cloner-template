import type { HomeContent } from "@/types/content";

export const en: HomeContent = {
  locale: "en",
  languageLabel: "EN",
  flagSrc: "/images/asset/flag-canada-small.png",
  header: {
    inquiryCta: "INQUIRY",
    library: "Library",
    careers: "Careers",
    nav: [
      { label: "ABOUT US", href: "/en/about-us" },
      { label: "ACADEMICS", href: "/en/academics" },
      { label: "ADMISSIONS", href: "/en/admissions" },
      { label: "SCHOOL LIFE", href: "/en/school-life" },
      { label: "CONTACT US", href: "/en/contact-us" },
    ],
  },
  hero: {
    title: "The Canadian International School (CIS)",
    cta: "Learn more",
    scrollHint: "Scroll down",
    slides: [{ type: "image", src: "/images/banner/hero-campus.jpg" }],
  },
  principal: {
    heading: "HEAD OF SCHOOL'S MESSAGE",
    paragraphs: [
      "Welcome to CIS!",
      "Over the years, CIS has committed to academic excellence, outstanding achievements in sports, and exceptional contributions to the arts. We also foster global citizenship by preparing our students to become compassionate, informed, and responsible individuals.",
      "With our talented students, dedicated teachers, and supportive community, I am confident we can achieve our goal of ranking among the top international schools. Together, we will make this an outstanding year of learning, growth, and success!",
    ],
    photoSrc: "/images/staticpage/principal.jpg",
  },
  programs: {
    heading: "LEARNING PROGRAMS",
    intro:
      "The Canadian International School (CIS) offers a comprehensive education program for students from Grade 1 to Grade 12. With a focus on holistic development, CIS provides academically rigorous programs while nurturing critical thinking, creativity, and global citizenship. Students benefit from internationally recognized curricula, including the IB Diploma, which prepare them for top universities worldwide.",
    tracks: [
      {
        title: "ELEMENTARY",
        levels: ["THE GRADES 1 - 3 PROGRAM", "THE GRADES 4 - 6 PROGRAM"],
        cta: "Learn more",
        imageSrc: "/images/programs/tieu-hoc.jpg",
      },
      {
        title: "SECONDARY",
        levels: [
          "GRADE 7 - 8",
          "GRADE 9 - 10",
          "INTERNATIONAL BACCALAUREATE DIPLOMA PROGRAM (IBDP)",
        ],
        cta: "Learn more",
        imageSrc: "/images/programs/trung-hoc.webp",
      },
    ],
  },
  fiveStars: {
    heading: "OUR 5 STARS",
    cards: [
      {
        title: "STAR STUDENTS",
        description:
          "Generations of outstanding students are given the opportunity to shine and affirm themselves across sports, the arts, and academics.",
        iconSrc: "/images/five-stars/star-students.png",
      },
      {
        title: "STAR TEACHERS & COACHES",
        description:
          "An outstanding team of experienced foreign teachers and coaches with in-depth educational expertise.",
        iconSrc: "/images/five-stars/star-teachers.png",
      },
      {
        title: "STAR FACILITIES",
        description:
          "A modern 50,000m² campus in Phu My Hung with advanced classrooms and a professional sports complex.",
        iconSrc: "/images/five-stars/star-facilities.png",
      },
      {
        title: "STAR PARENTS",
        description:
          "A parent community of professionals and entrepreneurs from many fields and countries, connected in a close-knit, multicultural environment.",
        iconSrc: "/images/five-stars/star-students.png",
      },
      {
        title: "STAR PROGRAMS",
        description:
          "IBDP and AP programs certified by three leading accreditation bodies: Cognia, CIS, and WASC.",
        iconSrc: "/images/five-stars/star-teachers.png",
      },
    ],
  },
  stats: {
    heading: "EXCEPTIONAL NUMBERS",
    items: [
      { value: "100", suffix: "%", label: "PASS RATE" },
      { value: "33", suffix: "/30.2", label: "AVG SCORE IBDP" },
      { value: "45", suffix: "+", label: "CLUBS" },
      { value: "30", suffix: "+", label: "NATIONALITIES" },
    ],
    backgroundSrc: "/images/stats/stats-bg.png",
  },
  news: {
    heading: "NEWS & UPCOMING EVENTS",
    featured: {
      tag: "News",
      date: "07/07/2026",
      title: "INSIDE THE LAB: SHAPING FUTURE CRITICAL THINKERS",
      imageSrc: "/images/news/news-featured.jpeg",
      cta: "Read more",
    },
    items: [
      { tag: "News", date: "29/06/2026", title: "CIS INSPIRES | DRIVING SOCIAL CHANGE THROUGH A PASSION FOR SPORTS", cta: "Read more" },
      { tag: "News", date: "30/06/2026", title: "EARCOS WEEKEND WORKSHOP - BUILDING INCLUSIVE SCHOOL CULTURE WITH KENDALL ZOLLER", cta: "Read more" },
      { tag: "News", date: "16/06/2026", title: "THE 2025-2026 ATHLETIC BANQUET AT CIS", cta: "Read more" },
      { tag: "News", date: "14/06/2026", title: "HONORING IMPACT AND COMMUNITY AT THE 2026 GIN AWARDS", cta: "Read more" },
    ],
    exploreMoreCta: "Explore More",
  },
  university: {
    heading: "UNIVERSITY ACCEPTANCES",
    subheading: "TOP UNIVERSITIES ALL OVER THE WORLD",
    selectAreaLabel: "select area:",
    regions: [
      { id: 1, label: "North America" },
      { id: 2, label: "UK & Ireland" },
      { id: 3, label: "Asia" },
      { id: 4, label: "Australia" },
    ],
  },
  values: {
    heading: "CIS STUDENTS PERSONA",
    activeLabel: "FREE TO BE CREATIVE",
    cards: [
      { icon: "/images/values/icon-1.png", label: "Free to be creative" },
      { icon: "/images/values/icon-2.png", label: "Confident to decide" },
      { icon: "/images/values/icon-3.png", label: "Self-directed to learn" },
      { icon: "/images/values/icon-1-hover.png", label: "Self-regulated" },
    ],
    gallerySrc: "/images/values/gallery-tu-do.png",
  },
  testimonials: {
    heading: "WHAT DO PARENTS AND STUDENTS TALK ABOUT CIS?",
    items: [
      {
        quote:
          "CIS isn't just a school, it's a place where my child loves to be. The school creates a safe and supportive environment where children know they can seek help when needed",
        name: "Shared CIS's parents Stefan K.",
      },
      {
        quote:
          "CIS is an ideal fit for our family with two children—one in pre-elementary and the other in grade 4. We value its integrated curriculum, perfectly tailored to meet our needs. The program excels in nurturing our children's development, making CIS our top choice.",
        name: "Shared CIS's parents Tony",
      },
    ],
  },
  inquiryForm: {
    heading: "REQUEST INFO",
    subheading: "Please help us fill out the info section below to get to know you better",
    fields: {
      parentName: "Full name of parents",
      studentAge: "Age of student",
      phone: "Phone",
      phonePlaceholder: "+84 963 755 321",
      email: "Email",
      emailPlaceholder: "Enter your email...",
      nationality: "What is your nationality?",
      program: "Select your program",
      programPlaceholder: "-- Select your program --",
    },
    submitCta: "Submit",
    backgroundSrc: "/images/homev2/bg-sec9.jpg",
  },
  footer: {
    memberOf: "CIS - A MEMBER OF EQUEST EDUCATION",
    contactHeading: "CONTACT",
    hotlineLabel: "Hotline",
    hotline: "1900 255 636",
    hotlineNote: "(028) 54 123 456 (for recruitment)",
    phone: "1900 255 636",
    emails: "enquiry@cis.edu.vn / recruitment@admin.cis.edu.vn (for recruitment)",
    address: "No 7, Road 23, Tan My Ward, Ho Chi Minh City",
    schoolFullName:
      "CANADA PRIMARY - SECONDARY - HIGH SCHOOL INTERNATIONAL SCHOOL",
    companyName:
      "CANADA INTERNATIONAL PRIMARY SCHOOL-SECONDARY SCHOOL-HIGH SCHOOL JOINT STOCK COMPANY",
    privacyPolicy: "Privacy Policy",
  },
};

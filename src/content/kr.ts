import type { HomeContent } from "@/types/content";

export const kr: HomeContent = {
  locale: "kr",
  languageLabel: "KR",
  flagSrc: "/images/asset/flag-kr-small.png",
  header: {
    inquiryCta: "문의하기",
    library: "도서관",
    careers: "커리어",
    nav: [
      { label: "회사 소개", href: "/kr/about-us" },
      { label: "아카데믹", href: "/kr/academics" },
      { label: "입학", href: "/kr/admissions" },
      { label: "학교 생활", href: "/kr/school-life" },
      { label: "문의하기", href: "/kr/contact-us" },
    ],
  },
  hero: {
    title: "캐나다 국제학교 (CIS)",
    cta: "더 알아보기",
    scrollHint: "아래로 스크롤",
    slides: [{ type: "image", src: "/images/banner/hero-campus.jpg" }],
  },
  principal: {
    heading: "학교장의 메시지",
    paragraphs: [
      "CIS에 오신 것을 환영합니다!",
      "수년간 CIS는 학문적 우수성, 스포츠에서의 뛰어난 성과, 예술 분야의 탁월한 공헌을 위해 헌신해 왔습니다. 우리는 또한 학생들이 연민, 지식, 책임감을 가진 글로벌 시민으로 성장하도록 준비시키며 글로벌 시민의식을 함양하고 있습니다.",
      "재능 있는 학생들과 헌신적인 교사들, 그리고 지원적인 공동체와 함께 우리는 최고의 국제 학교 중 하나로 자리매김할 목표를 달성할 수 있을 것이라고 확신합니다. 우리는 함께 학습, 성장, 성공의 뛰어난 한 해를 만들어 나갈 것입니다!",
    ],
    photoSrc: "/images/staticpage/principal.jpg",
  },
  programs: {
    heading: "프로그램",
    intro:
      "캐나다 국제학교(CIS)는 1학년부터 12학년까지 종합적인 교육 프로그램을 제공합니다. 전인적 발달에 중점을 둔 CIS는 비판적 사고력, 창의력, 세계적 시민의 의식을 함양하는 동시에 집중적인 학업 프로그램을 제공합니다. 학생들은 국제 바칼로레아(IB) 프로그램을 포함한 국제적으로 인정받는 교육과정을 받아 세계 우수 대학 진학 준비에 도움이 됩니다.",
    tracks: [
      {
        title: "초등",
        levels: ["1~3학년 프로그램", "4~6학년 프로그램"],
        cta: "더 알아보기",
        imageSrc: "/images/programs/tieu-hoc.jpg",
      },
      {
        title: "중등",
        levels: [
          "7학년 - 8학년",
          "9학년 - 10학년",
          "국제 바칼로레아트 디플로마 프로그램 (IBDP)",
        ],
        cta: "더 알아보기",
        imageSrc: "/images/programs/trung-hoc.webp",
      },
    ],
  },
  fiveStars: {
    heading: "5성급 국제 학교 - 5 STARS",
    cards: [
      {
        title: "STAR STUDENTS",
        description:
          "우수한 학생 세대들에게 스포츠, 예술, 학업 전반에 걸쳐 빛나고 자신을 증명할 기회가 주어집니다.",
        iconSrc: "/images/five-stars/star-students.png",
      },
      {
        title: "STAR TEACHERS & COACHES",
        description:
          "풍부한 경험과 전문성을 갖춘 우수한 외국인 교사 및 코치진.",
        iconSrc: "/images/five-stars/star-teachers.png",
      },
      {
        title: "STAR FACILITIES",
        description:
          "푸미흥 중심지의 현대적인 50,000㎡ 캠퍼스와 최첨단 교실, 전문 스포츠 시설.",
        iconSrc: "/images/five-stars/star-facilities.png",
      },
      {
        title: "STAR PARENTS",
        description:
          "다양한 분야와 국가 출신의 전문가 및 사업가로 구성된 학부모 커뮤니티, 긴밀하고 다문화적인 환경에서 연결됩니다.",
        iconSrc: "/images/five-stars/star-students.png",
      },
      {
        title: "STAR PROGRAMS",
        description:
          "Cognia, CIS, WASC 등 3대 인증 기관으로부터 인증받은 IBDP 및 AP 프로그램.",
        iconSrc: "/images/five-stars/star-teachers.png",
      },
    ],
  },
  stats: {
    heading: "WOW NUMBERS",
    items: [
      { value: "100", suffix: "%", label: "합격률" },
      { value: "33", suffix: "/30.2", label: "IBDP 평균 점수" },
      { value: "45", suffix: "+", label: "클럽" },
      { value: "30", suffix: "+", label: "국적" },
    ],
    backgroundSrc: "/images/stats/stats-bg.png",
  },
  news: {
    heading: "소식 & 다가오는 행사",
    featured: {
      tag: "뉴스",
      date: "07/07/2026",
      title: "INSIDE THE LAB: SHAPING FUTURE CRITICAL THINKERS",
      imageSrc: "/images/news/news-featured.jpeg",
      cta: "더 읽어보세요",
    },
    items: [
      { tag: "뉴스", date: "29/06/2026", title: "CIS INSPIRES | DRIVING SOCIAL CHANGE THROUGH A PASSION FOR SPORTS", cta: "더 읽어보세요" },
      { tag: "뉴스", date: "30/06/2026", title: "EARCOS WEEKEND WORKSHOP - BUILDING INCLUSIVE SCHOOL CULTURE WITH KENDALL ZOLLER", cta: "더 읽어보세요" },
      { tag: "뉴스", date: "16/06/2026", title: "THE 2025-2026 ATHLETIC BANQUET AT CIS", cta: "더 읽어보세요" },
      { tag: "뉴스", date: "14/06/2026", title: "HONORING IMPACT AND COMMUNITY AT THE 2026 GIN AWARDS", cta: "더 읽어보세요" },
    ],
    exploreMoreCta: "더 탐색하기",
  },
  university: {
    heading: "대학교 수락",
    subheading: "전 세계 최고의 대학",
    selectAreaLabel: "지역 선택:",
    regions: [
      { id: 1, label: "북미" },
      { id: 2, label: "영국 & 아일랜드" },
      { id: 3, label: "아시아" },
      { id: 4, label: "호주" },
    ],
  },
  values: {
    heading: "CIS 학생 페르소나",
    activeLabel: "창의적일 자유",
    cards: [
      { icon: "/images/values/icon-1.png", label: "창의적일 자유" },
      { icon: "/images/values/icon-2.png", label: "결정할 자신감" },
      { icon: "/images/values/icon-3.png", label: "주도적인 학습" },
      { icon: "/images/values/icon-1-hover.png", label: "자기 조절" },
    ],
    gallerySrc: "/images/values/gallery-tu-do.png",
  },
  testimonials: {
    heading: "학부모와 학생들은 CIS에 대해 어떻게 말하고 있을까요?",
    items: [
      {
        quote:
          "CIS는 우리 가족에게 이상적인 선택입니다. 우리에게는 미취학 아동과 4학년 아동이 각각 한 명씩 있습니다. 우리는 우리의 요구를 완벽하게 충족시키도록 맞춤 제작된 통합 교육 과정을 높이 평가합니다.",
        name: "공유된 CIS 학부모 Stefan K.",
      },
      {
        quote: "CIS는 단순히 학교가 아닙니다, 이곳은 내 아이가 즐겨 다니는 곳입니다.",
        name: "공유된 CIS 학부모 Tony",
      },
    ],
  },
  inquiryForm: {
    heading: "문의하기",
    subheading: "아래의 정보 섹션을 작성하여 여러분에 대해 더 잘 알 수 있도록 도와주세요",
    fields: {
      parentName: "부모님의 성명",
      studentAge: "학생의 나이",
      phone: "핸드폰",
      phonePlaceholder: "+84 963 755 321",
      email: "Email",
      emailPlaceholder: "이메일을 입력하세요...",
      nationality: "당신의 국적은 무엇입니까?",
      program: "프로그램을 선택하세요",
      programPlaceholder: "-- 프로그램을 선택하세요 --",
    },
    submitCta: "제출하다",
    backgroundSrc: "/images/homev2/bg-sec9.jpg",
  },
  footer: {
    memberOf: "CIS - EQUEST 교육 그룹의 회원",
    contactHeading: "연락하다",
    hotlineLabel: "Hotline",
    hotline: "1900 255 636",
    hotlineNote: "(028) 54 123 456 (for recruitment)",
    phone: "1900 255 636",
    emails: "enquiry@cis.edu.vn / recruitment@admin.cis.edu.vn (for recruitment)",
    address: "호치민시 탄미구 23번 도로 7번지",
    schoolFullName: "캐나다 국제 초 · 중 · 고등학교",
    companyName:
      "CANADA INTERNATIONAL PRIMARY SCHOOL-SECONDARY SCHOOL-HIGH SCHOOL JOINT STOCK COMPANY",
    privacyPolicy: "개인 정보 정책",
  },
};

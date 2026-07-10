import type { HomeContent } from "@/types/content";

export const zh: HomeContent = {
  locale: "zh",
  languageLabel: "CH",
  flagSrc: "/images/asset/flag-zh-small.png",
  header: {
    inquiryCta: "咨询",
    library: "图书馆",
    careers: "招聘",
    nav: [
      { label: "关于我们", href: "/zh/about-us" },
      { label: "学术", href: "/zh/academics" },
      { label: "招生", href: "/zh/admissions" },
      { label: "校园生活", href: "/zh/school-life" },
      { label: "联系我们", href: "/zh/contact-us" },
    ],
  },
  hero: {
    title: "加拿大国际学校 (CIS)",
    cta: "了解更多",
    scrollHint: "请向下滚动",
    slides: [{ type: "image", src: "/images/banner/hero-campus.jpg" }],
  },
  principal: {
    heading: "来自校长的问候",
    paragraphs: [
      "欢迎来到 CIS！",
      "多年来，CIS始终致力于提供先进的学术质量、卓越的体育成绩以及突出的艺术贡献。同时，我们重视全球公民意识，帮助学生成为富有爱心、理解力和责任感的个人。",
      "凭借才华横溢的学生、敬业的教师团队和始终支持的社区，我坚信CIS将成为领先的国际学校之一。让我们携手努力，把这个学年打造成充满学习精神、成长和成功的一年！",
    ],
    photoSrc: "/images/staticpage/principal.jpg",
  },
  programs: {
    heading: "教育课程",
    intro:
      "加拿大国际学校（CIS）为一年级至十二年级的学生提供全面的教育课程。CIS专注于学生的全面发展，既提供深入的学术课程，又培养学生的批判性思维、创造力和全球公民意识。学生受益于国际认可的教学项目，包括国际文凭课程（IB Diploma），为他们进入世界顶尖大学做好充分准备。",
    tracks: [
      {
        title: "小学",
        levels: ["一年级至三年级课程", "四年级至六年级课程"],
        cta: "了解更多",
        imageSrc: "/images/programs/tieu-hoc.jpg",
      },
      {
        title: "中学",
        levels: [
          "七年级至八年级课程",
          "九年级至十年级课程",
          "国际文凭大学预科课程（IBDP）",
        ],
        cta: "了解更多",
        imageSrc: "/images/programs/trung-hoc.webp",
      },
    ],
  },
  fiveStars: {
    heading: "五星级国际学校 – 5 STARS",
    cards: [
      {
        title: "STAR STUDENTS",
        description: "历届优秀学生在体育、艺术和学术领域都获得了全面发光发彩、证明自我的机会。",
        iconSrc: "/images/five-stars/star-students.png",
      },
      {
        title: "STAR TEACHERS & COACHES",
        description: "经验丰富、专业造诣深厚的优秀外籍教师与教练团队。",
        iconSrc: "/images/five-stars/star-teachers.png",
      },
      {
        title: "STAR FACILITIES",
        description: "位于富美兴中心、占地50,000平方米的现代化校园，配备先进教室与专业体育设施。",
        iconSrc: "/images/five-stars/star-facilities.png",
      },
      {
        title: "STAR PARENTS",
        description: "由来自不同领域与国家的专业人士和企业家组成的家长社区，在紧密、多元文化的环境中彼此连接。",
        iconSrc: "/images/five-stars/star-students.png",
      },
      {
        title: "STAR PROGRAMS",
        description: "IBDP 与 AP 课程获得 Cognia、CIS、WASC 三大权威认证机构认证。",
        iconSrc: "/images/five-stars/star-teachers.png",
      },
    ],
  },
  stats: {
    heading: "令人印象深刻的数据",
    items: [
      { value: "100", suffix: "%", label: "毕业率" },
      { value: "33", suffix: "/30.2", label: "IBDP 平均分，高于全球平均" },
      { value: "45", suffix: "+", label: "个课外俱乐部" },
      { value: "30", suffix: "+", label: "个国籍" },
    ],
    backgroundSrc: "/images/stats/stats-bg.png",
  },
  news: {
    heading: "消息 & 即将到来的活动",
    featured: {
      tag: "新闻",
      date: "07/07/2026",
      title: "INSIDE THE LAB: SHAPING FUTURE CRITICAL THINKERS",
      imageSrc: "/images/news/news-featured.jpeg",
      cta: "阅读更多",
    },
    items: [
      { tag: "新闻", date: "29/06/2026", title: "CIS INSPIRES | DRIVING SOCIAL CHANGE THROUGH A PASSION FOR SPORTS", cta: "阅读更多" },
      { tag: "新闻", date: "30/06/2026", title: "EARCOS WEEKEND WORKSHOP - BUILDING INCLUSIVE SCHOOL CULTURE WITH KENDALL ZOLLER", cta: "阅读更多" },
      { tag: "新闻", date: "16/06/2026", title: "THE 2025-2026 ATHLETIC BANQUET AT CIS", cta: "阅读更多" },
      { tag: "新闻", date: "14/06/2026", title: "HONORING IMPACT AND COMMUNITY AT THE 2026 GIN AWARDS", cta: "阅读更多" },
    ],
    exploreMoreCta: "探索更多",
  },
  university: {
    heading: "大学系统",
    subheading: "世界顶尖大学",
    selectAreaLabel: "选择地区:",
    regions: [
      { id: 1, label: "北美" },
      { id: 2, label: "英国与爱尔兰" },
      { id: 3, label: "亚洲" },
      { id: 4, label: "澳大利亚" },
    ],
  },
  values: {
    heading: "CIS 学生画像",
    activeLabel: "自由创造",
    cards: [
      { icon: "/images/values/icon-1.png", label: "自由创造" },
      { icon: "/images/values/icon-2.png", label: "自信决策" },
      { icon: "/images/values/icon-3.png", label: "自主学习" },
      { icon: "/images/values/icon-1-hover.png", label: "自我调节" },
    ],
    gallerySrc: "/images/values/gallery-tu-do.png",
  },
  testimonials: {
    heading: "家长与学生的感言",
    items: [
      {
        quote: "CIS 不仅是一所学校，更是我孩子喜爱的地方。学校营造了一个安全、支持的环境，让孩子们知道他们在需要时可以寻求帮助。",
        name: "CIS 家长 Stefan K.",
      },
      {
        quote: "CIS 是我们为两个孩子做出的正确选择——一个在上小学，一个在四年级。我们非常欣赏学校提供的综合教育项目，完全满足了我们的需求。",
        name: "CIS 家长 Tony",
      },
    ],
  },
  inquiryForm: {
    heading: "咨询",
    subheading: "请填写以下信息，以便我们更好地了解您",
    fields: {
      parentName: "家长姓名",
      studentAge: "学生的年龄",
      phone: "手机",
      phonePlaceholder: "+84 963 755 321",
      email: "Email",
      emailPlaceholder: "请输入您的邮箱...",
      nationality: "您的国籍是什么？",
      program: "请选择项目",
      programPlaceholder: "-- 请选择项目 --",
    },
    submitCta: "发送",
    backgroundSrc: "/images/homev2/bg-sec9.jpg",
  },
  footer: {
    memberOf: "CIS —— 逸课教育集团成员",
    contactHeading: "联系方式",
    hotlineLabel: "Hotline",
    hotline: "1900 255 636",
    hotlineNote: "(028) 54 123 456 (for recruitment)",
    phone: "1900 255 636",
    emails: "enquiry@cis.edu.vn / recruitment@admin.cis.edu.vn (for recruitment)",
    address: "胡志明市新美坊第23街7号",
    schoolFullName: "加拿大国际小学 - 初中 - 高中",
    companyName:
      "CANADA INTERNATIONAL PRIMARY SCHOOL-SECONDARY SCHOOL-HIGH SCHOOL JOINT STOCK COMPANY",
    privacyPolicy: "隐私政策",
  },
};

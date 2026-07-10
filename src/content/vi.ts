import type { HomeContent } from "@/types/content";

export const vi: HomeContent = {
  locale: "vi",
  languageLabel: "VN",
  flagSrc: "/images/asset/flag-vn-small.png",
  header: {
    inquiryCta: "TƯ VẤN",
    library: "Thư viện",
    careers: "Tuyển dụng",
    nav: [
      { label: "VỀ CHÚNG TÔI", href: "/vi/gioi-thieu" },
      { label: "HỌC THUẬT", href: "/vi/hoc-thuat" },
      { label: "TUYỂN SINH", href: "/vi/tuyen-sinh" },
      { label: "ĐỜI SỐNG HỌC ĐƯỜNG", href: "/vi/doi-song-hoc-duong" },
      { label: "LIÊN HỆ", href: "/vi/lien-he" },
    ],
  },
  hero: {
    title: "Trường Quốc tế CIS",
    cta: "Tìm hiểu thêm",
    scrollHint: "Cuộn xuống",
    slides: [{ type: "image", src: "/images/banner/hero-campus.jpg" }],
  },
  principal: {
    heading: "LỜI CHÀO TỪ CÔ TỔNG HIỆU TRƯỞNG",
    paragraphs: [
      "Chào mừng quý phụ huynh, học sinh và đối tác đến với CIS!",
      "Suốt những năm qua, CIS luôn cam kết chất lượng học thuật tiên tiến, các thành tích thể thao cùng những đóng góp nghệ thuật nổi bật. Bên cạnh đó, chúng tôi đề cao tinh thần công dân toàn cầu bằng cách giúp học sinh trở thành những cá nhân với lòng nhân ái, sự hiểu biết và tinh thần trách nhiệm.",
      "Với những học sinh tài năng, đội ngũ giáo viên tận tâm và một cộng đồng luôn ủng hộ, tôi tin rằng CIS sẽ trở thành một trong những trường quốc tế hàng đầu. Cùng nhau, chúng ta sẽ biến năm học này trở thành năm của tinh thần học tập, phát triển để vươn tới thành công!",
    ],
    photoSrc: "/images/staticpage/principal.jpg",
  },
  programs: {
    heading: "CHƯƠNG TRÌNH GIÁO DỤC",
    intro:
      "Trường Quốc tế Canada (CIS) mang đến một chương trình giáo dục toàn diện cho học sinh từ Lớp 1 đến Lớp 12. Tập trung vào sự phát triển toàn diện, CIS cung cấp các chương trình học thuật chuyên sâu đồng thời nuôi dưỡng tư duy phản biện, sự sáng tạo và ý thức công dân toàn cầu. Học sinh được hưởng lợi từ các chương trình giảng dạy được quốc tế công nhận, bao gồm cả Bằng Tú tài Quốc tế (IB Diploma), giúp các em chuẩn bị cho các trường đại học hàng đầu trên thế giới.",
    tracks: [
      {
        title: "TIỂU HỌC",
        levels: ["CHƯƠNG TRÌNH LỚP 1 - 3", "CHƯƠNG TRÌNH LỚP 4 - 6"],
        cta: "Tìm hiểu thêm",
        imageSrc: "/images/programs/tieu-hoc.jpg",
      },
      {
        title: "TRUNG HỌC",
        levels: [
          "CHƯƠNG TRÌNH LỚP 7 - 8",
          "CHƯƠNG TRÌNH LỚP 9 - 10",
          "CHƯƠNG TRÌNH TÚ TÀI QUỐC TẾ (IBDP)",
        ],
        cta: "Tìm hiểu thêm",
        imageSrc: "/images/programs/trung-hoc.webp",
      },
    ],
  },
  fiveStars: {
    heading: "TRƯỜNG QUỐC TẾ 5 SAO - 5 STARS",
    cards: [
      {
        title: "STAR STUDENTS",
        description:
          "Các thế hệ học sinh ưu tú được trao cơ hội tỏa sáng toàn diện và khẳng định bản thân ở đa lĩnh vực gồm thể thao, nghệ thuật và học thuật.",
        iconSrc: "/images/five-stars/star-students.png",
      },
      {
        title: "STAR TEACHERS & COACHES",
        description:
          "Đội ngũ huấn luyện viên, giáo viên nước ngoài xuất sắc, giàu kinh nghiệm và có trình độ giáo dục chuyên sâu",
        iconSrc: "/images/five-stars/star-teachers.png",
      },
      {
        title: "STAR FACILITIES",
        description:
          "Không gian hiện đại 50.000m² trung tâm Phú Mỹ Hưng, hệ thống phòng học tiên tiến và khu thể thao chuyên nghiệp",
        iconSrc: "/images/five-stars/star-facilities.png",
      },
      {
        title: "STAR PARENTS",
        description:
          "Cộng đồng phụ huynh gồm các chuyên gia, doanh nhân hoạt động trong nhiều lĩnh vực, đến từ nhiều quốc gia, kết nối với nhau trong một môi trường gắn kết, đa văn hóa.",
        iconSrc: "/images/five-stars/star-students.png",
      },
      {
        title: "STAR PROGRAMS",
        description:
          "Chương trình IBDP và AP được bảo chứng chất lượng từ 3 tổ chức kiểm định hàng đầu: Cognia, CoIS, và WASC",
        iconSrc: "/images/five-stars/star-teachers.png",
      },
    ],
  },
  stats: {
    heading: "NHỮNG CON SỐ ẤN TƯỢNG",
    items: [
      { value: "100", suffix: "%", label: "Tỷ lệ tốt nghiệp" },
      { value: "33", suffix: "/30.2", label: "Điểm trung bình IBDP so với thế giới" },
      { value: "45", suffix: "+", label: "Câu lạc bộ ngoại khóa" },
      { value: "30", suffix: "+", label: "Quốc tịch" },
    ],
    backgroundSrc: "/images/stats/stats-bg.png",
  },
  news: {
    heading: "TIN TỨC & SỰ KIỆN SẮP TỚI",
    featured: {
      tag: "Tin tức",
      date: "07/07/2026",
      title: "PHÒNG THÍ NGHIỆM: NƠI TƯ DUY PHẢN BIỆN ĐƯỢC ĐỊNH HÌNH",
      imageSrc: "/images/news/news-featured.jpeg",
      cta: "Đọc thêm",
    },
    items: [
      { tag: "Tin tức", date: "29/06/2026", title: "CIS INSPIRES | BIẾN ĐAM MÊ THỂ THAO THÀNH SỨ MỆNH VÌ CỘNG ĐỒNG", cta: "Đọc thêm" },
      { tag: "Tin tức", date: "30/06/2026", title: "HỘI THẢO CHUYÊN MÔN CUỐI TUẦN EARCOS - KIẾN TẠO VĂN HÓA HỌC ĐƯỜNG CÙNG CHUYÊN GIA KENDALL ZOLLER", cta: "Đọc thêm" },
      { tag: "Tin tức", date: "16/06/2026", title: "LỄ TRAO GIẢI THỂ THAO MÙA GIẢI 2025 - 2026 TẠI CIS", cta: "Đọc thêm" },
      { tag: "Tin tức", date: "14/06/2026", title: "VINH DANH NHỮNG ĐÓNG GÓP Ý NGHĨA TẠI GIN AWARDS 2026", cta: "Đọc thêm" },
    ],
    exploreMoreCta: "Khám phá thêm",
  },
  university: {
    heading: "HỆ THỐNG TRƯỜNG ĐẠI HỌC",
    subheading: "CÁC TRƯỜNG ĐẠI HỌC HÀNG ĐẦU THẾ GIỚI",
    selectAreaLabel: "Chọn khu vực:",
    regions: [
      { id: 1, label: "Bắc Mỹ" },
      { id: 2, label: "Anh & Ireland" },
      { id: 3, label: "Châu Á" },
      { id: 4, label: "Úc" },
    ],
  },
  values: {
    heading: "CHÂN DUNG HỌC SINH CIS",
    activeLabel: "TỰ DO SÁNG TẠO",
    cards: [
      { icon: "/images/values/icon-1.png", label: "Tự do sáng tạo" },
      { icon: "/images/values/icon-2.png", label: "Tự tin để quyết định" },
      { icon: "/images/values/icon-3.png", label: "Tự học để có tri thức bền vững" },
      { icon: "/images/values/icon-1-hover.png", label: "Tự điều chỉnh" },
    ],
    gallerySrc: "/images/values/gallery-tu-do.png",
  },
  testimonials: {
    heading: "CẢM NHẬN CỦA PHỤ HUYNH VÀ HỌC SINH",
    items: [
      {
        quote:
          "CIS không chỉ là một trường học, đó là nơi con tôi yêu thích. Nhà trường tạo ra một môi trường an toàn và hỗ trợ, nơi trẻ em biết rằng chúng có thể tìm kiếm sự giúp đỡ khi cần thiết",
        name: "Chia sẻ của phụ huynh CIS Stefan K.",
      },
      {
        quote:
          "CIS là lựa chọn phù hợp cho gia đình chúng tôi với hai con—một bé học mầm non và một bé học lớp 4. Chúng tôi đánh giá cao chương trình học tích hợp, phù hợp hoàn hảo với nhu cầu của gia đình.",
        name: "Chia sẻ của phụ huynh CIS Tony",
      },
    ],
  },
  inquiryForm: {
    heading: "TƯ VẤN",
    subheading: "Vui lòng giúp chúng tôi điền vào phần thông tin bên dưới để hiểu bạn hơn",
    fields: {
      parentName: "Họ tên của phụ huynh",
      studentAge: "Tuổi của học sinh",
      phone: "Số điện thoại",
      phonePlaceholder: "+84 963 755 321",
      email: "Email",
      emailPlaceholder: "Nhập email của bạn...",
      nationality: "Quốc tịch của bạn là gì?",
      program: "Chọn chương trình",
      programPlaceholder: "-- Chọn chương trình --",
    },
    submitCta: "Gửi",
    backgroundSrc: "/images/homev2/bg-sec9.jpg",
  },
  footer: {
    memberOf: "CIS - Thành viên của Tập đoàn Giáo dục EQuest",
    contactHeading: "LIÊN HỆ",
    hotlineLabel: "Hotline",
    hotline: "1900 255 636",
    hotlineNote: "(028) 54 123 456 (for recruitment)",
    phone: "1900 255 636",
    emails: "enquiry@cis.edu.vn / recruitment@admin.cis.edu.vn (for recruitment)",
    address: "07 Đường Số 23, Phường Tân Mỹ, TP. Hồ Chí Minh",
    schoolFullName:
      "TRƯỜNG TIỂU HỌC - TRUNG HỌC CƠ SỞ - TRUNG HỌC PHỔ THÔNG QUỐC TẾ CANADA",
    companyName:
      "CANADA INTERNATIONAL PRIMARY SCHOOL-SECONDARY SCHOOL-HIGH SCHOOL JOINT STOCK COMPANY",
    privacyPolicy: "Chính sách bảo mật",
  },
};

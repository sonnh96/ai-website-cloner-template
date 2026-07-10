// Downloads all image/font assets referenced by the CIS homepage into public/.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ASSETS = [
  // Header / footer / nav icons
  ["https://cis.edu.vn/template/images/asset/calendar.svg", "images/asset/calendar.svg"],
  ["https://cis.edu.vn/template/images/asset/flag-canada-small.png", "images/asset/flag-canada-small.png"],
  ["https://cis.edu.vn/template/images/asset/flag-kr-small.png", "images/asset/flag-kr-small.png"],
  ["https://cis.edu.vn/template/images/asset/flag-vn-small.png", "images/asset/flag-vn-small.png"],
  ["https://cis.edu.vn/template/images/asset/flag-zh-small.png", "images/asset/flag-zh-small.png"],
  ["https://cis.edu.vn/template/images/asset/ic-360.svg", "images/asset/ic-360.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-backtotop.png", "images/asset/ic-backtotop.png"],
  ["https://cis.edu.vn/template/images/asset/ic-footer-location.svg", "images/asset/ic-footer-location.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-footer-mail.svg", "images/asset/ic-footer-mail.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-footer-phone.svg", "images/asset/ic-footer-phone.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-footer-social-1.svg", "images/asset/ic-footer-social-1.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-footer-social-2.svg", "images/asset/ic-footer-social-2.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-footer-social-3.svg", "images/asset/ic-footer-social-3.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-footer-social-4.svg", "images/asset/ic-footer-social-4.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-footer-social-5.svg", "images/asset/ic-footer-social-5.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-footer-social-6.svg", "images/asset/ic-footer-social-6.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-header-searchbox-mb.svg", "images/asset/ic-header-searchbox-mb.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-header-searchbox.svg", "images/asset/ic-header-searchbox.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-headerwidget-close.svg", "images/asset/ic-headerwidget-close.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-headerwidget-headphone.svg", "images/asset/ic-headerwidget-headphone.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-headerwidget-mail.svg", "images/asset/ic-headerwidget-mail.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-headerwidget-phone.svg", "images/asset/ic-headerwidget-phone.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-scrolldown-animate.svg", "images/asset/ic-scrolldown-animate.svg"],
  ["https://cis.edu.vn/template/images/asset/ic_close_24px.svg", "images/asset/ic_close_24px.svg"],
  ["https://cis.edu.vn/template/images/asset/mb-menu-social-1.svg", "images/asset/mb-menu-social-1.svg"],
  ["https://cis.edu.vn/template/images/asset/mb-menu-social-2.svg", "images/asset/mb-menu-social-2.svg"],
  ["https://cis.edu.vn/template/images/asset/mb-menu-social-3.svg", "images/asset/mb-menu-social-3.svg"],
  ["https://cis.edu.vn/template/images/asset/mb-menu-social-4.svg", "images/asset/mb-menu-social-4.svg"],
  ["https://cis.edu.vn/template/images/asset/mb-menu-social-5.svg", "images/asset/mb-menu-social-5.svg"],
  ["https://cis.edu.vn/template/images/asset/mb-menu-social-6.svg", "images/asset/mb-menu-social-6.svg"],
  ["https://cis.edu.vn/template/images/asset/mess.svg", "images/asset/mess.svg"],
  ["https://cis.edu.vn/template/images/asset/mobile-logo-menu.png", "images/asset/mobile-logo-menu.png"],
  ["https://cis.edu.vn/template/images/asset/ic-quote-base.svg", "images/asset/ic-quote-base.svg"],
  ["https://cis.edu.vn/template/images/asset/ic-quote-base-2.svg", "images/asset/ic-quote-base-2.svg"],
  // Section decorative backgrounds
  ["https://cis.edu.vn/template/images/home/vector-section-4.png", "images/home/vector-section-4.png"],
  ["https://cis.edu.vn/template/images/home/vector-section-4-mb.png", "images/home/vector-section-4-mb.png"],
  ["https://cis.edu.vn/template/images/homev2/bg-sec9.jpg", "images/homev2/bg-sec9.jpg"],
  ["https://cis.edu.vn/template/images/homev2/before-sec2.svg", "images/homev2/before-sec2.svg"],
  // Logos
  ["https://cis.edu.vn/upload/setting/original/CIS%20logo%20m%C3%A0u-1744599831.png", "images/logo/cis-logo-color.png"],
  ["https://cis.edu.vn/upload/setting/original/logo%20CIS%20new%20042024%20copy-07-1714115125.png", "images/logo/cis-logo-white.png"],
  // Accreditation partner logos
  ["https://cis.edu.vn/upload/partners/original/ib-world-school-logo-2-colour.png", "images/partners/ib-world-school.png"],
  ["https://cis.edu.vn/upload/partners/original/Asset%202-1740997346.png", "images/partners/collegeboard-ap.png"],
  ["https://cis.edu.vn/upload/partners/original/council-of-international-schools-1711523084.png", "images/partners/cis-accredited.png"],
  ["https://cis.edu.vn/upload/partners/original/Asset%204-1740997751.png", "images/partners/cognia.png"],
  ["https://cis.edu.vn/upload/partners/original/Asset%202-1739256077.png", "images/partners/wasc.png"],
  // Hero banner
  ["https://cis.edu.vn/upload/banner/original/banner-1701252903.jpg", "images/banner/hero-campus.jpg"],
  // Education programs section
  ["https://cis.edu.vn/upload/staticpage/thumb_500x0/tieu-hoc-cis.jpg", "images/programs/tieu-hoc.jpg"],
  ["https://cis.edu.vn/upload/staticpage/thumb_500x0/1000x1100.jpg", "images/programs/trung-hoc.jpg"],
  // 5 Stars section icons
  ["https://cis.edu.vn/upload/staticpage/thumb_500x0/our-5-star-06.png", "images/five-stars/star-students.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_500x0/our-5-star-07.png", "images/five-stars/star-teachers.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_500x0/our-5-star-08.png", "images/five-stars/star-facilities.png"],
  // Impressive numbers section background
  ["https://cis.edu.vn/upload/staticpage/original/staticpage-1702974666.png", "images/stats/stats-bg.png"],
  // News thumbnail (sample)
  ["https://cis.edu.vn/upload/news/thumb_750x0/740487471-37812338945031646-779391939913074088-n.jpeg", "images/news/news-featured.jpeg"],
  // Student portrait / values
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/chan-dung-hoc-sinh-cis.png", "images/values/portrait-1.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/chan-dung-hoc-sinh-quoc-te-canada.png", "images/values/portrait-2.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/ic-corevalues-1png-1701232066.png", "images/values/icon-1.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/ic-corevalues-2png-1701232165.png", "images/values/icon-2.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/ic-corevalues-3png-1701232185.png", "images/values/icon-3.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/ic-corevalues-hover-1png-1701232068.png", "images/values/icon-1-hover.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/ic-corevalues-hover-2png-1701232169.png", "images/values/icon-2-hover.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/ic-corevalues-hover-3png-1701232187.png", "images/values/icon-3-hover.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_1200x0/tu-do.png", "images/values/gallery-tu-do.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_1200x0/tu-tin.png", "images/values/gallery-tu-tin.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_1200x0/tu-hoc.png", "images/values/gallery-tu-hoc.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_1200x0/tu-dieu-chinh.png", "images/values/gallery-tu-dieu-chinh.png"],
  // Favicon
  ["https://cis.edu.vn/upload/setting/thumb_192x192/favicon.png", "seo/favicon-192.png"],
  ["https://cis.edu.vn/upload/setting/thumb_32x32/favicon.png", "seo/favicon-32.png"],
];

const BATCH = 4;
const PUBLIC_DIR = path.resolve(process.cwd(), "public");

async function download(url, dest) {
  const outPath = path.join(PUBLIC_DIR, dest);
  await mkdir(path.dirname(outPath), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(outPath, buf);
  console.log(`OK ${dest} (${buf.length} bytes)`);
}

async function main() {
  for (let i = 0; i < ASSETS.length; i += BATCH) {
    const batch = ASSETS.slice(i, i + BATCH);
    await Promise.all(batch.map(([url, dest]) => download(url, dest)));
  }
}

main();

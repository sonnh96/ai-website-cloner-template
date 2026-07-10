#!/usr/bin/env node
// Downloads real content assets from https://cis.edu.vn/ used for the CIS content mapping.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

const ASSETS = [
  ["https://cis.edu.vn/upload/setting/original/cis-logo-mau.png", "cis-logo.png"],
  ["https://cis.edu.vn/upload/setting/thumb_192x192/favicon.png", "cis-favicon-192.png"],
  ["https://cis.edu.vn/upload/setting/thumb_32x32/favicon.png", "cis-favicon-32.png"],
  ["https://cis.edu.vn/upload/banner/original/banner-1701252903.jpg", "cis-hero-banner.jpg"],
  ["https://cis.edu.vn/upload/partners/original/ib-world-school-logo-2-colour.png", "cis-partner-ib.png"],
  ["https://cis.edu.vn/upload/partners/original/Asset%202-1740997346.png", "cis-partner-ap.png"],
  ["https://cis.edu.vn/upload/partners/original/council-of-international-schools-1711523084.png", "cis-partner-cis-accredited.png"],
  ["https://cis.edu.vn/upload/partners/original/Asset%204-1740997751.png", "cis-partner-cognia.png"],
  ["https://cis.edu.vn/upload/partners/original/Asset%202-1739256077.png", "cis-partner-wasc.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_800x800/thumbnail-1714043655.jpg", "cis-principal.jpg"],
  ["https://cis.edu.vn/upload/staticpage/thumb_500x0/1000x1100.jpg", "cis-principal-alt.jpg"],
  ["https://cis.edu.vn/upload/staticpage/thumb_300x0/tieu-hoc-cis.jpg", "cis-elementary.jpg"],
  ["https://cis.edu.vn/upload/staticpage/thumb_300x0/dsc05523.webp", "cis-secondary.webp"],
  ["https://cis.edu.vn/upload/staticpage/thumb_300x0/3.png", "cis-program-3.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_300x0/4.png", "cis-program-4.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_500x0/our-5-star-06.png", "cis-star-students.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_500x0/our-5-star-07.png", "cis-star-teachers.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_500x0/our-5-star-08.png", "cis-star-facilities.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_1200x0/tu-do.png", "cis-portrait-tudo.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_1200x0/tu-hoc.png", "cis-portrait-tuhoc.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_1200x0/tu-tin.png", "cis-portrait-tutin.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_1200x0/tu-dieu-chinh.png", "cis-portrait-tudieuchinh.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/chan-dung-hoc-sinh-cis.png", "cis-portrait-icon-1.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/chan-dung-hoc-sinh-quoc-te-canada.png", "cis-portrait-icon-2.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/ic-corevalues-1png-1701232066.png", "cis-corevalue-1.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/ic-corevalues-2png-1701232165.png", "cis-corevalue-2.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_200x0/ic-corevalues-3png-1701232185.png", "cis-corevalue-3.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_500x0/cis-vi-parent.png", "cis-vi-parent.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_500x0/cis-vi-program.png", "cis-vi-program.png"],
  ["https://cis.edu.vn/upload/staticpage/thumb_300x0/cis-web-home.png", "cis-web-home.png"],
  ["https://cis.edu.vn/upload/news/thumb_750x0/740487471-37812338945031646-779391939913074088-n.jpeg", "cis-news-1.jpeg"],
  ["https://cis.edu.vn/upload/staticpage/original/staticpage-1702974666.png", "cis-staticpage-1.png"],
];

async function download(url, filename) {
  const dest = path.join(ROOT, "public/images", filename);
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK  images/${filename}  (${(buf.length / 1024).toFixed(1)} KB)`);
}

async function main() {
  await mkdir(path.join(ROOT, "public/images"), { recursive: true });
  await mkdir(path.join(ROOT, "public/seo"), { recursive: true });
  for (let i = 0; i < ASSETS.length; i += 4) {
    await Promise.all(ASSETS.slice(i, i + 4).map(([url, name]) => download(url, name)));
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

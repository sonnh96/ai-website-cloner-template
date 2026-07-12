#!/usr/bin/env node
// Downloads all images/videos discovered on wellspring.edu.vn homepage into public/.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const S3 = "https://wellspring-production.s3.ap-southeast-1.amazonaws.com/";
const SITE = "https://www.wellspring.edu.vn/";

const IMAGES = [
  // Logos
  [S3 + "Logo_WELLSPRING_Updated_93c911c8c5.png", "images/logos/wellspring-logo.png"],
  [S3 + "Logo_WELLSPRING_Updated_2025_White_01_31f6a9e46d.png", "images/logos/wellspring-logo-white.png"],
  [S3 + "hanoi_logo_4f323bfb3c.svg", "images/logos/wellspring-hanoi-logo.svg"],
  [S3 + "saigon_logo_f1ca22775e.svg", "images/logos/wellspring-saigon-logo.svg"],
  [S3 + "Thu_Logo_WSSS_Ver_2_1_019d5ea7f4.png", "images/logos/wellspring-saigon-south-logo.png"],

  // Section 1 - UNESCO / Happy School intro
  [S3 + "section1_mb_img1_4c1485c79c.svg", "images/section1/decor-illustration.svg"],

  // Section 2 - SDG stats
  [S3 + "03_good_health_74341e0076.svg", "images/section2/sdg-03-good-health.svg"],
  [S3 + "4_quality_education_ddb13ab266.svg", "images/section2/sdg-04-quality-education.svg"],
  [S3 + "section2_img3_22c0a2ef69.svg", "images/section2/decor-illustration-1.svg"],
  [S3 + "section2_img4_5c01bde8ca.svg", "images/section2/decor-illustration-2.svg"],

  // Section 3 - WISers community
  [S3 + "section3_img1_2bf64ebee7_7eab2812c6.png", "images/section3/wisers-photo.png"],

  // Section 4 - Campus journey cards
  [S3 + "anh_toan_canh_1_min_3b0ba23724_ea3d26ab8b.png", "images/section4/hanoi-campus-aerial.png"],
  [S3 + "wssg_campus_1_min_ca681e3aa4_2fd942277b.jpg", "images/section4/saigon-campus-aerial.jpg"],
  [S3 + "Doddle_campus_H9_02_7a7f3e8cf5.png", "images/section4/campus-doddle.png"],

  // Section 5 - News cards
  [S3 + "25_26_Banner_web_c0fb6204eb.png", "images/section5/news-banner-1.png"],
  [S3 + "Banner_web_54_dcc95acaed.png", "images/section5/news-banner-2.png"],
  [S3 + "Banner_web_53_b71aab7b17.png", "images/section5/news-banner-3.png"],

  // Section 6 - Final CTA
  [S3 + "m_cta_card_bg_71fb033278_9086c0ac2c.jpeg", "images/section6/cta-photo.jpeg"],

  // Certificate strip - partner logos
  [S3 + "logo_doi_05_37d4c08e3c.png", "images/partners/collegeboard-1.png"],
  [S3 + "logo_doi_01_3d805a9b6d.png", "images/partners/collegeboard-2.png"],
  [S3 + "logo1_03fd9d4a49.png", "images/partners/collegeboard-3.png"],
  [S3 + "logo_doi_04_a9cbeb4afa.png", "images/partners/edmentum-mizzou.png"],
  [S3 + "WASC_eab1dce043.png", "images/partners/wasc.png"],

  // Footer social icons
  [S3 + "ic_facebook_gray_f2f5357cda_b3900a3b34.svg", "images/social/facebook.svg"],
  [S3 + "ic_youtube_gray_a403ff39d8_6fb4145433.svg", "images/social/youtube.svg"],
  [S3 + "ic_linkedin_gray_6acbd98ffd_a03ba98f79.svg", "images/social/linkedin.svg"],
  [S3 + "Zalo_5bed6d3abb_a03589936a.svg", "images/social/zalo.svg"],

  // Site UI icons (favicon)
  [SITE + "favicon.svg" /* fallback below */, "seo/favicon.svg"],
];

const VIDEOS = [
  [S3 + "Hero_updated_90398b2c31_1720a211f1.mp4", "videos/hero-video.mp4"],
];

const FAVICON_URL =
  "https://wellspring-production.s3.ap-southeast-1.amazonaws.com/WS_favicon_625176f6bd_1_1d73ce209f.svg";

const PUBLIC_DIR = path.resolve(import.meta.dirname, "..", "public");
const CONCURRENCY = 4;

async function downloadOne(url, dest) {
  const destPath = path.join(PUBLIC_DIR, dest);
  await mkdir(path.dirname(destPath), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`FAILED (${res.status}): ${url}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(destPath, buf);
    console.log(`OK: ${dest} (${buf.length} bytes)`);
  } catch (err) {
    console.error(`ERROR: ${url} -> ${err.message}`);
  }
}

async function runBatched(items) {
  for (let i = 0; i < items.length; i += CONCURRENCY) {
    const batch = items.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(([url, dest]) => downloadOne(url, dest)));
  }
}

async function main() {
  await downloadOne(FAVICON_URL, "seo/favicon.svg");
  await runBatched(IMAGES.filter(([url]) => !url.endsWith("favicon.svg")));
  await runBatched(VIDEOS);
  console.log("Done.");
}

main();

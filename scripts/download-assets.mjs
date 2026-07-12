// Downloads Kadu theme assets (images) discovered from https://themexriver.com/wp/kadu/
// into public/images/, preserving the wp-content/uploads/YYYY/MM/ path structure.
import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const urlListPath = path.join(__dirname, "kadu-asset-urls.txt");
const urls = (await readFile(urlListPath, "utf-8"))
  .split("\n")
  .map((l) => l.trim())
  .filter(Boolean);

const favicons = [
  "https://themexriver.com/wp/kadu/wp-content/uploads/2024/06/cropped-favicon-32x32.png",
  "https://themexriver.com/wp/kadu/wp-content/uploads/2024/06/cropped-favicon-192x192.png",
  "https://themexriver.com/wp/kadu/wp-content/uploads/2024/06/cropped-favicon-180x180.png",
];

function destFor(url) {
  const u = new URL(url);
  const m = u.pathname.match(/wp-content\/uploads\/(.+)$/);
  const rel = m ? m[1] : path.basename(u.pathname);
  if (favicons.includes(url)) {
    return path.join(root, "public", "seo", path.basename(rel));
  }
  return path.join(root, "public", "images", "kadu", rel);
}

async function downloadOne(url) {
  const dest = destFor(url);
  await mkdir(path.dirname(dest), { recursive: true });
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" },
  });
  if (!res.ok) {
    console.error(`FAIL ${res.status} ${url}`);
    return { url, ok: false };
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK ${dest.replace(root + "/", "")} (${buf.length}b)`);
  return { url, ok: true };
}

async function run(items, concurrency = 4) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await downloadOne(items[idx]);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

const results = await run(urls, 4);
const failed = results.filter((r) => !r.ok);
console.log(`\nDone. ${results.length - failed.length}/${results.length} succeeded.`);
if (failed.length) {
  console.log("Failed:", failed.map((f) => f.url).join("\n"));
}

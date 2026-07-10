#!/usr/bin/env node
// Downloads all image/video/svg assets referenced by https://www.tas.edu.vn/ into public/.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const PAGE_URL = 'https://www.tas.edu.vn/';
const ROOT = path.resolve(import.meta.dirname, '..');

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

function categorize(url) {
  const clean = url.split('?')[0];
  const ext = path.extname(clean).toLowerCase();
  if (['.mp4', '.webm', '.mov'].includes(ext)) return 'videos';
  if (clean.includes('icon') || clean.includes('favicon') || clean.includes('apple-touch')) return 'seo';
  return 'images';
}

function localName(url) {
  const clean = decodeURIComponent(url.split('?')[0]);
  const base = path.basename(clean);
  return base.replace(/[^a-zA-Z0-9._-]/g, '-');
}

async function extractAssetUrls(html) {
  const urls = new Set();
  const patterns = [
    /https:\/\/cdn\.prod\.website-files\.com\/[^"'\s)]+\.(?:webp|png|jpe?g|svg|gif|mp4|webm)/gi,
  ];
  for (const re of patterns) {
    for (const m of html.matchAll(re)) urls.add(m[0]);
  }
  return [...urls];
}

async function download(url, destDir) {
  const name = localName(url);
  const dest = path.join(ROOT, 'public', destDir, name);
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${url}`);
    return null;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK  ${destDir}/${name}  (${(buf.length / 1024).toFixed(1)} KB)`);
  return `/${destDir}/${name}`;
}

async function batched(items, size, fn) {
  const results = [];
  for (let i = 0; i < items.length; i += size) {
    const chunk = items.slice(i, i + size);
    const res = await Promise.all(chunk.map(fn));
    results.push(...res);
  }
  return results;
}

async function main() {
  await mkdir(path.join(ROOT, 'public/images'), { recursive: true });
  await mkdir(path.join(ROOT, 'public/videos'), { recursive: true });
  await mkdir(path.join(ROOT, 'public/seo'), { recursive: true });

  const res = await fetch(PAGE_URL, { headers: { 'User-Agent': UA } });
  const html = await res.text();
  const urls = await extractAssetUrls(html);

  console.log(`Discovered ${urls.length} unique asset URLs`);

  const manifest = {};
  await batched(urls, 4, async (url) => {
    const dir = categorize(url);
    const localPath = await download(url, dir);
    if (localPath) manifest[url] = localPath;
  });

  await writeFile(
    path.join(ROOT, 'docs/research/tas.edu.vn/asset-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`\nDone. ${Object.keys(manifest).length}/${urls.length} downloaded. Manifest written to docs/research/tas.edu.vn/asset-manifest.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("layout metadata no longer ships development preview meta", () => {
  const layout = readFileSync(join(root, "app/layout.tsx"), "utf8");
  assert.doesNotMatch(layout, /codex-preview/);
  assert.match(layout, /metadataBase/);
  assert.match(layout, /openGraph/);
});

test("seo routes exist", () => {
  readFileSync(join(root, "app/robots.ts"), "utf8");
  readFileSync(join(root, "app/sitemap.ts"), "utf8");
  readFileSync(join(root, "app/not-found.tsx"), "utf8");
});

test("contact form posts directly to Formspree for static hosting", () => {
  const form = readFileSync(join(root, "app/contact/contact-form.tsx"), "utf8");
  assert.match(form, /formspree\.io/);
  assert.doesNotMatch(form, /\/api\/contact/);
});

test("static export is configured for cPanel", () => {
  const config = readFileSync(join(root, "next.config.ts"), "utf8");
  assert.match(config, /output:\s*"export"/);
  assert.match(config, /unoptimized:\s*true/);
});

test("security headers are set for Apache/cPanel", () => {
  const htaccess = readFileSync(join(root, "public/.htaccess"), "utf8");
  assert.match(htaccess, /Content-Security-Policy/);
  assert.match(htaccess, /X-Frame-Options/);
});

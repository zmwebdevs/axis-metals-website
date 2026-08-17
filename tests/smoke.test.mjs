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

test("contact API and form exist for Vercel", () => {
  const api = readFileSync(join(root, "app/api/contact/route.ts"), "utf8");
  const form = readFileSync(join(root, "app/contact/contact-form.tsx"), "utf8");
  assert.match(api, /RESEND_API_KEY/);
  assert.match(api, /FORMSPREE_FORM_ID/);
  assert.match(form, /\/api\/contact/);
});

test("security headers configured for Vercel", () => {
  const config = readFileSync(join(root, "next.config.ts"), "utf8");
  assert.match(config, /Content-Security-Policy/);
  assert.match(config, /X-Frame-Options/);
});

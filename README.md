# Axis Metals Website

Complete source code for the Axis Metals multi-page company website.

## Technology

- Next.js 16 App Router (Vercel-ready)
- React 19 and TypeScript
- Tailwind CSS 4 plus custom styling in `app/globals.css`

The application source is in `app/`. All images, logos, flags, certification marks, and other static assets are in `public/`.

## Requirements

- Node.js 22.13.0 or newer
- npm 10 or newer

## Install

```bash
npm install
```

For a reproducible clean installation:

```bash
npm ci
```

## Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to GitHub (or import it in the Vercel dashboard).
2. Create a new Vercel project pointing at this repository / directory.
3. Framework preset: **Next.js** (see `vercel.json`).
4. Add environment variables (Project → Settings → Environment Variables):

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL, e.g. `https://www.axismetals.ca` |
| `CONTACT_TO_EMAIL` | Optional | Inbox for form submissions (defaults to `info@axismetals.ca`) |
| `RESEND_API_KEY` | One of Resend or Formspree | Sends contact form email via [Resend](https://resend.com) |
| `CONTACT_FROM_EMAIL` | With Resend | Verified sender, e.g. `Axis Metals <noreply@axismetals.ca>` |
| `FORMSPREE_FORM_ID` | Alternative to Resend | Formspree form id if you prefer Formspree |

Without `RESEND_API_KEY` or `FORMSPREE_FORM_ID`, the contact form returns a friendly error and asks visitors to email or call.

5. Deploy.

## Environment Variables

Copy the example file for local development:

```bash
cp .env.example .env.local
```

## Main Project Structure

```text
app/                 Website pages, shared components, layout, CSS, API routes
public/              Images, logos, flags, icons, and certification assets
package.json         Project scripts and dependencies
next.config.ts       Next.js config (image formats + security headers)
vercel.json          Vercel project hints
```

## Pages

- `/` - Home
- `/about` - About
- `/services` - Services
- `/projects` - Projects
- `/contact` - Contact, map (consent gate), and inquiry form
- `/api/contact` - Contact form API

## Editing

Page components are under `app/`. Shared header and footer markup is in `app/site-shell.tsx`. Visual system is in `app/globals.css`. Replace or add production assets under `public/images/`.

Social icons in the footer are placeholders until Instagram / LinkedIn URLs are ready.

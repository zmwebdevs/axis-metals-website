/** Production site URL — set NEXT_PUBLIC_SITE_URL before `npm run build`. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.axismetals.ca";

/** Formspree form ID — baked in at build time for the static cPanel export. */
export const formspreeFormId =
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim() || "";

export const siteName = "Axis Metals";

export const defaultDescription =
  "Axis Metals provides structural steel, miscellaneous metals, engineering, fabrication and installation support from Toronto across Canada and the United States.";

export const contactEmail = "info@axismetals.ca";
export const contactPhone = "416-746-2347";
export const contactPhoneHref = "tel:+14167462347";
export const contactAddress = "152 Toryork Drive, Toronto, ON M9L 1X6";

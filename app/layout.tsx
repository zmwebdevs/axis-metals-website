import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { defaultDescription, siteName, siteUrl } from "./site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Structural Steel & Miscellaneous Metals`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName,
    title: `${siteName} | Structural Steel & Miscellaneous Metals`,
    description: defaultDescription,
    images: [
      {
        url: "/images/hero-steel.jpg",
        width: 2132,
        height: 1600,
        alt: "Structural steel fabrication by Axis Metals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Structural Steel & Miscellaneous Metals`,
    description: defaultDescription,
    images: ["/images/hero-steel.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

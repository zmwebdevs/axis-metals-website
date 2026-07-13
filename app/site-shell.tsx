"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { contactPhoneHref } from "./site-config";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

export function Header() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
    mobileMenuRef.current?.removeAttribute("open");
  };

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="Axis Metals home">
          <Image
            src="/images/axis-logo.png"
            alt=""
            width={289}
            height={308}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <div className="header-right">
          <div className="header-meta">
            <div
              className="country-marks"
              aria-label="Serving Canada and the United States"
            >
              <Image
                src="/images/flag-canada.png"
                alt="Canada"
                width={45}
                height={30}
              />
              <Image
                src="/images/flag-usa.png"
                alt="United States"
                width={45}
                height={30}
              />
            </div>
            <a className="phone-link" href={contactPhoneHref}>
              416-746-2347
            </a>
          </div>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label, href]) => (
              <Link
                className={pathname === href ? "active" : ""}
                key={href}
                href={href}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <details className="mobile-menu" ref={mobileMenuRef}>
          <summary aria-label="Open navigation">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <Link
                onClick={closeMobileMenu}
                className={pathname === href ? "active" : ""}
                key={href}
                href={href}
              >
                {label}
              </Link>
            ))}
            <a onClick={closeMobileMenu} href={contactPhoneHref}>
              416-746-2347
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Image
            src="/images/axis-logo.png"
            alt="Axis Metals"
            width={289}
            height={308}
          />
          <p>
            Structural steel and miscellaneous metals for construction projects
            across Canada and the United States.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:info@axismetals.ca">info@axismetals.ca</a>
          <a href={contactPhoneHref}>416-746-2347</a>
          <p>
            152 Toryork Drive
            <br />
            Toronto, ON M9L 1X6
          </p>
        </div>
        <div className="footer-social">
          <h3>Social</h3>
          {/* URLs intentionally empty until accounts are ready — replace href="#" when available */}
          <div
            className="social-icons"
            aria-label="Social media links coming soon"
          >
            <span
              className="social-icon"
              title="Instagram — coming soon"
              role="img"
              aria-label="Instagram coming soon"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle className="social-dot" cx="17.3" cy="6.8" r="1" />
              </svg>
            </span>
            <span
              className="social-icon"
              title="LinkedIn — coming soon"
              role="img"
              aria-label="LinkedIn coming soon"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle className="social-fill" cx="7.4" cy="9" r="1.35" />
                <path
                  className="social-fill"
                  d="M6.2 11h2.4v7H6.2zM10.5 11h2.3v1c.8-.9 1.8-1.3 3-1.3 2.2 0 3.7 1.4 3.7 4.2V18h-2.4v-2.8c0-1.6-.6-2.3-1.8-2.3-1.4 0-2.3.9-2.3 2.7V18h-2.5z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Axis Metals Inc.</span>
        <span>Built to move projects forward.</span>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

export function CtaBand({
  eyebrow,
  title,
  href = "/contact",
  label = "Talk to our team",
}: {
  eyebrow: string;
  title: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow light">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <Link className="button button-white" href={href}>
          {label} <span className="arrow-icon diagonal" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

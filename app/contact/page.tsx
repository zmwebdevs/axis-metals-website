import type { Metadata } from "next";
import { Footer, Header, PageHero } from "../site-shell";
import { ContactForm } from "./contact-form";
import { ContactMap } from "./contact-map";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Axis Metals in Toronto to discuss structural steel, miscellaneous metals, schedules and project requirements.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Axis Metals",
    description:
      "Connect with our Toronto team about project scope, schedules and supply requirements.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Contact Axis Metals"
          title="Let’s talk about your next project."
          copy="Connect with our Toronto team to discuss project scope, schedules, supply requirements and next steps."
        />
        <section className="section contact-section">
          <div className="container contact-layout">
            <ul className="contact-details">
              <li>
                <span>Address</span>
                <div>
                  <p>
                    152 Toryork Drive
                    <br />
                    Toronto, Ontario M9L 1X6
                  </p>
                  <a
                    className="direction-link"
                    href="https://www.google.com/maps/search/?api=1&query=152+Toryork+Drive+Toronto+ON+M9L+1X6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get directions{" "}
                    <span className="arrow-icon diagonal" aria-hidden="true" />
                  </a>
                </div>
              </li>
              <li>
                <span>Phone</span>
                <a href="tel:+14167462347">416-746-2347</a>
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:info@axismetals.ca">info@axismetals.ca</a>
              </li>
            </ul>
            <ContactMap />
          </div>
        </section>
        <section className="section contact-form-section">
          <div className="container contact-form-layout">
            <div>
              <p className="eyebrow">Send a message</p>
              <h2>Tell us about the scope.</h2>
              <p className="lead">
                Share a few details and our team will follow up. Prefer to talk
                now? Call{" "}
                <a href="tel:+14167462347">416-746-2347</a> or email{" "}
                <a href="mailto:info@axismetals.ca">info@axismetals.ca</a>.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

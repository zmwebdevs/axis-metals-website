import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header, PageHero } from "../site-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Axis Metals supports construction teams with structural steel and miscellaneous metals from our Toronto base across Canada and the United States.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Axis Metals",
    description:
      "A practical partner for complex steelwork — design coordination, fabrication support and field execution from Toronto.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="About Axis Metals"
          title="A practical partner for complex steelwork."
          copy="Axis Metals brings design coordination, fabrication support and field execution together from our Toronto base."
        />
        <section className="section about-story">
          <div className="container story-grid">
            <div>
              <p className="eyebrow">Our company</p>
              <h2>Built around the way projects actually move.</h2>
            </div>
            <div className="about-copy">
              <p>
                Axis Metals Inc. supports construction teams with structural steel
                and miscellaneous metals solutions across commercial, industrial,
                institutional and infrastructure environments.
              </p>
              <p>
                Our approach is straightforward: understand the scope, coordinate
                the details and keep communication clear from early planning
                through site execution. By bringing design thinking and practical
                delivery together, we help reduce friction between the drawing
                set, the shop and the field.
              </p>
              <p>
                Based in Toronto, we serve Canadian projects and are open to
                supplying clients throughout the United States.
              </p>
            </div>
          </div>
        </section>
        <section className="values section">
          <div className="container">
            <p className="eyebrow">What guides us</p>
            <div className="value-grid">
              <article>
                <span>01</span>
                <h3>Clarity</h3>
                <p>
                  Direct communication and well-coordinated information at every
                  stage.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Precision</h3>
                <p>
                  Careful attention to the details that determine fit, finish and
                  constructability.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Ownership</h3>
                <p>
                  A practical, accountable approach to solving problems and
                  keeping work moving.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Partnership</h3>
                <p>
                  Strong working relationships with clients, consultants,
                  contractors and trades.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="image-statement">
          <Image
            src="/images/ttc-hillcrest-3.jpg"
            alt="Steel installation at TTC Hillcrest"
            fill
            sizes="100vw"
            loading="lazy"
          />
          <div>
            <p className="eyebrow light">Our focus</p>
            <h2>
              Buildable solutions.
              <br />
              Dependable execution.
            </h2>
            <Link className="button button-primary" href="/services">
              Explore our services{" "}
              <span className="arrow-icon horizontal" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { CtaBand, Footer, Header } from "./site-shell";

const capabilities = [
  {
    number: "01",
    title: "Structural steel",
    text: "Complete building frames, reinforcements and heavy structural assemblies - engineered and fabricated to CSA/CWB welding standards, from 30 to 4,000+ tons per project.",
  },
  {
    number: "02",
    title: "Miscellaneous metals",
    text: "Custom stairs, railings, platforms, canopies and architectural metalwork built to project requirements.",
  },
  {
    number: "03",
    title: "Engineering & detailing",
    text: "Structural design and connection detailing utilizing the latest version of SDS-2 3D modeling software, taking projects from early concept through production-ready shop drawings.",
  },
  {
    number: "04",
    title: "Installation",
    text: "Field coordination and erection planning focused on safe, efficient installation and dependable execution.",
  },
];

const projects = [
  {
    name: "TTC Hillcrest",
    image: "/images/ttc-hillcrest.jpg",
    type: "Structural steel",
  },
  {
    name: "World on Yonge",
    image: "/images/world-on-yonge.jpg",
    type: "Architectural steel",
  },
  {
    name: "GTAA Terminal 1",
    image: "/images/gtaa-t1.jpg",
    type: "Structural reinforcement",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero">
          <Image
            className="hero-image"
            src="/images/hero-steel.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={75}
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="container hero-content">
            <p className="eyebrow light">Axis Metals</p>
            <h1>
              Steelwork that
              <br /> moves projects forward.
            </h1>
            <p className="hero-copy">
              Axis Metals delivers coordinated structural steel, miscellaneous
              metals, engineering and installation support for demanding
              construction projects.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                Get in touch{" "}
                <span className="arrow-icon diagonal" aria-hidden="true" />
              </Link>
              <Link className="button button-outline" href="/projects">
                Explore our work{" "}
                <span className="arrow-icon horizontal" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="hero-rail">
            <div className="container hero-rail-inner">
              <div>
                <strong>Toronto, Ontario</strong>
                <span>Head Office</span>
              </div>
              <div>
                <strong>Canada + United States</strong>
                <span>Supply Coverage</span>
              </div>
              <div>
                <strong>End-to-end</strong>
                <span>Project Support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="intro section">
          <div className="container split-heading">
            <p className="eyebrow">What we do</p>
            <div>
              <h2>
                One partner from design
                <br /> through installation.
              </h2>
              <p className="lead">
                We bring technical coordination, fabrication capability and field
                execution together, helping teams turn complex steel scopes into
                buildable results.
              </p>
            </div>
          </div>
          <div className="container capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link
                  aria-label={`Learn about ${item.title}`}
                  href="/services"
                >
                  <span className="arrow-icon diagonal" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="dark-section section">
          <div className="container section-title-row">
            <div>
              <p className="eyebrow light">Our projects</p>
              <h2>Built for real-world demands.</h2>
            </div>
            <Link className="button button-outline" href="/projects">
              View all projects{" "}
              <span className="arrow-icon horizontal" aria-hidden="true" />
            </Link>
          </div>
          <div className="container project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-${index + 1}`}
                key={project.name}
              >
                <Link
                  href="/projects"
                  className="project-card-link"
                  aria-label={`View ${project.name} and other projects`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} steel project`}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="project-card-shade" />
                  <div className="project-card-copy">
                    <span>{project.type}</span>
                    <h3>{project.name}</h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="certifications section">
          <div className="container certification-heading">
            <p className="eyebrow">Our certifications</p>
            <h2>Recognized industry standards.</h2>
          </div>
          <div className="container certification-grid">
            <article>
              <Image
                src="/images/cert-tca.png"
                alt="Member of the Toronto Construction Association"
                width={280}
                height={150}
              />
            </article>
            <article>
              <Image
                src="/images/cert-cwb.png"
                alt="CWB Group"
                width={280}
                height={150}
              />
            </article>
            <article>
              <Image
                src="/images/cert-ossfa.png"
                alt="Ontario Structural Steel Fabricators Association"
                width={280}
                height={150}
              />
            </article>
          </div>
        </section>

        <CtaBand
          eyebrow="Have a project in mind?"
          title="Let’s build something strong."
        />
      </main>
      <Footer />
    </>
  );
}

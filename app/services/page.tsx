import type { Metadata } from "next";
import { CtaBand, Footer, Header, PageHero } from "../site-shell";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Axis Metals services cover fabrication, project management, design consulting, detailing and sub-contract erection for structural and miscellaneous steel.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Axis Metals",
    description:
      "Steel expertise coordinated end to end — from design and detailing through fabrication and installation.",
    url: "/services",
  },
};

const services = [
  [
    "01",
    "Fabrication and Assembly",
    "Structural and miscellaneous steel fabrication and assembly for frames, stairs, railings, platforms, canopies and custom project requirements.",
  ],
  [
    "02",
    "Project Management",
    "Clear coordination across consultants, contractors, trades and site teams to keep scope, schedule and decisions moving.",
  ],
  [
    "03",
    "Design and Consulting",
    "Practical design input and consulting support developed around structural requirements, constructability and efficient fabrication.",
  ],
  [
    "04",
    "Project Detailing",
    "Coordinated shop drawings, 3D modeling and construction documentation that move steel from concept to fabrication.",
  ],
  [
    "05",
    "Sub-contract Erection",
    "Field planning and sub-contract erection support focused on safe, efficient execution across structural and miscellaneous metals scopes.",
  ],
] as const;

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Our services"
          title="Steel expertise, coordinated end to end."
          copy="From early design and detailing through fabrication and installation, our services are shaped around buildable results."
        />
        <section className="section service-list-section">
          <div className="container interior-intro">
            <p className="eyebrow">Our process</p>
            <h2>
              One accountable team.
              <br /> Every critical stage.
            </h2>
          </div>
          <div className="container service-list">
            {services.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="quality-section section">
          <div className="container quality-grid">
            <p className="eyebrow light">Quality commitment</p>
            <div>
              <h2>Quality at every stage.</h2>
              <p className="quality-lead">
                Quality is built into every stage of our work, from design review
                and project detailing through fabrication, assembly and field
                erection.
              </p>
              <p>
                Our team follows documented CSA and CWB processes, verifies
                critical dimensions and welding requirements, and coordinates
                every scope with care. The result is precise, dependable
                steelwork delivered to meet project schedules and budgets.
              </p>
            </div>
          </div>
        </section>
        <CtaBand
          eyebrow="Ready to scope a project?"
          title="Let’s talk about your steel package."
          label="Contact Axis Metals"
        />
      </main>
      <Footer />
    </>
  );
}

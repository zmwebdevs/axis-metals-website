import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, Footer, Header, PageHero } from "../site-shell";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Axis Metals project work across structural and architectural steel for commercial, industrial and infrastructure clients.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Axis Metals",
    description:
      "A legacy of structural and architectural steel projects delivered with integrity across Canada and the United States.",
    url: "/projects",
  },
};

const projects = [
  [
    "3080 Yonge Street Redevelopment",
    "Structural steel",
    "/images/3080-yonge-4.jpg",
  ],
  ["TTC Hillcrest", "Structural steel", "/images/ttc-hillcrest.jpg"],
  ["GTAA Terminal 1", "Structural reinforcement", "/images/gtaa-t1.jpg"],
  ["World on Yonge", "Architectural steel", "/images/world-on-yonge.jpg"],
  ["Magna Pullmatic Plant", "Industrial", "/images/magna-plant.jpg"],
  ["Canadian Tire", "Commercial", "/images/canadian-tire.jpg"],
  [
    "Barcelona Tavern, Liberty Village",
    "Commercial",
    "/images/barcelona-tavern.jpg",
  ],
] as const;

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Our projects"
          title="A legacy built in steel."
          copy="A legacy of structural & architectural steel projects with the highest level of integrity and ethics in the markets we serve."
        />
        <section className="section projects-page">
          <div className="container projects-gallery">
            {projects.map(([name, type, image]) => (
              <article key={name}>
                <div className="gallery-image">
                  <Image
                    src={image}
                    alt={`${name} project`}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-copy">
                  <span>{type}</span>
                  <h2>{name}</h2>
                </div>
              </article>
            ))}
          </div>
        </section>
        <CtaBand
          eyebrow="Your project could be next"
          title="Let’s discuss the scope."
          label="Contact Axis Metals"
        />
      </main>
      <Footer />
    </>
  );
}

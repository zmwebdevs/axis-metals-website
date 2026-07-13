import Link from "next/link";
import { Footer, Header } from "./site-shell";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="not-found-page">
        <div className="container not-found-inner">
          <p className="eyebrow">Page not found</p>
          <h1>This page doesn’t exist.</h1>
          <p className="lead">
            The link may be outdated or mistyped. Head back to the homepage or
            contact our Toronto team.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/">
              Back to home{" "}
              <span className="arrow-icon horizontal" aria-hidden="true" />
            </Link>
            <Link className="text-link" href="/contact">
              Contact us{" "}
              <span className="arrow-icon diagonal" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

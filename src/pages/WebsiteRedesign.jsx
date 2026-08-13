import { Link } from "react-router-dom";

function WebsiteRedesign() {
  return (
    <div className="seo-page">
      <header className="seo-page-nav">
        <Link to="/" className="seo-logo">
          WEBMINT<span>®</span>
        </Link>

        <Link to="/#contact" className="seo-nav-button">
          Let's Talk ↗
        </Link>
      </header>

      <main>
        <section className="seo-hero">
          <span className="seo-label">WEBSITE REDESIGN / 04</span>

          <h1>
            Transform Your
            <br />
            Website with a <em>Redesign.</em>
          </h1>

          <p>
            Turn an outdated website into a modern, responsive and
            professional digital experience.
          </p>

          <Link to="/#contact" className="seo-cta">
            START A PROJECT ↗
          </Link>
        </section>

        <section className="seo-content">
          <h2>Modern Website Redesign</h2>

          <p>
            An outdated website can make a business look less credible.
            Webmint redesigns websites with modern layouts, better
            content structure and responsive user experiences.
          </p>

          <p>
            We look at your existing website and identify opportunities
            to improve its visual presentation, usability and overall
            digital experience.
          </p>

          <h2>Our Redesign Approach</h2>

          <div className="seo-list">
            <div>Modern UI Design</div>
            <div>Responsive Layouts</div>
            <div>Better Content Structure</div>
            <div>Improved User Experience</div>
            <div>Clear Calls To Action</div>
            <div>Performance Improvements</div>
          </div>

          <h2>Give Your Website a New Direction</h2>

          <p>
            Whether your website needs a complete transformation or
            simply needs a modern visual update, Webmint can help create
            a cleaner and more professional online presence.
          </p>

          <Link to="/#contact" className="seo-text-link">
            Redesign Your Website ↗
          </Link>
        </section>
      </main>

      <footer className="seo-footer">
        © {new Date().getFullYear()} Webmint — Website Redesign.
      </footer>
    </div>
  );
}

export default WebsiteRedesign;
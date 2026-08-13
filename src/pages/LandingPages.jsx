import { Link } from "react-router-dom";

function LandingPages() {
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
          <span className="seo-label">LANDING PAGES / 03</span>

          <h1>
            Landing Pages
            <br />
            Built to <em>Convert.</em>
          </h1>

          <p>
            Focused landing pages designed for campaigns, services,
            products and lead generation.
          </p>

          <Link to="/#contact" className="seo-cta">
            START A PROJECT ↗
          </Link>
        </section>

        <section className="seo-content">
          <h2>Landing Page Development</h2>

          <p>
            A landing page should have one clear purpose. Webmint creates
            focused landing pages that communicate your offer quickly
            and guide visitors toward taking action.
          </p>

          <p>
            From advertising campaigns to individual services and
            products, we create responsive landing pages that work
            across mobile, tablet and desktop devices.
          </p>

          <h2>Landing Pages For</h2>

          <div className="seo-list">
            <div>Lead Generation</div>
            <div>Marketing Campaigns</div>
            <div>Product Launches</div>
            <div>Service Promotions</div>
            <div>Business Campaigns</div>
            <div>Event Promotions</div>
          </div>

          <h2>Focused User Experience</h2>

          <p>
            We combine strong visual hierarchy, concise content,
            responsive design and clear calls to action to create
            landing pages that are easy for visitors to understand.
          </p>

          <Link to="/#contact" className="seo-text-link">
            Build Your Landing Page ↗
          </Link>
        </section>
      </main>

      <footer className="seo-footer">
        © {new Date().getFullYear()} Webmint — Landing Page Development.
      </footer>
    </div>
  );
}

export default LandingPages;
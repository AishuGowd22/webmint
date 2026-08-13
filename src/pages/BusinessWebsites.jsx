import { Link } from "react-router-dom";

function BusinessWebsites() {
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
          <span className="seo-label">BUSINESS WEBSITES / 02</span>

          <h1>
            Professional Business
            <br />
            <em>Websites.</em>
          </h1>

          <p>
            Build credibility and create a strong online presence with a
            professional business website designed around your brand.
          </p>

          <Link to="/#contact" className="seo-cta">
            START A PROJECT ↗
          </Link>
        </section>

        <section className="seo-content">
          <h2>Business Website Development</h2>

          <p>
            A professional website helps customers understand what your
            business does, discover your services and get in touch with
            you. Webmint creates business websites with clear structure,
            modern design and responsive layouts.
          </p>

          <p>
            Whether you are launching a new business or upgrading an
            existing online presence, we create websites that present
            your business professionally.
          </p>

          <h2>Business Websites We Create</h2>

          <div className="seo-list">
            <div>Corporate Websites</div>
            <div>Small Business Websites</div>
            <div>Startup Websites</div>
            <div>Service Business Websites</div>
            <div>Real Estate Websites</div>
            <div>Restaurant Websites</div>
            <div>Travel Websites</div>
            <div>Professional Portfolios</div>
          </div>

          <h2>Designed For Your Customers</h2>

          <p>
            Every website is designed to make important information easy
            to find. We focus on responsive layouts, strong calls to
            action, clear service sections and easy contact options.
          </p>

          <Link to="/#contact" className="seo-text-link">
            Create Your Business Website ↗
          </Link>
        </section>
      </main>

      <footer className="seo-footer">
        © {new Date().getFullYear()} Webmint — Professional Business
        Websites.
      </footer>
    </div>
  );
}

export default BusinessWebsites;
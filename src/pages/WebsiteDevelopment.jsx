import { Link } from "react-router-dom";
import "../App.css";

function WebsiteDevelopment() {
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
          <span className="seo-label">WEB DEVELOPMENT / 01</span>

          <h1>
            Website Development
            <br />
            Company in <em>Bangalore.</em>
          </h1>

          <p>
            Webmint creates modern, responsive and professional websites
            for businesses that want to build trust and grow their online
            presence.
          </p>

          <Link to="/#contact" className="seo-cta">
            START A PROJECT ↗
          </Link>
        </section>

        <section className="seo-content">
          <h2>Professional Website Development</h2>

          <p>
            Your website is often the first place customers interact with
            your business. Webmint designs and develops websites that
            communicate your brand clearly and create a professional
            digital experience.
          </p>

          <p>
            We build responsive websites that work across desktop, tablet
            and mobile devices. Every website is structured around your
            business goals, services and customers.
          </p>

          <h2>What We Build</h2>

          <div className="seo-list">
            <div>Business Websites</div>
            <div>Custom Websites</div>
            <div>Responsive Websites</div>
            <div>Landing Pages</div>
            <div>Portfolio Websites</div>
            <div>Real Estate Websites</div>
            <div>Restaurant Websites</div>
            <div>Travel Websites</div>
          </div>

          <h2>Why Choose Webmint?</h2>

          <p>
            We focus on clean design, responsive development, clear content
            structure and practical business requirements. Our goal is to
            create websites that look professional while making it easy for
            customers to understand your business and contact you.
          </p>

          <Link to="/#contact" className="seo-text-link">
            Build Your Website With Webmint ↗
          </Link>
        </section>
      </main>

      <footer className="seo-footer">
        © {new Date().getFullYear()} Webmint — Website Development Company
        in Bangalore.
      </footer>
    </div>
  );
}

export default WebsiteDevelopment;
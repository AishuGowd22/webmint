import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function BusinessWebsites() {
  useEffect(() => {
    document.title =
      "Business Website Development in Bangalore | Webmint";

    const description =
      "Webmint creates professional business websites in Bangalore for companies, startups and local businesses looking to build credibility and grow online.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://www.webmintweb.com/business-website-development"
    );
  }, []);

  return (
    <div className="seo-page">
      {/* NAVIGATION */}

      <header className="seo-page-nav">
        <Link to="/" className="seo-logo">
          WEBMINT<span>®</span>
        </Link>

        <Link to="/#contact" className="seo-nav-button">
          Let's Talk ↗
        </Link>
      </header>

      <main>
        {/* HERO */}

        <section className="seo-hero">
          <span className="seo-label">
            BUSINESS WEBSITES / 02
          </span>

          <h1>
            Business Website
            <br />
            Development in <em>Bangalore.</em>
          </h1>

          <p>
            Webmint creates professional business websites in
            Bangalore that help companies, startups and local
            businesses build credibility, showcase their services
            and grow their online presence.
          </p>

          <Link to="/#contact" className="seo-cta">
            START A PROJECT ↗
          </Link>
        </section>

        {/* MAIN CONTENT */}

        <section className="seo-content">
          <h2>
            Professional Business Website Development
          </h2>

          <p>
            A professional business website gives customers a
            clear way to understand your company, explore your
            services and get in touch with you. Webmint designs
            and develops business websites with modern visuals,
            clear structure and responsive layouts.
          </p>

          <p>
            Whether you are launching a new company, growing an
            existing business or upgrading an outdated website,
            we create digital experiences designed around your
            brand and business goals.
          </p>

          <p>
            Our business websites are built to work across
            desktop, tablet and mobile devices, giving your
            customers a consistent experience wherever they visit
            your website.
          </p>

          {/* TYPES OF BUSINESS WEBSITES */}

          <h2>
            Business Websites We Create
          </h2>

          <div className="seo-list">
            <div>
              <strong>Corporate Websites</strong>
              <span>
                Professional websites for established companies
                and organizations.
              </span>
            </div>

            <div>
              <strong>Small Business Websites</strong>
              <span>
                Modern websites that help local businesses build
                credibility online.
              </span>
            </div>

            <div>
              <strong>Startup Websites</strong>
              <span>
                Strong digital foundations for new businesses and
                growing startups.
              </span>
            </div>

            <div>
              <strong>Service Business Websites</strong>
              <span>
                Clear service-focused websites designed to help
                customers understand what you offer.
              </span>
            </div>

            <div>
              <strong>Real Estate Websites</strong>
              <span>
                Property websites for builders, developers and
                real-estate businesses.
              </span>
            </div>

            <div>
              <strong>Restaurant Websites</strong>
              <span>
                Modern websites for restaurants, cafes and food
                brands.
              </span>
            </div>

            <div>
              <strong>Travel Websites</strong>
              <span>
                Professional websites for travel agencies and
                tourism businesses.
              </span>
            </div>

            <div>
              <strong>Professional Portfolio Websites</strong>
              <span>
                Personal and professional websites that showcase
                your work and expertise.
              </span>
            </div>
          </div>

          {/* FEATURES */}

          <h2>
            What Makes a Good Business Website?
          </h2>

          <p>
            A business website should make it easy for visitors
            to understand who you are, what you offer and how
            they can contact you. Webmint focuses on clear
            navigation, strong calls to action and content
            structure that keeps important information easy to
            find.
          </p>

          <div className="seo-list">
            <div>
              <strong>Clear Business Information</strong>
              <span>
                Present your company, services and value clearly.
              </span>
            </div>

            <div>
              <strong>Responsive Design</strong>
              <span>
                A consistent experience across mobile, tablet and
                desktop devices.
              </span>
            </div>

            <div>
              <strong>Strong Calls to Action</strong>
              <span>
                Make it easy for potential customers to contact
                your business.
              </span>
            </div>

            <div>
              <strong>Professional Visual Design</strong>
              <span>
                Build trust with a modern and credible digital
                presence.
              </span>
            </div>
          </div>

          {/* WHY WEBMINT */}

          <h2>
            Why Choose Webmint for Your Business Website?
          </h2>

          <p>
            Webmint combines modern design with practical web
            development to create websites that represent
            businesses professionally. We focus on responsive
            layouts, clean interfaces, useful content structure
            and easy customer communication.
          </p>

          <p>
            Our goal is to create more than just an attractive
            website. We want your website to become a useful
            digital touchpoint where potential customers can
            understand your business and take the next step.
          </p>

          {/* RELATED SERVICES */}

          <h2>
            Explore Our Website Services
          </h2>

          <div className="seo-service-links">
            <Link to="/website-development">
              Website Development in Bangalore ↗
            </Link>

            <Link to="/landing-page-design">
              Landing Page Design in Bangalore ↗
            </Link>

            <Link to="/website-redesign">
              Website Redesign in Bangalore ↗
            </Link>
          </div>

          {/* FINAL CTA */}

          <div className="seo-final-cta">
            <h2>
              Ready for a Professional Business Website?
            </h2>

            <p>
              Tell Webmint about your business and let's create a
              modern website that helps you build credibility,
              reach customers and grow online.
            </p>

            <Link
              to="/#contact"
              className="seo-cta"
            >
              CREATE YOUR BUSINESS WEBSITE ↗
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="seo-footer">
        © {new Date().getFullYear()} Webmint — Business Website
        Development in Bangalore.
      </footer>
    </div>
  );
}

export default BusinessWebsites;
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function WebsiteDevelopment() {
  useEffect(() => {
    document.title =
      "Website Development Company in Bangalore | Webmint";

    const description =
      "Webmint is a website development company in Bangalore creating modern, responsive and professional websites for businesses, startups and brands.";

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
      "https://www.webmintweb.com/website-development"
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
            WEB DEVELOPMENT / 01
          </span>

          <h1>
            Website Development
            <br />
            Company in <em>Bangalore.</em>
          </h1>

          <p>
            Webmint is a website development company in Bangalore
            creating modern, responsive and professional websites
            for businesses, startups and brands that want to build
            trust and grow online.
          </p>

          <Link to="/#contact" className="seo-cta">
            START A PROJECT ↗
          </Link>
        </section>

        {/* MAIN CONTENT */}

        <section className="seo-content">
          <h2>
            Professional Website Development in Bangalore
          </h2>

          <p>
            A professional website is an important part of your
            business's digital presence. Webmint designs and
            develops modern websites that clearly communicate your
            brand, services and value to your customers.
          </p>

          <p>
            We build responsive websites that work smoothly across
            desktop computers, tablets and mobile devices. Each
            website is planned around your business goals,
            customers and requirements.
          </p>

          <p>
            Whether you are starting a new business, launching a
            service, building your brand or redesigning an existing
            website, Webmint can create a digital experience that
            represents your business professionally.
          </p>

          {/* SERVICES */}

          <h2>
            Website Development Services
          </h2>

          <div className="seo-list">
            <div>
              <strong>Business Websites</strong>
              <span>
                Professional websites for companies and local
                businesses.
              </span>
            </div>

            <div>
              <strong>Custom Websites</strong>
              <span>
                Websites designed around your specific business
                requirements.
              </span>
            </div>

            <div>
              <strong>Responsive Websites</strong>
              <span>
                Mobile-friendly websites for phones, tablets and
                desktop devices.
              </span>
            </div>

            <div>
              <strong>Landing Pages</strong>
              <span>
                Focused pages for services, campaigns and lead
                generation.
              </span>
            </div>

            <div>
              <strong>Portfolio Websites</strong>
              <span>
                Professional websites for individuals, creators and
                businesses.
              </span>
            </div>

            <div>
              <strong>Real Estate Websites</strong>
              <span>
                Property and real-estate websites designed to
                showcase projects and generate enquiries.
              </span>
            </div>

            <div>
              <strong>Restaurant Websites</strong>
              <span>
                Modern websites for restaurants, cafes and food
                businesses.
              </span>
            </div>

            <div>
              <strong>Travel Websites</strong>
              <span>
                Travel websites for agencies, destinations and
                tourism businesses.
              </span>
            </div>
          </div>

          {/* WHY WEBMINT */}

          <h2>
            Why Choose Webmint?
          </h2>

          <p>
            Webmint focuses on clean visual design, responsive
            development, clear content structure and practical
            business requirements. We don't build websites simply
            to look good — we build them to communicate your
            business clearly and make it easier for customers to
            take action.
          </p>

          <p>
            Our websites are designed with performance, usability
            and search-engine-friendly structure in mind. This
            gives your business a strong foundation for building
            visibility online.
          </p>

          {/* PROCESS */}

          <h2>
            Our Website Development Process
          </h2>

          <div className="seo-list">
            <div>
              <strong>01 — Understand</strong>
              <span>
                We understand your business, audience and website
                requirements.
              </span>
            </div>

            <div>
              <strong>02 — Design</strong>
              <span>
                We create a visual direction that fits your brand
                and business.
              </span>
            </div>

            <div>
              <strong>03 — Develop</strong>
              <span>
                We turn the approved direction into a responsive
                working website.
              </span>
            </div>

            <div>
              <strong>04 — Launch</strong>
              <span>
                Your website is deployed and prepared for your
                customers.
              </span>
            </div>
          </div>

          {/* INTERNAL SEO LINKS */}

          <h2>
            Explore Our Website Services
          </h2>

          <div className="seo-related-links">
            <Link to="/business-website-development">
              Business Website Development in Bangalore ↗
            </Link>

            <Link to="/landing-page-design">
              Landing Page Design in Bangalore ↗
            </Link>

            <Link to="/website-redesign">
              Website Redesign in Bangalore ↗
            </Link>
          </div>

          {/* CTA */}

          <div className="seo-final-cta">
            <h2>
              Ready to Build Your Website?
            </h2>

            <p>
              Tell Webmint about your business and let's create a
              professional website that helps you build a stronger
              online presence.
            </p>

            <Link
              to="/#contact"
              className="seo-cta"
            >
              BUILD YOUR WEBSITE WITH WEBMINT ↗
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="seo-footer">
        © {new Date().getFullYear()} Webmint — Website Development
        Company in Bangalore.
      </footer>
    </div>
  );
}

export default WebsiteDevelopment;
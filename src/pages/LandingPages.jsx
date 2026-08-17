import { useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPages() {
  useEffect(() => {
    document.title =
      "Landing Page Design & Development in Bangalore | Webmint";

    const description =
      "Webmint creates high-converting landing pages in Bangalore for marketing campaigns, services, products, lead generation and business promotions.";

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
      "https://www.webmintweb.com/landing-page-design"
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
            LANDING PAGES / 03
          </span>

          <h1>
            Landing Page Design
            <br />
            & Development in <em>Bangalore.</em>
          </h1>

          <p>
            Webmint creates focused landing pages in Bangalore
            for marketing campaigns, services, products and lead
            generation, helping businesses guide visitors toward
            clear actions.
          </p>

          <Link to="/#contact" className="seo-cta">
            START A PROJECT ↗
          </Link>
        </section>

        {/* MAIN CONTENT */}

        <section className="seo-content">
          <h2>
            Landing Page Design & Development
          </h2>

          <p>
            A landing page should have one clear purpose. Whether
            you want visitors to submit an enquiry, contact your
            business, register for an event or learn about a
            specific service, the page should guide them toward
            that action.
          </p>

          <p>
            Webmint designs and develops responsive landing pages
            with clear messaging, strong visual hierarchy and
            prominent calls to action. Every page is designed to
            work across mobile, tablet and desktop devices.
          </p>

          <p>
            Our landing pages can be used for advertising
            campaigns, service promotions, product launches,
            local business campaigns and other digital marketing
            activities.
          </p>

          {/* LANDING PAGE USE CASES */}

          <h2>
            Landing Pages For
          </h2>

          <div className="seo-list">
            <div>
              <strong>Lead Generation</strong>
              <span>
                Landing pages designed to encourage enquiries,
                registrations and customer responses.
              </span>
            </div>

            <div>
              <strong>Marketing Campaigns</strong>
              <span>
                Focused pages created around specific advertising
                and marketing campaigns.
              </span>
            </div>

            <div>
              <strong>Product Launches</strong>
              <span>
                Showcase a new product with focused information
                and a clear next step.
              </span>
            </div>

            <div>
              <strong>Service Promotions</strong>
              <span>
                Highlight a particular service without distracting
                visitors with unnecessary information.
              </span>
            </div>

            <div>
              <strong>Business Campaigns</strong>
              <span>
                Campaign-specific pages for businesses looking to
                promote a particular offer.
              </span>
            </div>

            <div>
              <strong>Event Promotions</strong>
              <span>
                Dedicated pages for events, registrations and
                promotional activities.
              </span>
            </div>
          </div>

          {/* KEY FEATURES */}

          <h2>
            What Makes an Effective Landing Page?
          </h2>

          <p>
            An effective landing page removes distractions and
            makes the desired action obvious. Webmint focuses on
            the structure and experience of each page so visitors
            can quickly understand the offer and decide what to
            do next.
          </p>

          <div className="seo-list">
            <div>
              <strong>Clear Message</strong>
              <span>
                Visitors should immediately understand what is
                being offered.
              </span>
            </div>

            <div>
              <strong>Strong Call to Action</strong>
              <span>
                Important actions such as enquiries or
                registrations are easy to find.
              </span>
            </div>

            <div>
              <strong>Responsive Design</strong>
              <span>
                The landing page works smoothly on mobile, tablet
                and desktop screens.
              </span>
            </div>

            <div>
              <strong>Focused Structure</strong>
              <span>
                Content is organized around one specific campaign,
                product or service.
              </span>
            </div>
          </div>

          {/* WHY WEBMINT */}

          <h2>
            Landing Page Development in Bangalore
          </h2>

          <p>
            Webmint works with businesses that need focused
            landing pages for their digital campaigns. We combine
            modern design, responsive development and practical
            business requirements to create pages that communicate
            an offer clearly.
          </p>

          <p>
            Whether you are running a local marketing campaign,
            promoting a service or launching something new, a
            dedicated landing page can give your campaign a
            focused destination for visitors.
          </p>

          {/* RELATED SERVICES */}

          <h2>
            Explore Our Website Services
          </h2>

          <div className="seo-service-links">
            <Link to="/website-development">
              Website Development in Bangalore ↗
            </Link>

            <Link to="/business-website-development">
              Business Website Development in Bangalore ↗
            </Link>

            <Link to="/website-redesign">
              Website Redesign in Bangalore ↗
            </Link>
          </div>

          {/* FINAL CTA */}

          <div className="seo-final-cta">
            <h2>
              Need a Landing Page for Your Campaign?
            </h2>

            <p>
              Tell Webmint about your campaign, product or
              service and let's create a focused landing page
              designed around your business goal.
            </p>

            <Link
              to="/#contact"
              className="seo-cta"
            >
              BUILD YOUR LANDING PAGE ↗
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="seo-footer">
        © {new Date().getFullYear()} Webmint — Landing Page
        Design & Development in Bangalore.
      </footer>
    </div>
  );
}

export default LandingPages;
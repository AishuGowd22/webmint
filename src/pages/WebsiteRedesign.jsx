import { useEffect } from "react";
import { Link } from "react-router-dom";

function WebsiteRedesign() {
  useEffect(() => {
    document.title =
      "Website Redesign Company in Bangalore | Webmint";

    const description =
      "Webmint provides website redesign services in Bangalore to transform outdated websites into modern, responsive and professional digital experiences.";

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
      "https://www.webmintweb.com/website-redesign"
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
            WEBSITE REDESIGN / 04
          </span>

          <h1>
            Website Redesign
            <br />
            Company in <em>Bangalore.</em>
          </h1>

          <p>
            Webmint redesigns outdated websites into modern,
            responsive and professional digital experiences that
            help businesses create a stronger online presence.
          </p>

          <Link to="/#contact" className="seo-cta">
            START A PROJECT ↗
          </Link>
        </section>

        {/* MAIN CONTENT */}

        <section className="seo-content">
          <h2>
            Professional Website Redesign in Bangalore
          </h2>

          <p>
            Your website represents your business online. If your
            website looks outdated, is difficult to use or does
            not work properly on mobile devices, it may be time
            for a redesign.
          </p>

          <p>
            Webmint redesigns existing websites with modern
            layouts, improved content structure, responsive
            interfaces and clearer customer journeys.
          </p>

          <p>
            We look at your existing website and identify
            opportunities to improve its visual presentation,
            usability, navigation and overall digital experience.
          </p>

          {/* REDESIGN SERVICES */}

          <h2>
            Our Website Redesign Services
          </h2>

          <div className="seo-list">
            <div>
              <strong>Modern UI Design</strong>
              <span>
                Refresh the visual appearance of your website
                with a modern interface.
              </span>
            </div>

            <div>
              <strong>Responsive Layouts</strong>
              <span>
                Improve the experience across mobile, tablet and
                desktop devices.
              </span>
            </div>

            <div>
              <strong>Better Content Structure</strong>
              <span>
                Organize important business information so it is
                easier for visitors to understand.
              </span>
            </div>

            <div>
              <strong>Improved User Experience</strong>
              <span>
                Make navigation and interaction simpler and more
                intuitive.
              </span>
            </div>

            <div>
              <strong>Clear Calls to Action</strong>
              <span>
                Help visitors understand what action they should
                take next.
              </span>
            </div>

            <div>
              <strong>Performance Improvements</strong>
              <span>
                Improve the overall experience and usability of
                your website.
              </span>
            </div>
          </div>

          {/* WHEN TO REDESIGN */}

          <h2>
            When Should You Redesign Your Website?
          </h2>

          <p>
            A redesign can be useful when your website no longer
            represents your business, looks outdated or provides
            a poor experience for visitors.
          </p>

          <div className="seo-list">
            <div>
              <strong>Outdated Design</strong>
              <span>
                Your website no longer reflects the quality or
                style of your business.
              </span>
            </div>

            <div>
              <strong>Poor Mobile Experience</strong>
              <span>
                Customers struggle to use your website on phones
                and tablets.
              </span>
            </div>

            <div>
              <strong>Confusing Navigation</strong>
              <span>
                Visitors have difficulty finding important
                information.
              </span>
            </div>

            <div>
              <strong>Weak Customer Journey</strong>
              <span>
                Your website does not clearly guide visitors
                toward contacting your business.
              </span>
            </div>
          </div>

          {/* REDESIGN APPROACH */}

          <h2>
            Our Website Redesign Approach
          </h2>

          <p>
            Webmint takes a practical approach to redesigning
            websites. We first understand what is currently
            working and what needs improvement before creating a
            new visual and structural direction.
          </p>

          <div className="seo-list">
            <div>
              <strong>01 — Review</strong>
              <span>
                We examine your existing website and identify
                areas for improvement.
              </span>
            </div>

            <div>
              <strong>02 — Plan</strong>
              <span>
                We define a cleaner structure and visual direction
                for the redesigned website.
              </span>
            </div>

            <div>
              <strong>03 — Redesign</strong>
              <span>
                We create the new responsive interface and improve
                the overall user experience.
              </span>
            </div>

            <div>
              <strong>04 — Launch</strong>
              <span>
                The redesigned website is prepared and launched
                for your customers.
              </span>
            </div>
          </div>

          {/* WHY WEBMINT */}

          <h2>
            Why Choose Webmint for Website Redesign?
          </h2>

          <p>
            Webmint combines modern design with practical web
            development to help businesses improve their digital
            presence. We focus on clean interfaces, responsive
            layouts, clear content and simple customer journeys.
          </p>

          <p>
            The goal of a redesign is not simply to make a website
            look different. It should make the website more useful,
            credible and easier for customers to navigate.
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

            <Link to="/landing-page-design">
              Landing Page Design in Bangalore ↗
            </Link>
          </div>

          {/* FINAL CTA */}

          <div className="seo-final-cta">
            <h2>
              Ready to Redesign Your Website?
            </h2>

            <p>
              Tell Webmint about your existing website and let's
              create a modern digital experience that better
              represents your business.
            </p>

            <Link
              to="/#contact"
              className="seo-cta"
            >
              REDESIGN YOUR WEBSITE ↗
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="seo-footer">
        © {new Date().getFullYear()} Webmint — Website Redesign
        Company in Bangalore.
      </footer>
    </div>
  );
}

export default WebsiteRedesign;
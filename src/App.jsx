import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Iron Vault Fitness",
    category: "FITNESS / BUSINESS WEBSITE",
    description:
      "A bold and modern fitness website designed to present the gym, training programs, facilities and membership experience.",
    url: "https://ironvault-fitness-five.vercel.app/",
  },
  {
    number: "02",
    title: "Wanderly Travels",
    category: "TRAVEL / TOURISM WEBSITE",
    description:
      "A travel-focused website created to showcase destinations, travel experiences and services through a clean visual interface.",
    url: "https://wanderly-travels.vercel.app/",
  },
  {
    number: "03",
    title: "Brew & Bloom",
    category: "RESTAURANT / BRAND WEBSITE",
    description:
      "A stylish restaurant website designed to create a strong brand presence and showcase the dining experience.",
    url: "https://brew-and-bloom-two.vercel.app/",
  },
  {
    number: "04",
    title: "AG Builders",
    category: "REAL ESTATE / BUSINESS WEBSITE",
    description:
      "A professional real-estate website created to showcase AG Builders, their projects, property offerings and business presence.",
    url: "https://ag-builders.vercel.app/",
  },
];

const services = [
  {
    number: "01",
    title: "Website Development",
    shortTitle: "CUSTOM WEBSITES",
    icon: "↗",
    description:
      "Custom websites designed and developed around your business, brand and customers.",
    details: [
      "Custom website design",
      "Responsive development",
      "Mobile-friendly layouts",
      "Business-focused structure",
      "WhatsApp integration",
      "Domain deployment",
    ],
  },
  {
    number: "02",
    title: "Business Websites",
    shortTitle: "BUSINESS",
    icon: "◇",
    description:
      "Professional websites that build trust, explain your services and create a strong online presence.",
    details: [
      "Professional business design",
      "About and services sections",
      "Contact section",
      "Lead generation",
      "WhatsApp integration",
      "Live website deployment",
    ],
  },
  {
    number: "03",
    title: "Landing Pages",
    shortTitle: "CAMPAIGNS",
    icon: "×",
    description:
      "Focused landing pages created for campaigns, products, services and lead generation.",
    details: [
      "Campaign landing pages",
      "Strong call-to-action sections",
      "Lead generation",
      "Mobile responsive design",
      "Fast-loading structure",
      "Deployment and support",
    ],
  },
  {
    number: "04",
    title: "Website Redesign",
    shortTitle: "REDESIGN",
    icon: "↻",
    description:
      "Transform an outdated website into a modern, responsive and professional digital experience.",
    details: [
      "Modern UI redesign",
      "Better user experience",
      "Responsive layouts",
      "Improved content structure",
      "Modern animations",
      "Performance improvements",
    ],
  },
];

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const phoneNumber = "9036137161";
  const whatsappNumber = "9036137161";

  const openWhatsApp = () => {
    const message =
      "Hello Webmint! I am interested in getting a website for my business.";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const callNumber = () => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  const scrollToSection = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="site">

      {/* =========================
          NAVIGATION
      ========================== */}

      <header className="navbar">
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          WEBMINT<span>®</span>
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("work")}>
            Work
          </button>

          <button onClick={() => scrollToSection("services")}>
            Services
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button
            className="nav-contact"
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk ↗
          </button>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </header>

      <main>

        {/* =========================
            HERO
        ========================== */}

        <section id="home" className="hero">
          <div className="hero-small">
            <span>01</span>
            <span>WEB DESIGN & DEVELOPMENT</span>
          </div>

          <div className="hero-content">
            <h1>
              WE BUILD
              <br />
              <span>DIGITAL</span>
              <br />
              PRESENCE.
            </h1>

            <div className="hero-right">
              <p>
                Webmint creates modern websites for businesses
                that want to look professional, build trust and
                grow online.
              </p>

              <button
                className="primary-button"
                onClick={() => scrollToSection("work")}
              >
                Explore Our Work
                <span>↗</span>
              </button>
            </div>
          </div>

          <div className="hero-bottom">
            <div>
              <span className="tiny-label">BASED IN</span>
              <strong>BANGALORE, INDIA</strong>
            </div>

            <div>
              <span className="tiny-label">AVAILABLE FOR</span>
              <strong>NEW PROJECTS</strong>
            </div>

            <div className="hero-scroll">
              SCROLL
              <span>↓</span>
            </div>
          </div>
        </section>

        {/* =========================
            INTRO
        ========================== */}

        <section className="intro">
          <div className="section-label">
            <span>02</span>
            <span>WHAT WE DO</span>
          </div>

          <div className="intro-content">
            <h2>
              Websites that make
              <br />
              <em>businesses</em> look
              <br />
              <strong>better.</strong>
            </h2>

            <p>
              Your website is often the first interaction a customer
              has with your business. We create digital experiences
              that communicate your value clearly and turn visitors
              into customers.
            </p>
          </div>
        </section>

        {/* =========================
            WORK / PROJECTS
        ========================== */}

        <section id="work" className="work-section">
          <div className="section-heading">
            <div>
              <span className="section-number">03</span>
              <h2>Selected Work</h2>
            </div>

            <p>
              A selection of websites we have designed
              and developed for different businesses.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
              >
                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-middle">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <div className="project-footer">
                  <span>LIVE PROJECT</span>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    VIEW WEBSITE ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            SERVICES
        ========================== */}

        <section id="services" className="services-section">
          <div className="section-heading">
            <div>
              <span className="section-number">04</span>
              <h2>Services</h2>
            </div>

            <p>
              Digital experiences designed to help businesses
              look professional, build trust and grow online.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <button
                type="button"
                className={`service-card ${
                  index === 2 ? "service-card-dark" : ""
                }`}
                key={service.number}
                onClick={() => setSelectedService(service)}
              >
                <div className="service-top">
                  <span>{service.number}</span>

                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <div className="service-bottom">
                  <span>{service.shortTitle}</span>

                  <span className="service-arrow">
                    ↗
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* =========================
            ABOUT
        ========================== */}

        <section id="about" className="about-section">
          <div className="section-label">
            <span>05</span>
            <span>ABOUT WEBMINT</span>
          </div>

          <div className="about-grid">
            <h2>
              SMALL TEAM.
              <br />
              BIG DIGITAL
              <br />
              <em>IDEAS.</em>
            </h2>

            <div className="about-text">
              <p className="about-large">
                Webmint is a web development studio focused on
                creating professional digital experiences for
                businesses and brands.
              </p>

              <p>
                From simple business websites to custom landing
                pages and complete digital experiences, we focus
                on clean design, responsive development and
                practical business results.
              </p>

              <p>
                Every project is built with the goal of making
                your business look credible, modern and ready
                for the digital world.
              </p>

              <button
                type="button"
                className="text-button"
                onClick={() => scrollToSection("contact")}
              >
                Work With Us ↗
              </button>
            </div>
          </div>
        </section>

        {/* =========================
            PROCESS
        ========================== */}

        <section className="process-section">
          <div className="section-heading">
            <div>
              <span className="section-number">06</span>
              <h2>Our Process</h2>
            </div>

            <p>
              Simple, transparent and focused on getting
              your website live.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <span>01</span>
              <h3>DISCOVER</h3>
              <p>
                We understand your business, customers,
                goals and website requirements.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>
              <h3>DESIGN</h3>
              <p>
                We create a modern visual direction
                that fits your brand.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>
              <h3>DEVELOP</h3>
              <p>
                We turn the approved design into a
                responsive working website.
              </p>
            </div>

            <div className="process-item">
              <span>04</span>
              <h3>LAUNCH</h3>
              <p>
                Your website goes live and becomes
                ready for your customers.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            CONTACT
        ========================== */}

        <section id="contact" className="contact-section">
          <div className="contact-top">
            <span className="section-number">
              07
            </span>

            <span>
              START A PROJECT
            </span>
          </div>

          <div className="contact-content">
            <h2>
              HAVE A PROJECT
              <br />
              <em>IN MIND?</em>
            </h2>

            <p>
              Tell us what you need. Let's create
              something that makes your business
              stand out online.
            </p>
          </div>

          <div className="contact-actions">
            <button
              type="button"
              className="contact-main-button"
              onClick={openWhatsApp}
            >
              TALK ON WHATSAPP
              <span>↗</span>
            </button>

            <button
              type="button"
              className="contact-phone-button"
              onClick={callNumber}
            >
              CALL +91 {phoneNumber}
            </button>
          </div>

          <div className="contact-details">
            <div>
              <span>PHONE</span>

              <button
                type="button"
                onClick={callNumber}
              >
                +91 {phoneNumber}
              </button>
            </div>

            <div>
              <span>WHATSAPP</span>

              <button
                type="button"
                onClick={openWhatsApp}
              >
                CHAT WITH US ↗
              </button>
            </div>

            <div>
              <span>LOCATION</span>

              <strong>
                BANGALORE, INDIA
              </strong>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="footer">
        <div className="footer-logo">
          WEBMINT<span>®</span>
        </div>

        <div className="footer-middle">
          Websites built for businesses.
        </div>

        <div className="footer-right">
          © {new Date().getFullYear()} WEBMINT
        </div>
      </footer>

      {/* =========================
          SERVICE MODAL
      ========================== */}

      {selectedService && (
        <div
          className="service-modal-overlay"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="service-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close service details"
            >
              ×
            </button>

            <span className="modal-number">
              {selectedService.number} / SERVICE
            </span>

            <h2>
              {selectedService.title}
            </h2>

            <p>
              {selectedService.description}
            </p>

            <div className="modal-list">
              {selectedService.details.map((detail) => (
                <div key={detail}>
                  <span>✓</span>
                  {detail}
                </div>
              ))}
            </div>

            <button
              type="button"
              className="modal-cta"
              onClick={() => {
                setSelectedService(null);

                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }, 100);
              }}
            >
              START A PROJECT
              <span>↗</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
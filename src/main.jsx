import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import WebsiteDevelopment from "./pages/WebsiteDevelopment.jsx";
import BusinessWebsites from "./pages/BusinessWebsites.jsx";
import LandingPages from "./pages/LandingPages.jsx";
import WebsiteRedesign from "./pages/WebsiteRedesign.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main Website */}
        <Route path="/" element={<App />} />

        {/* SEO Service Pages */}
        <Route
          path="/website-development"
          element={<WebsiteDevelopment />}
        />

        <Route
          path="/business-websites"
          element={<BusinessWebsites />}
        />

        <Route
          path="/landing-pages"
          element={<LandingPages />}
        />

        <Route
          path="/website-redesign"
          element={<WebsiteRedesign />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
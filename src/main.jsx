import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import WebsiteDevelopment from "./pages/WebsiteDevelopment.jsx";
import BusinessWebsites from "./pages/BusinessWebsites.jsx";
import LandingPages from "./pages/LandingPages.jsx";
import WebsiteRedesign from "./pages/WebsiteRedesign.jsx";

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

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

      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {router}
  </StrictMode>
);
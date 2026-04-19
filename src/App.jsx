import React, { useRef } from "react";
import { ContactBanner, Footer, Header, WhatsAppFloat } from "./components";
import { Home } from "./pages";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  const contactUsRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);

  const handleContactUsClick = () => {
    contactUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleServicesClick = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutUsClick = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <main className="app_main">
        <Router>
          <div className="app_shell">
            <Header
              handleContactUsClick={handleContactUsClick}
              handleAboutUsClick={handleAboutUsClick}
              handleServicesClick={handleServicesClick}
            />
            <ContactBanner />
            <Routes>
              <Route
                path="/"
                element={
                  <Home servicesRef={servicesRef} aboutUsRef={aboutUsRef} />
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </main>
      <Footer contactUsRef={contactUsRef} />
      <WhatsAppFloat />
    </div>
  );
}

export { App };

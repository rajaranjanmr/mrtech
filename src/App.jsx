import React, { useRef } from "react";
import { Footer, Header } from "./components";
import { Home } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      <main className="">
        <Router>
          <Header
            handleContactUsClick={handleContactUsClick}
            handleAboutUsClick={handleAboutUsClick}
            handleServicesClick={handleServicesClick}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home servicesRef={servicesRef} aboutUsRef={aboutUsRef} />
              }
            />
          </Routes>
        </Router>
      </main>
      <Footer contactUsRef={contactUsRef} />
    </div>
  );
}

export { App };

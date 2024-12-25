import React from "react";
import { Footer, Header, HeroSection, Services } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </div>
  );
}

export { App };

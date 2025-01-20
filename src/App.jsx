import React from "react";
import { Footer, Header } from "./components";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export { App };

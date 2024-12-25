import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <p className="hero_pos_abs_shade"></p>
      <div className="hero-content hero_pos_abs">
        <h1 className="hero_h1">Empowering Your Business</h1>
        <p className=" hero_para">
          Transforming strategies, optimizing processes, and delivering results.
        </p>
      </div>
    </section>
  );
};

export { HeroSection };

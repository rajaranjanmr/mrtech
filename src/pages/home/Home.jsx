import React from "react";
import { AboutUs, HeroSection, Services } from "../../components";
import PartnerOne from "../../assets/partner_1.png";
import PartnerTwo from "../../assets/partner_2.png";
import PartnerThree from "../../assets/partner_3.png";
import PartnerFour from "../../assets/partner_4.png";
import TechOne from "../../assets/tech_1.png";
import TechTwo from "../../assets/tech_2.png";
import TechThree from "../../assets/tech_3.png";
import TechFour from "../../assets/tech_4.png";
import TechFive from "../../assets/tech_5.jpeg";
import TechSix from "../../assets/tech_6.png";
import TechSeven from "../../assets/tech_7.png";
import TechEight from "../../assets/tech_8.png";
import TechNine from "../../assets/tech_9.png";
import TechTen from "../../assets/tech_10.png";
import TechEleven from "../../assets/tech_11.png";
import TechTwell from "../../assets/tech_12.png";
import TechThirteen from "../../assets/tech_13.png";
import TechFourteen from "../../assets/tech_14.png";
import "./PartnerSection.css";
import "./TechnologySection.css";

function Home({ servicesRef, aboutUsRef }) {
  return (
    <>
      <HeroSection />
      <AboutUs aboutUsRef={aboutUsRef} />
      <Services servicesRef={servicesRef} />
      <section className="partner_container">
        <h1 className="partner_h1 text_align_center">Our Partners</h1>
        <div className="partner_img_container">
          <div className="partner_img">
            <img className="image_size" src={PartnerOne} alt="partner_1" />
          </div>
          <div className="partner_img">
            <img className="image_size" src={PartnerTwo} alt="partner_2" />
          </div>
          <div className="partner_img">
            <img className="image_size" src={PartnerThree} alt="partner_3" />
          </div>
          <div className="partner_img">
            <img className="image_size" src={PartnerFour} alt="partner_4" />
          </div>
        </div>
      </section>
      <section className="tech_container">
        <h1 className="tech_h1 text_align_center">Our Technology Stack</h1>
        <div className="tech_img_container">
          <div className="tech_img">
            <img className="tech_image_size" src={TechOne} alt="tech_1" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechTwo} alt="tech_2" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechThree} alt="tech_3" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechFour} alt="tech_4" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechFive} alt="tech_5" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechSix} alt="tech_6" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechSeven} alt="tech_7" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechEight} alt="tech_8" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechNine} alt="tech_9" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechTen} alt="tech_10" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechEleven} alt="tech_11" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechTwell} alt="tech_12" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechThirteen} alt="tech_13" />
          </div>
          <div className="tech_img">
            <img className="tech_image_size" src={TechFourteen} alt="tech_14" />
          </div>
        </div>
      </section>
    </>
  );
}

export { Home };

import aboutUsImage from "../../assets/aboutus_image.png";
import "./AboutUs.css";

const AboutUs = ({ aboutUsRef }) => {
  return (
    <section ref={aboutUsRef} className="about_us">
      <div className="about_us_section">
        <h1>About Us</h1>
        <div className="about_us_p">
          <p>
            Empowering entrepreneurs and businesses to launch, scale, and
            succeed by delivering seamless licensing, compliance, auditing, and
            digital transformation services under one roof.
          </p>
          <p>
            We are the team of Experts of various backgrounds like{" "}
            <strong>CAs, CMAs, CSs, Advocate, Engineers</strong> who are
            available for providing quality services at very nominal rate.
          </p>
          <strong>CORE VALUES:</strong>
          <p>
            1. Trust & Transparency: Build long-term relationships based on
            integrity and open communication.
          </p>
          <p>
            2. Innovation: Leverage cutting-edge technologies to simplify
            processes.
          </p>
          <p>
            3. Customer-Centric Approach: Focus on delivering solutions that
            meet and exceed client expectations.
          </p>
          <p>4. Scalability: Provide services that grow with the business.</p>
        </div>
      </div>
      <div>
        <img className="aboutUsImageCss" src={aboutUsImage} alt="about_us" />
      </div>
    </section>
  );
};

export { AboutUs };

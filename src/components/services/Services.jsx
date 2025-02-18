import React, { useState } from "react";
import { PortalComponent } from "../portal-component/PortalComponent";
import { taxServices } from "../../data/tax_services";
import "./Services.css";

const Services = ({ servicesRef }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <section ref={servicesRef} className="services">
      <h1 className="service_title">Our Services</h1>
      <div className="service-cards">
        {taxServices.map(({ title, servicesList }) => {
          return (
            <div
              className="service-card"
              onClick={() => {
                setIsPortalOpen(true);
              }}
            >
              <h2 className="text_align_center">{title}</h2>
              {servicesList.map((serv) => (
                <p>- {serv}</p>
              ))}
              {/* <h4>No Hidden Cost</h4> */}
              {/* <p>
                Starting at Just{" "}
                <strong className="color_black">Rs.{price}</strong> only
              </p> */}
            </div>
          );
        })}
      </div>
      {isPortalOpen && (
        <PortalComponent>
          <>
            <div className="modal_overlay"></div>
            <div className="modal_content">
              <>
                <p className="mb_1rem">
                  Free online Guide. Give Us Missed Call or WhatsApp Us on +91
                  7717764690.
                </p>
                <div className="text_align_center">
                  <button
                    className="modal_button"
                    onClick={() => setIsPortalOpen(false)}
                  >
                    Back
                  </button>
                </div>
              </>
            </div>
          </>
        </PortalComponent>
      )}
    </section>
  );
};

export { Services };

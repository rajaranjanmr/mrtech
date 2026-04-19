import React from "react";
import { Link } from "react-router-dom";
import { PHONE_DISPLAY, PHONE_TEL_HREF } from "../../config/contact";
import "./ContactBanner.css";

function PhoneIcon() {
  return (
    <svg
      className="contact_banner_icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
  );
}

function ContactBanner() {
  return (
    <aside className="contact_banner" aria-label="Direct phone contact">
      <div className="contact_banner_inner">
        <p className="contact_banner_lead">
          
          Questions? Talk to us directly — we’re one call away.
        </p>
        <a className="contact_banner_phone" href={PHONE_TEL_HREF}>
          <PhoneIcon />
          <span>{PHONE_DISPLAY}</span>
        </a>
        <Link className="contact_banner_alt" to="/#contact">
          Or view contact details
        </Link>
      </div>
    </aside>
  );
}

export { ContactBanner };

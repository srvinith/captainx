import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import langData from "../locales/langData.json";
import footerLogo from "../assets/images/footer-logo.png";

const Footer = ({ language }) => {
  const footer = langData[language].home.footer;

  // Example: define actual social links
  const socialLinks = {
    linkedin: "",
    instagram: "",
    facebook: "",
    twitter: "",
  };

  return (
    <div className="footer">
      <div className="footer-bg"></div>
      <div className="container">
        <div className="row pt-5">
          {/* Left Column */}
          <div className="col-md-5">
            <img src={footerLogo} alt="logo" className="img-fluid" />
            <p className="footer-desc py-3">{footer.desc}</p>

            {/* ✅ Quick Links */}
            <div className="footer-head pt-5">
              <h5>{footer.quickLinksTitle}</h5>
              <ul className="footer-links">
                {footer.quickLinks?.map((link, index) => {
                  const slug = link.key === "home" ? "/" : `/${link.key}`;
                  return (
                    <li key={index}>
                      <Link to={slug}>{link.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>

          {/* ✅ Contact */}
          <div className="col-md-2">
            <div className="footer-head">
              <h5>{footer.contactTitle}</h5>
              <p>
                <a href={`tel:${footer.phonelink}`} className="footer-contact-link">
                  {footer.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${footer.email}`}
                  className="footer-contact-link"
                >
                  {footer.email}
                </a>
              </p>
            </div>
          </div>

          {/* ✅ Location */}
          <div className="col-md-2">
            <div className="footer-head">
              <h5>{footer.locationTitle}</h5>
              <p>{footer.address}</p>
            </div>
          </div>

          {/* ✅ Social Icons */}
          <div className="col-md-3">
            <div className="footer-head">
              <h5>{footer.followTitle}</h5>
              <div className="social-icons">
                <Link to={socialLinks.linkedin}><FaLinkedinIn /></Link>
                <Link to={socialLinks.instagram}><FaInstagram /></Link>
                <Link to={socialLinks.facebook}><FaFacebookF /></Link>
                <Link to={socialLinks.twitter}><FaXTwitter /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

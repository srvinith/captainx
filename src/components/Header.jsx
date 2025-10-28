import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import ArabicLogo from "../assets/images/arabic-logo.png";
import { RiGlobalLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import langData from "../locales/langData.json";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";

const Header = ({ language, setLanguage }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [showProducts, setShowProducts] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // const hoverTimeout = useRef(null);



  const nav = langData[language].navbar;
  // const navLink = langData[language].home.footer.quickLinks;


  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");

  // ✅ Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // ✅ Show/hide navbar logic
      setShowNavbar(currentScroll < lastScrollY || currentScroll < 100);
      setLastScrollY(currentScroll);

      // ✅ Add/remove "scrolled" class for background color
      const navbar = document.querySelector(".custom-navbar");
      if (navbar) {
        if (currentScroll > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  // ✅ Hover delay logic
  // const handleMouseEnter = () => {
  //   clearTimeout(hoverTimeout.current);
  //   setShowProducts(true);
  // };

  // const handleMouseLeave = () => {
  //   hoverTimeout.current = setTimeout(() => {
  //     setShowProducts(false);
  //   }, 200); // 
  // };

  return (
    <div className={`navs ${language === "ar" ? "rtl" : "ltr"}`}>
      <Navbar
        expand="lg"
        className={`custom-navbar fixed-top ${showNavbar ? "visible" : "hidden"}`}
      >
        <Container className="d-flex justify-content-between align-items-center">
          {/* ✅ Logo */}
          <Navbar.Brand as={Link} to="/">
            {language === "ar" ? (
              <img src={ArabicLogo} alt="Arabic Logo" className="logo" />
            ) : (
              <img src={Logo} alt="Logo" className="logo" />
            )}
          </Navbar.Brand>

          {/* ✅ Mobile Menu Icon */}
          <div
            className="menu-icon d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <HiOutlineXMark size={26} color="#000" />
            ) : (
              <HiMenuAlt3 size={30} color="#000" />
            )}
          </div>

          {/* ✅ Desktop Nav Links */}
          {/* ✅ Desktop Nav Links */}
          <Nav className="d-none d-lg-flex mx-auto align-items-center desktop-nav">
            {nav.navlinks.map((item, index) => {
              const slug = item.key === "home" ? "/" : `/${item.key}`;
              const isActive = location.pathname === slug;
              const isDropdown = item.key === "products" || item.key === "company";
              const isOpen = activeDropdown === item.key;

              return (
                <div
                  key={index}
                  className={`nav-item-wrapper ${isActive ? "active" : ""}`}
                  onMouseEnter={() => isDropdown && setActiveDropdown(item.key)}
                  onMouseLeave={() => isDropdown && setActiveDropdown(null)}
                  style={{ position: "relative" }}
                >
                  {/* ✅ Main Nav Link with optional arrow */}
                  <Link
                    to={slug}
                    className={`custom-link d-flex align-items-center ${isActive ? "active" : ""}`}
                  >
                    <span>{item.label}</span>
                    {isDropdown && (
                      <IoIosArrowDown
                        className={`nav-arrow ${isOpen ? "" : ""}`}
                        style={{
                          marginLeft: "5px",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    )}
                  </Link>

                  {/* ✅ Dropdown for Products */}
                  {item.key === "products" && isOpen && (
                    <div
                      className="horizontal-dropdown"
                      onMouseEnter={() => setActiveDropdown("products")}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {nav.productdrop.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={`/products/${subItem.key}`}
                          className="dropdown-item"
                        >
                          {subItem.label}
                          <FiArrowUpRight className="arrow-icons" />
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* ✅ Dropdown for Company */}
                  {item.key === "company" && isOpen && (
                    <div
                      className="horizontal-dropdown"
                      onMouseEnter={() => setActiveDropdown("company")}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {nav.companydrop.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          to={`/company${sub.anchor}`}
                          className="dropdown-item"
                        >
                          {sub.label}
                          <FiArrowUpRight className="arrow-icons" />
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              );
            })}


          </Nav>





          {/* ✅ Lang + Button */}
          <div className="d-none d-lg-flex align-items-center">
            <div
              className="lang ms-3"
              onClick={toggleLanguage}
              style={{ cursor: "pointer" }}
            >
              {language === "en" ? "AR" : "EN"} <RiGlobalLine />
            </div>
            <Link to="/contact" className="text-decoration-none">
              <div className="bt-head ms-3">{nav.letsTalk}</div>
            </Link>
          </div>
        </Container>
      </Navbar>
      <div className={`custom-navbar-border ${activeDropdown ? "visible" : ""}`}></div>



      {/* ✅ Mobile Full Menu */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""} ${language === "ar" ? "rtl" : "ltr"}`}>
        <div className="menu-links">
          {nav.navlinks.map((item, index) => {
            const slug = item.key === "home" ? "/" : `/${item.key}`;
            const isDropdown = item.key === "products" || item.key === "company";
            const isDropdownOpen = activeDropdown === item.key; // use key, not index

            return (
              <div key={index} className="mobile-item">
                <div className="mobile-link-wrapper">
                  <Link
                    to={slug}
                    className={`mobile-link ${location.pathname === slug ? "active" : ""}`}
                    onClick={() => {
                      setActiveDropdown(null);
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown Arrow */}
                  {isDropdown && (
                    <span
                      className="dropdown-arrow"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(prev => prev === item.key ? null : item.key);
                      }}
                    >
                      <IoIosArrowDown />
                    </span>
                  )}
                </div>

                {/* Dropdown Menu */}
                {isDropdown && isDropdownOpen && (
                  <div className="mobile-dropdown">
                    {(item.key === "products" ? nav.productdrop : nav.companydrop).map((sub, i) => (
                      <Link
                        key={i}
                        to={item.key === "products" ? `/products/${sub.key}` : `/company${sub.anchor}`}
                        className="mobile-dropdown-item"
                        onClick={() => {
                          setActiveDropdown(null);
                          setMenuOpen(false);
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* Bottom Language + Contact */}
        <div className="mobile-menu-bottom d-flex justify-content-between align-items-center flex-direction-column mt-4 px-3">
          <div
            className="lang-toggle"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          >
            {language === "en" ? "AR" : "EN"} <RiGlobalLine />
          </div>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <div className="bt-head">{nav.letsTalk}</div>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Header;

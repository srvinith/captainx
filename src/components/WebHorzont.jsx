import React, { useEffect, useRef, useState } from "react";
import "./WebHorzont.css";
import langData from "../locales/langData.json";

const HorizontalScroll = ({ language }) => {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("directors");
  const [showButtons, setShowButtons] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const board = langData[language].company.board;

  const groupSize = 3;
  const groups = [
    board.director.slice(0, groupSize),
    board.director.slice(groupSize, groupSize * 2),
  ];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop scroll animation
  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const section = sectionRef.current;
      const inner = innerRef.current;
      if (!section || !inner) return;

      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const start = sectionTop;
      const end = sectionTop + sectionHeight - viewportHeight;

      if (scrollY >= start && scrollY <= end) {
        inner.style.position = "sticky";
        inner.style.top = "0";
        inner.style.left = section.getBoundingClientRect().left + "px";
        inner.style.width = section.offsetWidth + "px";
        setShowButtons(true);

        const progress = (scrollY - start) / (end - start);
        const groupThreshold = 0.6;
        const groupIndex = progress < groupThreshold ? 0 : 1;
        setActiveTab(groupIndex === 0 ? "directors" : "advisory");
      } else {
        inner.style.position = "relative";
        inner.style.top = "auto";
        inner.style.left = "auto";
        inner.style.width = "100%";
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Mobile auto-slide one by one
  useEffect(() => {
    if (!isMobile) return;
    const activeGroup = activeTab === "directors" ? groups[0] : groups[1];
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeGroup.length);
    }, 2500); // change image every 2.5s
    return () => clearInterval(interval);
  }, [isMobile, activeTab]);

  // Show bottom button only when this section is visible (mobile only)
useEffect(() => {
  if (!isMobile) return;

  const handleScroll = () => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    setShowButtons(inView);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, [isMobile]);


  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const activeGroup = activeTab === "directors" ? groups[0] : groups[1];
  const currentImage = activeGroup[currentIndex];

  return (
    <section
      className="horzont-sec"
      ref={sectionRef}
      style={{ height: isMobile ? "auto" : "200vh" }}
    >
      <div className="horzont-slider-wrapper container" ref={innerRef}>
        <div className="row">
          <div className="col-md-7">
            <h6 className="sec-top-titl">{board.sectoptitle}</h6>
            <h2 className="sec-title">{board.secboardtitle}</h2>
            <p className="sec-p">{board.secboarddesc}</p>
          </div>
        </div>

        {/* Mobile view - single image slider */}
        {isMobile ? (
          <div className="mobile-image-box">
            <img src={currentImage.img} alt={currentImage.name} />
            <div className="member-detailss">
              <h5 className="mem-name">{currentImage.name}</h5>
              <p>{currentImage.role}</p>
            </div>
          </div>
        ) : (
          // Desktop version (grouped)
          <div className="horzont-slider-container">
            {groups.map((group, gIndex) => (
              <div
                key={gIndex}
                className="horzont-slider-group"
                style={{
                  opacity: activeTab === (gIndex === 0 ? "directors" : "advisory") ? 1 : 0,
                  transform:
                    activeTab === (gIndex === 0 ? "directors" : "advisory")
                      ? "translateY(0)"
                      : "translateY(50px)",
                }}
              >
                {group.map((dir, index) => (
                  <div key={index} className="img-slide-box">
                    <img src={dir.img} alt={dir.name} />
                    <div className="member-detailss">
                      <h5 className="mem-name">{dir.name}</h5>
                      <p>{dir.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Bottom buttons (always visible on mobile) */}
        {(showButtons || isMobile) && (
          <div className="tab-button">
            <div className="button-container">
              <p
                className={activeTab === "directors" ? "active" : ""}
                onClick={() => handleTabClick("directors")}
              >
                {board.btn1}
              </p>
              <p
                className={activeTab === "advisory" ? "active" : ""}
                onClick={() => handleTabClick("advisory")}
              >
                {board.btn2}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HorizontalScroll;

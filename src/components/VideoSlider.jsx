import React, { useRef, useState, useEffect } from "react";
import "./VideoSlider.css";
import { GoArrowRight } from "react-icons/go";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import langData from "../locales/langData.json";
import { Link } from "react-router-dom";

const VideoSlider = ({ language = "en" }) => {
  const slides = langData[language].home.videoSlider.slides;
  const seeMore = langData[language].home.videoSlider.seeMore;
  const viewAll = langData[language].home.videoSlider.viewAll;

  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    const slider = sliderRef.current;
    const slideWidth = slider.offsetWidth * 0.8;
    const isRTL = language === "ar";

    slider.scrollTo({
      left: isRTL ? -(slideWidth * index) : slideWidth * index,
      behavior: "smooth",
    });
    setActiveSlide(index);
  };

  const scrollSlide = (direction) => {
    const slider = sliderRef.current;
    const slideWidth = slider.offsetWidth * 0.8;
    let newIndex = activeSlide + direction;

    if (newIndex < 0) newIndex = 0;
    if (newIndex >= slides.length) newIndex = slides.length - 1;

    const isRTL = language === "ar";
    slider.scrollTo({
      left: isRTL ? -(slideWidth * newIndex) : slideWidth * newIndex,
      behavior: "smooth",
    });
    setActiveSlide(newIndex);
  };

  // Update active dot on scroll
  useEffect(() => {
    const slider = sliderRef.current;
    const isRTL = language === "ar";

    const handleScroll = () => {
      const slideWidth = slider.offsetWidth * 0.8;
      const scrollLeft = isRTL ? -slider.scrollLeft : slider.scrollLeft;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setActiveSlide(newIndex);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [language]);

  return (
    <div className="container my-3 position-relative">
      {/* Left Arrow */}
      <button className="slider-arrow left" onClick={() => scrollSlide(-1)}>
        <FiChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button className="slider-arrow right" onClick={() => scrollSlide(1)}>
        <FiChevronRight size={30} />
      </button>

      <div className="slider-card" ref={sliderRef}>
        {slides.map((slide, i) => (
          <div className="slide-card" key={i}>
            <div className="video-con">
              {activeSlide === i ? (
                <img
                  src={slide.image || "/images/fedr.png"}
                  alt={slide.title}
                  className="video-slider"
                />
              ) : (
                <img
                  src={
                    slide.thumbnail ||
                    (i === 1 ? "/images/fedr.png" : "/images/tourn.png")
                  }
                  alt={slide.title}
                  className="video-thumb"
                />
              )}
            </div>

            <div
              className={`slider-con ${window.innerWidth <= 768 && activeSlide !== i ? "hide-on-mobile" : ""
                }`}
            >
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
              <Link to={slide.link}>
                <button className="explore-btn mob-seemore">
                  {seeMore} <GoArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to={slides.viewlink}>
        <div className="view-all">
          {viewAll} <GoArrowRight />
        </div>
      </Link>

      <div className="slider-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dots ${activeSlide === i ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;

// GoogleStyleSlider.jsx
import React, { useRef, useState, useEffect } from "react";
import "./googleslider.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";


const slides = [
  {
    title: "Flow",
    desc: "Create cinematic clips and stories with our AI filmmaking tool.",
    video: "https://www.gstatic.com/marketing-cms/3e/d4/472be25e4cb9af11bf1bdf9f73aa/flow-flowtv.mp4",
    link: "https://labs.google/flow/about",
  },
  {
    title: "NotebookLM",
    desc: "Your personalized AI research assistant, right at your fingertips.",
    image:
      "https://www.gstatic.com/marketing-cms/assets/images/3d/36/24ba043e4c1eb5e6ed47dac2a39f/nblm.png",
    link: "https://notebooklm.google/",
  },
  {
    title: "Google Labs",
    desc: "Explore AI experiments from across the company.",
    video:
      "https://www.gstatic.com/marketing-cms/50/9b/7ed47d6945269c3ff936126fc4ec/labsgoogle-smaller.mp4",
    link: "https://labs.google/",
  },
];

const GoogleStyleSlider = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle navigation buttons
  const handleNext = () => {
    if (activeIndex < slides.length - 1) setActiveIndex(activeIndex + 1);
  };

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  // Handle drag / swipe
  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => (isDown = false));
    slider.addEventListener("mouseup", () => (isDown = false));

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <div className="google-slider-section">
      <div className="google-slider-container">
        <button className="nav-btn prev" onClick={handlePrev}>
          <GoChevronLeft />
        </button>

        <div className="google-slider" ref={sliderRef}>
          {slides.map((slide, i) => (
            <div
              className={`google-slide ${activeIndex === i ? "active" : ""}`}
              key={i}
            >
              <div className="media-container">
                {slide.video ? (
                  <video
                    src={slide.video}
                    muted
                    loop
                    autoPlay={activeIndex === i}
                    playsInline
                  />
                ) : (
                  <img src={slide.image} alt={slide.title} />
                )}
              </div>
              <div className="text-container">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                <a href={slide.link} target="_blank" rel="noreferrer">
                  Visit →
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={handleNext}>
          <GoChevronRight />
        </button>

        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${activeIndex === i ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleStyleSlider;

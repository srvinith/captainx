import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Zoom text only inside hero scroll
      const progress = Math.min(scrollY / heroHeight, 1);
      const scale = 1 + progress * 2; // Zoom 1 → 3

      if (textRef.current) {
        textRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-wrapper">
      {/* Hero section with video + blend-text */}
      <div className="video-intro">
        <div className="video-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="video-bg"
          >
            <source
              src="https://cdn.sanity.io/files/jxhrltjy/production/3d54271a5a963e3f195b619767795c87cf82b635.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Blend Text */}
        <div className="bottom">
          <h1 className="blend-text" ref={textRef}>
            Driving climate solutions from idea to impact.
          </h1>
        </div>
      </div>

      {/* Optional intro text after video */}
      <div className="text-intro">
        <h2 className="highlight-text">
          Climate progress demands making low-carbon products the easy, compelling choice for both
          consumers and businesses. PVG is committed to driving climate solutions that also deliver
          real economic value at scale.
        </h2>
        <p>
          We concentrate on four pivotal industries, where we have decades of entrepreneurial and
          investment expertise: financial markets, built environment, transportation, and
          electricity generation.
        </p>
      </div>

      {/* Dummy scroll space to simulate longer page */}
      <div className="after-hero"></div>
    </div>
  );
};

export default Hero;

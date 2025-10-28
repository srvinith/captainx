import React, { useEffect, useRef, useState } from "react";
import "./TextVideo.css";
import videopath from "../assets/video/hero-sec2.mp4";
import videopathvertical from "../assets/video/hero-vertical.mp4";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

const TextVideo = ({ language, setLanguage }) => {
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const stickyRef = useRef(null);
  const audioBtnRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // ✅ Toggle audio mute/unmute
  const handleAudioToggle = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);

    try {
      await video.play(); // safe resume
    } catch (err) {
      console.warn("Autoplay blocked:", err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = document.querySelector(".blend-section");
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const startPoint = sectionTop - viewportHeight * 0.6;
      const endPoint = sectionTop + sectionHeight * 0.8;
      const progress = Math.min(
        Math.max((scrollY - startPoint) / (endPoint - startPoint), 0),
        1
      );

      const scale = 1 + progress * 30.5;
      const opacity = 1 - progress;

      if (textRef.current) {
        textRef.current.style.transform = `scale(${scale})`;
        textRef.current.style.opacity = opacity;
      }

      if (stickyRef.current) {
        const height = 33 + progress * 157;
        stickyRef.current.style.height = `${height}vh`;

        const video = videoRef.current;

        if (height >= 100) {
          if (textRef.current) textRef.current.style.display = "none";
          if (audioBtnRef.current) audioBtnRef.current.style.display = "block";
        } else {
          if (textRef.current) textRef.current.style.display = "flex";
          if (audioBtnRef.current) audioBtnRef.current.style.display = "none";
        }

        // ✅ Reset to start when section re-enters
        const sectionBottom = sectionTop + sectionHeight;
        if (scrollY + viewportHeight > sectionTop && scrollY < sectionBottom) {
          if (video && video.currentTime > 0.5) {
            video.currentTime = 0;
          }
        }

        // ✅ Auto-mute when out of view
        if (scrollY + viewportHeight < sectionTop || scrollY > sectionBottom) {
          if (video && !video.muted) {
            video.muted = true;
            setIsMuted(true);
          }
        }
      }
    };

    // ✅ Start video immediately from 0
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = true;
      setIsMuted(true);
      video
        .play()
        .catch(() => console.warn("Autoplay prevented; user interaction needed"));
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section className="blend-section">
      <div className="blend-sticky" ref={stickyRef}>
        <video
          className="blend-video"
          ref={videoRef}
          loop
          autoPlay
          playsInline
          muted={isMuted}
        >
          {/* Desktop video */}
          <source
            src={videopath}
            type="video/mp4"
            media="(min-width: 768px)"
          />

          {/* Mobile video */}
          <source
            src={videopathvertical}
            type="video/mp4"
            media="(max-width: 767px)"
          />
        </video>

        <div className="blend-text" ref={textRef}>
          <h1>CAPTAINX</h1>
        </div>

        {/* 🔊 Audio toggle button */}
        <button
          ref={audioBtnRef}
          className="audio-toggle"
          onClick={handleAudioToggle}
        >
          {isMuted ? <HiVolumeOff size={22} /> : <HiVolumeUp size={22} />}
        </button>
      </div>
    </section>
  );
};

export default TextVideo;

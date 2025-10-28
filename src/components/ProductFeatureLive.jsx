import React, { useRef, useEffect } from "react";
import "./ProductFeauter.css";
import langData from "../locales/langData.json";

const ProductFeatureLive = ({ language }) => {
  const keyFeauters = langData[language].live.keyFeauters;
  const tournament = langData[language].tournament;

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const imgRef = useRef(null);

 // IntersectionObserver effect
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const card = entry.target;
        if (entry.isIntersecting) {
          card.classList.add("active");
          if (imgRef.current) {
            imgRef.current.src = keyFeauters[card.dataset.index].img;
            imgRef.current.alt = keyFeauters[card.dataset.index].title;
          }
        } else {
          card.classList.remove("active");
        }
      });
    },
    { threshold: 0.7 }
  );

  cardRefs.current.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, [keyFeauters]); // ✅ dependency added

// Pin section effect
useEffect(() => {
  const section = containerRef.current;
  const onWheel = (e) => {
    const scrollable = section.querySelector(".card-gp");
    const delta = e.deltaY;
    const maxScroll = scrollable.scrollHeight - scrollable.clientHeight;

    if ((delta > 0 && scrollable.scrollTop < maxScroll) ||
        (delta < 0 && scrollable.scrollTop > 0)) {
      e.preventDefault();
      scrollable.scrollTop += delta;
    }
  };
  section.addEventListener("wheel", onWheel, { passive: false });
  return () => section.removeEventListener("wheel", onWheel);
}, []); // ✅ no additional dependency needed

  return (
    <section className="key-features" ref={containerRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2 className="sec-title">{tournament.keyFeautersTitle}</h2>
            <div className="card-gp">
              {keyFeauters.map((feature, index) => (
                <div
                  key={index}
                  data-index={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="card-fut block-view-feaut"
                >
                  <div className="card-fut-child">
                    <h6>{feature.title}</h6>
                    <p>{feature.desc}</p>
                  </div>
                  <h2 className="num-fut">{feature.num}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-4 d-flex">
            <div className="feature-img-wrapper">
              <img
                ref={imgRef}
                src={keyFeauters[0].img}
                alt={keyFeauters[0].title}
                className="feature-img fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureLive;

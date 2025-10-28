import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import plus from "../assets/images/plus.svg";
import langData from '../locales/langData.json'

const FaqLive = ({ language }) => {
  const [activeKey, setActiveKey] = useState("0");
  const academy = langData[language].academy;
  const faqlist = langData[language].live.faqlist;



  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="sec-title">{academy.faqtitle}</h2>
            <p className="sec-p">
              {academy.Faqdesc}
            </p>
          </div>
          <div className="col-md-6"></div>
        </div>

        <Accordion activeKey={activeKey} className="faq-accordion">
          {faqlist.map((item, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className="faq-item block-view"
            >
              <Accordion.Header
                onClick={() => handleToggle(index.toString())}
                className={`faq-header  ${activeKey === index.toString() ? "active" : ""
                  }`}
              >
                <span className="faq-title pr-4">{item.title}</span>
                <span
                  className={`faq-icon ${activeKey === index.toString() ? "active" : ""}`}
                  style={{
                    right: language === "ar" ? "100%" : "0",
                    transition: "0.3s ease"
                  }}
                >
                  <img src={plus} alt="toggle" className="plus-icon" />
                </span>

              </Accordion.Header>

              <Accordion.Body className="faq-body pr-4">{item.desc}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqLive;

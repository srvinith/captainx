import React, { useState } from 'react'
import fr1 from '../assets/images/fr1.png'
import fr2 from '../assets/images/fr2.png'
import fr3 from '../assets/images/fr3.png'
import fr4 from '../assets/images/fr4.png'
import life from '../assets/images/life2.png'
import Accordion from "react-bootstrap/Accordion";
import plus from "../assets/images/plus.svg";
import langData from '../locales/langData.json'
import CareerForm from '../components/Forms/CareersForm'
import arrow from '../assets/images/right-arrow.svg'

const Careers = ({ language }) => {
    const [activeKey, setActiveKey] = useState("0");
    const careers = langData[language].careers;

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };
    return (
        <>
            <section className='careers'>
                <div className="container">
                    <div className="anim-containers d-none d-md-block">
                        <img src={fr1} alt="fr1" className='im-1' />
                        <img src={fr2} alt="fr2" className='im-2' />
                        <img src={fr3} alt="fr3" className='im-3' />
                        <img src={fr4} alt="fr4" className='im-4' />
                    </div>
                </div>
                <h2
                    className='sec-title'
                    dangerouslySetInnerHTML={{ __html: careers.careertitle }}></h2>
                      <button className='explore-btn cta-btn my-4 gap-3'>{careers.careerBtn}
                                    <img src={arrow} alt="arrow" className="rt-btn" />
                                  </button>
                {/* <p className='sec-p'>{careers.desc}</p> */}

                <div className="marquee mobile-marquee d-block d-md-none">
                    <div className="marquee-content marks marq-img-wrapper mb-3">
                        <img src={fr1} alt="fr1" />
                        <img src={fr2} alt="fr2" />
                        <img src={fr3} alt="fr3" />
                        <img src={fr4} alt="fr4" />
                        {/* Duplicate for continuous effect */}
                        <img src={fr1} alt="fr1" />
                        <img src={fr2} alt="fr2" />
                        <img src={fr3} alt="fr3" />
                        <img src={fr4} alt="fr4" />

                    </div>
                </div>
            </section>
            <section className='life'>
                <div className="container">
                    <div className="cen-sec-con">
                        <center>
                            <h2 className="sec-title block-view">
                                {careers.lifetitle}
                            </h2>
                            <p className="sec-p block-view">
                                {careers.lifedesc}
                            </p>
                        </center>
                    </div>
                    <div className="img-bot-con">
                        <img src={life} alt="life" className='img-fluid block-view' />
                    </div>

                    <div className="container-box-bot block-view">
                        <h6 className=''>{careers.bottitle}</h6>
                        <p className="">
                            {careers.botdesc}
                        </p>
                    </div>

                </div>
            </section>
            <section className='current-opening-sec'>
                <div className="container">
                    <div className="row">

                        <div className="text-align-left col-md-6">
                            <h2 className='sec-title'>{careers.openingtitle}</h2>
                            <p className="sec-p">{careers.openingdesc}  </p>
                        </div>
                        <div className="col-md-6"></div>
                    </div>

                    <Accordion activeKey={activeKey} className="faq-accordion">
                        {careers.openingaccord.map((item, index) => (
                            <Accordion.Item
                                eventKey={index.toString()}
                                key={index}
                                className="faq-item block-view"
                            >
                                <Accordion.Header
                                    onClick={() => handleToggle(index.toString())}
                                    className={`faq-header ${activeKey === index.toString() ? "active" : ""
                                        }`}
                                >
                                    <span className="faq-title">{item.title}</span>
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

                                <Accordion.Body className="faq-body">
                                    <p>{item.desc}</p>
                                    {item.lists && (
                                        <ul>
                                            {item.lists.map((point, i) => (
                                                <li key={i}>{point.list}</li>
                                            ))}
                                        </ul>
                                    )}

                                    <button className='accord-in-btn'>{item.btn}</button>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>

                </div>
            </section>
            <section className='opening-form'>
                <div className="container">
                    <div className="cen-sec-con mt-5">
                        <center>
                            <h2 className="sec-title">
                                {careers.openingtitle2}
                            </h2>
                            <p className="sec-p">
                                {careers.openingdesc2}
                            </p>
                        </center>
                        <CareerForm />

                    </div>
                </div>
            </section>
        </>
    )
}

export default Careers
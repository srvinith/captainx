import React from 'react'
import './Company.css'
import companyImg from '../assets/images/compnay-office.png'
import arrow from '../assets/images/right-arrow.svg'
import susblit from '../assets/images/susblit.png'
import brainIco from '../assets/images/brain-ico.svg'
import map from '../assets/images/map-svg.svg'
import HorizontalScroll from '../components/Horzont'
import WebHorzont from '../components/WebHorzont'
import langData from '../locales/langData.json'

const Company = ({ language }) => {

    const company = langData[language].company;

    return (
        <>
            <section className='company-sections'>
                <div className="container z-1">
                    <h2 className='block-view sec-title text-center' dangerouslySetInnerHTML={{ __html: company.title }}>
                    </h2>
                </div>
            </section>
            <section className='company-second' id='our-story'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={companyImg} alt="company" className='img-fluid company-sec-img' />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5 mob-our-story">
                            <h6 className="sec-top-titl">{company.secTopTitle}</h6>
                            <h2 className='sec-title'>{company.secTitle}</h2>
                            <p className='sec-p'>{company.secdesc}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='card-t' id='vision'>
                <div className="container">
                    <h6 className='sec-top-titl p-2'>{company.cardTitle}</h6>
                    {/* <div className="row">
                        {company.card.map((card, index) =>
                            <div className="col-md-4 mb-4 md-mb-0">

                                <div className="card-box-t " key={index}>
                                    <div className="arrow-box"></div>
                                    <div className="news-cards desk-card">
                                        <h3>{card.num}</h3>
                                        <h2>{card.title}</h2>
                                        <p>{card.desc}</p>
                                    </div>

                                    <div className="news-arrow">
                                        <img src={arrow} alt="arrow" className='card-arrow-icon' />

                                    </div>
                                </div>
                            </div>
                        )}

                    </div> */}
                    <div className="row">
                        {company.card.map((card, index) =>
                        <div className="col-md-4">
                            <div className="company-boxs">
                                <div className="comp-box">
                                    <div className=" " key={index}>
                                        <div className="arrow-box"></div>
                                        <div className="news-cards desk-card">
                                            <h3>{card.num}</h3>
                                            <h2>{card.title}</h2>
                                            <p>{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-box-arr">
                                    <img src={arrow} alt="arrow" className='' />
                                </div>

                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </section>
            <div id="people">

                <div className="web-horz d-none md-d-block">

                    <HorizontalScroll language={language} />
                </div>
                <div className="mob-horz d-block md-d-none">

                    <WebHorzont language={language} />
                </div>


            </div>

            <section className='sustable' id='sustainability'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="sustable-cont">
                                <div className="">
                                    <h6 className='sec-top-titl'>{company.sustable.secToptitle}</h6>
                                    <h2>{company.sustable.title}</h2>
                                    <p className='sec-p sus-p'>{company.sustable.desc}
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <img src={brainIco} alt="brain" className='my-2' />
                                        <p className='sec-p sus-p'>
                                            {company.sustable.card1}
                                        </p>
                                    </div>
                                    <div className="col">
                                        <img src={brainIco} alt="brain" className='my-2' />
                                        <p className='sec-p sus-p'>
                                            {company.sustable.card2}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4 ">
                            <img src={susblit} alt="susblit" className='img-fluid d-none d-md-block' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='map-sec'>
                <div className="container">

                    <div className="cen-sec-con">

                        <center>
                            <h2 className='sec-title text-white pt-4'>
                                {company.maptitle}
                            </h2>
                        </center>
                    </div>
                    <div className="map-img">
                        <img src={map} alt="map" className='img-fluid' />
                    </div>
                </div>

            </section>

            <section className='cta'>
                <div className="container">
                    <div className="cen-sec-con">

                        <center>
                            <h2 className='sec-title block-view' dangerouslySetInnerHTML={{ __html: company.ctatitle }}></h2>
                            <p className="sec-p block-view" dangerouslySetInnerHTML={{ __html: company.ctadesc }}></p>
                            <button className='explore-btn cta-btn my-4 gap-3'>{company.ctaButton}

                                <img src={arrow} alt="arrow" className="rt-btn" />
                            </button>
                        </center>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Company
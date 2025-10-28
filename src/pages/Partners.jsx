import React from 'react'
import langData from '../locales/langData.json'
import arrow from '../assets/images/right-arrow.svg'
import clt1 from '../assets/images/ctl5.svg'
import clt2 from '../assets/images/clt2.png'
import clt3 from '../assets/images/clt3.png'
import clt4 from '../assets/images/clt4.png'


const Partners = ({ language }) => {
    const partner = langData[language].partner;


    return (
        <>

            <section className="cta py-5">
                <div className="container">
                    <div className="cen-sec-con text-center">
                        <center>
                            <h2
                                className="sec-title block-view partner-title"
                                dangerouslySetInnerHTML={{ __html: partner.title }}
                            ></h2>

                            <p
                                className="sec-p block-view"
                                dangerouslySetInnerHTML={{ __html: partner.desc }}
                            ></p>

                            <button
                                className="explore-btn cta-btn my-4 gap-3">
                                {partner.btn}
                                <img src={arrow} alt="arrow" className="rt-btn" />
                            </button>
                        </center>
                    </div>
                </div>
            </section>

            <section className='card-img-lap'>
                <div className="container">
                    <h6 className='sec-top-titl py-3'>{partner.cardlaptitle}</h6>
                    <div className="row card-lap-con">
                        {partner.cardlap.map((card, index) =>
                            <div className="col-md-4 mb-4">
                                <div className="card-lap" key={index}>
                                    <div className="lpa-con">
                                        <h2>{card.title}</h2>
                                        <p>{card.desc}</p>
                                    </div>
                                    <center>
                                        <img src={card.img} alt="cardlap" className='img-fluid' />
                                    </center>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className='sportx-sec'>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-6">
                            <h6 className='sectoptitl text-white'>{partner.typetoptitle}</h6>
                            <h2 className='text-white'>{partner.typetitle}</h2>
                            <p className='sec-p'>
                                {partner.typedesc}
                            </p>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        {partner.types.map((card, index) =>
                            <div className="col-md-3 mb-4">
                                <div className="sportx-box" key={index}>
                                    <img src={card.img} alt="wbrain" className='imgfluid pb-1' />
                                    <h4 className='pb-3'>{card.title}</h4>
                                    <p>{card.desc}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section>
                {/* <div className="container">
                    <div className="top-conten text-center pt-5 pb-3">
                        <h6 className="sec-top-titl" dangerouslySetInnerHTML={{ __html: partner.sucesstoptitle }}></h6>
                        <h2 className='sec-title'>{partner.sucessTitle}</h2>
                        <p className='sec-p' dangerouslySetInnerHTML={{ __html: partner.sucessDesc }}></p>
                    </div>
                </div> */}
                <div className="scond-product-parts">
                    <center>  <h5 className='second-cen-text py-3'>{partner.morequee}</h5>
                        <h2 className="sec-title">United by one vision</h2>
                    </center>
                    <div className="marquee">
                        <div className="marquee-content marq-img-wrapper mb-3">
                            <img src={clt1} alt="cl" />
                            <img src={clt2} alt="cl" />
                            <img src={clt3} alt="cl" />
                            <img src={clt4} alt="cl" />
                            {/* Duplicate for continuous effect */}
                            <img src={clt1} alt="cl" />
                            <img src={clt2} alt="cl" />
                            <img src={clt3} alt="cl" />
                            <img src={clt4} alt="cl" />

                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='cta'>
                <div className="container">
                    <div className="cen-sec-con">

                        <center>
                            <h2
                                className='sec-title block-view'
                                dangerouslySetInnerHTML={{ __html: partner.ctatitle }}
                            ></h2>
                            <p
                                className="sec-p block-view"
                                dangerouslySetInnerHTML={{ __html: partner.ctadesc }}
                            ></p>
                            <button className='explore-btn cta-btn my-4'>
                                {partner.ctabtn}
                                <img src={arrow} alt="arrow" className="rt-btn" />
                            </button>
                        </center>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Partners
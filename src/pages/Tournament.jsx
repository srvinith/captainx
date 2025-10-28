import React, { useEffect, useRef, useState } from 'react';
import langData from '../locales/langData.json';
import vid from '../assets/images/video-thum.png';
import ProductFeatureTourn from '../components/ProductFeatureTorun';
import centerBox from '../assets/images/web-plat.png';
import centerBoxMob from '../assets/images/cen-box.svg';
import arrow from '../assets/images/right-arrow.svg';
import clt1 from '../assets/images/ctl5.svg'
import clt2 from '../assets/images/clt2.png'
import clt3 from '../assets/images/clt3.png'
import clt4 from '../assets/images/clt4.png'
import FaqTournament from '../components/FaqTournament';


// ✅ Reusable CountUp component
const CountUp = ({ end, duration, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return; // wait until visible
        let start = 0;
        const incrementTime = 10;
        const totalSteps = (duration * 1000) / incrementTime;
        const increment = end / totalSteps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(timer);
                setCount(end);
            } else {
                setCount(Math.floor(start));
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [end, duration, trigger]);

    return <>{count}</>;
};



const Tournament = ({ language }) => {
    const tournament = langData[language].tournament;
    const product = langData[language].products;
    const imgRef = useRef(null);
    const iconRef = useRef(null);


    // ✅ Cursor-follow play icon
    useEffect(() => {
        const container = imgRef.current;
        const icon = iconRef.current;
        let x = 0, y = 0;
        let targetX = 0, targetY = 0;
        let animationFrame;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            targetX = e.clientX - rect.left;
            targetY = e.clientY - rect.top;
        };

        const animate = () => {
            // Faster follow: lower the smoothing factor (0.9 to 0.95)
            x += (targetX - x) * 0.3;
            y += (targetY - y) * 0.3;
            icon.style.transform = `translate(${x - icon.offsetWidth / 2}px, ${y - icon.offsetHeight / 2}px)`;
            animationFrame = requestAnimationFrame(animate);
        };

        container.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);


   // ✅ Scroll fade-in animation (only translate, opacity always 1)
useEffect(() => {
    const handleScroll = () => {
        const element = imgRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = 1 - rect.top / windowHeight;
        const clamped = Math.min(Math.max(progress, 0), 1);

        // Remove opacity change, always 1
        element.style.opacity = 1;

        // Only apply translateY for movement
        element.style.transform = `translateY(${180 - clamped * 160}px)`;

        // Remove any shadow if added
        element.style.boxShadow = "none";
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

    const [visible, setVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 } // trigger when 30% visible
        );

        if (counterRef.current) observer.observe(counterRef.current);
        return () => observer.disconnect();
    }, []);


    return (
        <>
            <div className="indual-product-section">
                <div className="m-indu-first">
                    <div className="container">

                        <center>
                            <div className="indual-hero-m">
                                <div className="cen-sec-con">
                                    <h6 className='sec-top-titl block-view mt-3'>{tournament.secTopTitle}</h6>
                                    <h2
                                        className='hero-title academy-title hr-title block-view'
                                        dangerouslySetInnerHTML={{ __html: tournament.title }}
                                    />
                                    <p className='block-view hero-text-p'>{tournament.desc}</p>
                                    <div className="mob-btn">
                                        <button className='explore-btn cta-btn'>
                                            {tournament.btn}
                                            <img src={arrow} alt="arrow" className="rt-btn" />
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </center>

                        <div className="ind-img-over scroll-fade-scroll" ref={imgRef}>
                            <img src={vid} alt="video-thumb" className="scroll-fade-scroll" />
                            <div className="play-icon" ref={iconRef}>▶</div>
                        </div>
                    </div>


                    <div className="scond-product-part">
                        <center>  <h5 className='second-cen-text py-3'>{product.morequee}</h5></center>
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
                </div>
            </div>


            {/* ✅ Number Counter Section */}
            <section className='future-sec'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-md-6 " ref={counterRef}>
                            <h2
                                className="sec-title futer-title block-view"
                                dangerouslySetInnerHTML={{ __html: tournament.futureTitle }}
                            />
                            <p className="sec-p futer-p block-view">{tournament.futureDesc}</p>
                        </div>

                        <div className="col-md-2"></div>

                        {/* RIGHT NUMBERS */}
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="num-card-box">
                                        <div className="number-count">
                                            <CountUp end={tournament.num1} duration={2} trigger={visible} />
                                            <span>{tournament.numspan}</span>
                                        </div>
                                        <div className="number-desc">{tournament.num1Desc}</div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="num-card-box">
                                        <div className="number-count-two">
                                            <CountUp end={tournament.num2} duration={2} trigger={visible} />
                                            <span>{tournament.numspan}</span>
                                        </div>
                                        <div className="number-desc">{tournament.num2Desc}</div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="num-card-box">
                                        <div className="number-count-two">
                                            <CountUp end={tournament.num3} duration={2} trigger={visible} />
                                            <span>{tournament.numspan}</span>
                                        </div>
                                        <div className="number-desc">{tournament.num3Desc}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <ProductFeatureTourn language={language} />


            {/* PLATFORM SECTION */}
            <section className='platform'>
                <div className="container">
                    <center>
                        <h2 className='sec-title'>{tournament.platformTitle}</h2>
                        {/* <p className='d-none d-md-block sec-desc'>{tournament.platformDesc}</p> */}
                    </center>

                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-md-4 d-block d-md-none mb-4">
                            <center>
                                <img src={centerBoxMob} alt="center-box " className='img-fluid d-block d-md-none' />
                                <img src={centerBox} alt="center-box " className='img-fluid d-none d-md-block' />
                            </center>
                        </div>

                        <div className="col-md-4">
                            <div className="card-wrap">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src={tournament.platformlist1icon} alt={tournament.platformlist1icon} />
                                    </div>
                                    <div className="icon-box-con">
                                        <h6>{tournament.platformlist1Title}</h6>
                                        <p>{tournament.platformlist1Desc}</p>
                                    </div>
                                </div>

                                <div className="icon-box">
                                    <div className="icon">
                                        <img src={tournament.platformlist2icon} alt={tournament.platformlist2icon} />
                                    </div>
                                    <div className="icon-box-con">
                                        <h6>{tournament.platformlist2Title}</h6>
                                        <p>{tournament.platformlist2Desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 d-none d-md-block">
                            <center>
                                <img src={centerBox} alt="center-box" className='img-cen' />
                            </center>
                        </div>

                        <div className="col-md-4">
                            <div className="card-wrap">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src={tournament.platformlist3icon} alt={tournament.platformlist3icon} />
                                    </div>
                                    <div className="icon-box-con">
                                        <h6>{tournament.platformlist3Title}</h6>
                                        <p>{tournament.platformlist3Desc}</p>
                                    </div>
                                </div>

                                <div className="icon-box">
                                    <div className="icon">
                                        <img src={tournament.platformlist4icon} alt={tournament.platformlist4icon} />
                                    </div>
                                    <div className="icon-box-con">
                                        <h6>{tournament.platformlist4Title}</h6>
                                        <p>{tournament.platformlist4Desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <FaqTournament language={language} />


            {/* CTA */}
            <section className='cta'>
                <div className="container">
                    <div className="cen-sec-con">

                    <center>
                        <h2
                            className='sec-title block-view'
                            dangerouslySetInnerHTML={{ __html: tournament.ctaTitle }}
                        ></h2>
                        <p
                            className="sec-p block-view"
                            dangerouslySetInnerHTML={{ __html: tournament.ctadesc }}
                        ></p>
                        <button className='explore-btn my-4 cta-btn'>
                            {tournament.ctabutton}
                            <img src={arrow} alt="arrow" className="rt-btn" />
                        </button>
                    </center>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tournament;

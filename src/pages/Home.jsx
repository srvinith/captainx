import TextVideo from '../components/TextVideo';
import CustomAccordion from '../components/CustomAccordio';
import CardBox from '../components/CardBox';
import langData from '../locales/langData.json';
import VideoSlider from '../components/VideoSlider';
import { GoArrowRight } from 'react-icons/go';
import circle from '../assets/images/center-circle.svg'
import arrow from '../assets/images/right-arrow.svg'
import { LiaArrowRightSolid } from 'react-icons/lia';
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



// import GoogleStyleSlider from '../components/GoogleSlider';


const Home = ({ language }) => {
  const text = langData[language].home;
  const company = langData[language].home.company;
  const newsCard = langData[language].home.newsCard;
  const videoSlider = langData[language].home.videoSlider;
  const cta = langData[language].home.cta;
  const transform = langData[language].home.transform;
  const members = langData[language].home.members;


  const navigate = useNavigate();

  return (
    <>
      {/* <Hero/> */}
      <div className='hero-section'>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2
                className='hero-title hr-title block-view'
                dangerouslySetInnerHTML={{ __html: text.heroTitle }}
              />
              <p className='block-view hero-text-p'>{text.heroDesc}</p>
              <div className="mob-btn">
                <button
                  className="explore-btn"
                  onClick={() => navigate("/company")}
                >
                  {text.exploreBtn}
                </button>

              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div className="scroll-down">
          <p className='scroll-text'>{text.scrollDown}</p>
          <div
            className="dot">
            <p
              style={{
                // position: "relative",
                right: language === "ar" ? "5px" : "0",
                transition: "0.3s ease"
              }}
            >.</p>
          </div>
        </div>
      </div>

      <div className='text-vid'>
        <TextVideo language={language} />
      </div>

      <section className='why-sec'>
        <CustomAccordion language={language} />
      </section>

      <section className='py-4 solution'>
        <center>
          <h2 className='sec-title block-view' dangerouslySetInnerHTML={{ __html: text.solutionTitle }} />
        </center>
        <div className="card-box block-view">
          <CardBox language={language} />
        </div>
      </section>



      <section className='slider-sec pt-4'>
        <center>
          <h6 className='sec-top-titl block-view'>{videoSlider.topTitle}</h6>
          <h2 className='sec-title block-view' >{videoSlider.title}
          </h2>
        </center>

        <VideoSlider language={language} />
        {/* <GoogleStyleSlider/> */}
      </section>

      <section className='py-5 company-section'>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 py-5">
              <h6 className="sec-top-titl block-view">{company.keyValueTop}</h6>
              <h2
                className="sec-title block-view"
                dangerouslySetInnerHTML={{ __html: company.keyValueTitle }}
              />
              <p className="sec-p block-view">{company.keyValueDesc}</p>

              <div className="learn-more">
                {company.learnmore}<LiaArrowRightSolid />
              </div>
            </div>
            <div className="col-md-6 pb-5">
              <img src={company.image} alt="company" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>


      <section className='transforming py-4'>
        <div className="container">
          <center>

            <div className="cen-sec-con cen-sec-cons">

              <h2 className='sec-title text-white trans-text
               block-view' dangerouslySetInnerHTML={{ __html: transform.title }}></h2>
              {/* <p className="sec-p block-view" dangerouslySetInnerHTML={{ __html: transform.topTitle }}></p> */}
              <button className='bg-white-btn my-4 transform-btn '>{transform.btn}</button>
            </div>

            <div className="circle-group mt-4">
              {/* Rotating outer circle background only */}
              <div className="circle circle-1"></div>

              {members.map((member, i) => {
                const angle = i * 90; // adjust spacing
                const isThird = i === 2; // check 3rd member
                return (
                  <div
                    key={i}
                    className="member"
                    style={{
                      transform: `rotate(${angle}deg) translate(var(--translate-distance)) rotate(-${angle}deg)`
                    }}
                  >
                    <img src={member.img} alt={member.name} className='member-img' />
                    <span className={`name-tag  ${isThird ? "name-tag-right" : ""}`}>
                      {member.name} <br /> {member.design}
                    </span>
                  </div>
                );
              })}


              {/* Middle & inner circles */}
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-4"></div>
              {/* <div className="circle circle-5"></div> */}

              {/* Center text */}
              <div className="circle-center-text">
                <img src={circle} alt="circle" />
                {/* <p>{transform.centerText}</p> */}
              </div>
            </div>

          </center>

        </div>
      </section>

      <section className='news'>
        <div className="container">
          <div className="row">

            <div className="col-md-6 news-top-texts">
              <h6 className="sec-top-titl block-view">{newsCard.topTitle}</h6>
              <h2
                className="sec-title block-view"
                dangerouslySetInnerHTML={{ __html: newsCard.title }}
              />
            </div>
            <div className="col-md-6"></div>
          </div>

          <div className="row">
            {newsCard.news.map((item, index) =>
              <div className="col-md-4" key={index}>
                <div className="company-boxs">
                  <div className="comp-box">
                    <div className=" " >
                      <div className="arrow-box"></div>
                      <div
                        className={`news-cards ${language === 'ar' ? 'rtl' : 'ltr'}`}
                      >
                        <h3>{item.number}</h3>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                      </div>

                      <span className={`date ${language === 'ar' ? 'rtl-date' : 'ltr-date'}`}>{item.date}</span>
                    </div>
                  </div>
                  <div className="bottom-box-arr">
                    <img src={arrow} alt="arrow" className='' />
                  </div>

                </div>
              </div>
            )}
          </div>
          <div className="view-all my-2">
            {newsCard.viewall}<GoArrowRight />
          </div>
        </div>

      </section>

      <section className='cta py-5 my-4'>
        <div className="container">
          <div className="cen-sec-con">

            <center>
              <h2 className='sec-title block-view' dangerouslySetInnerHTML={{ __html: cta.title }}></h2>
              <p className="sec-p block-view" dangerouslySetInnerHTML={{ __html: cta.desc }}></p>
              <button className='explore-btn cta-btn my-4 gap-3'>{cta.ctaButton}

                <img src={arrow} alt="arrow" className="rt-btn" />
              </button>
            </center>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

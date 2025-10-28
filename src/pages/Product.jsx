import React from 'react'
import './Product.css'
import langData from '../locales/langData.json'
import frMainthree from '../assets/images/fr-main3.svg'
import frMaintwo from '../assets/images/fr-main2.svg'
import arrow from '../assets/images/right-arrow.svg'
import gif from '../assets/gif/bg.gif'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


import clt1 from '../assets/images/ctl5.svg'
import clt2 from '../assets/images/clt2.png'
import clt3 from '../assets/images/clt3.png'
import clt4 from '../assets/images/clt4.png'




const Product = ({ language }) => {
  const products = langData[language].products;
  const cardoverlay = langData[language].products.cardoverlay;
  return (
    <>
      <section className='product-hero-section py-5'>
        <div className="first-product-part">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h2
                  className='hero-title product-title block-view'
                  dangerouslySetInnerHTML={{ __html: products.heroTitle }}
                />
                <p className='block-view hero-text-p product-text-p' dangerouslySetInnerHTML={{ __html: products.heroDesc }} />
                <div className="mob-btn">
                  <button className='explore-btn cta-btn  product-btns'>
                    {products.exploreBtn}
                    <img src={arrow} alt="arrow" className="rt-btn" /></button>
                </div>
              </div>
              <div className="col-md-5">
                <div className="card-proud-images">
                  <div className="card-prod-img"></div>
                  <div className="card-proud-second">
                    <img src={frMaintwo} alt="product-main" className='pro-1' />
                    <img src={frMaintwo} alt="product-main" className='pro-2' />
                    <img src={frMainthree} alt="product-main" className='pro-3' />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>


        <div class="marquee-wrapper">
          <center>  <h5 className='second-cen-text pt-3'>{products.morequee}</h5></center>
          <div class="marquee">
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
      </section>

      {/* <ClientMarquee language={language} className="mob-marq" /> */}
      <section className='overaly-sec'>
        <center className='pos-fix'>
          <h6 className='sec-top-titl block-view'>{products.solutionTop}</h6>
          <h2 className='sec-title product-titls block-view' dangerouslySetInnerHTML={{ __html: products.solutionTitle }} />
        </center>

        <div className="container">
          {cardoverlay.map((product, index) => (
            <div className="card-over1 block-viewsd" key={index}>
              <div className="row justify-content-center align-items-center flex-md-row flex-column">

                <div className="col-12 col-md-4">
                  <Link to={product.link} className="link-wrap">
                    <img src={product.image} alt={product.title} className="card-over-img block-view" />
                  </Link>
                </div>

                <div className="col-12 col-md-8">
                  <div className="card-over-con">
                    <Link to={product.link} className="link-wrap">
                      <h2 className="block-view">{product.title}</h2>
                    </Link>

                    <p className="block-view">{product.desc}</p>

                    <Link to={product.link}>
                      <button className="explore-btn mt-2">
                        {product.btn} <FaArrowRight />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>


      <section className='gif-section'>
        <center><h2 className="white-sec-title">{products.giftitle}</h2></center>
        <img src={gif} alt="gif" className='gif-img' />
      </section>

      <section className='cta'>
        <div className="container">
          <center>
            <div className="cen-sec-con">
              <h2 className='sec-title block-view' dangerouslySetInnerHTML={{ __html: products.proctatitle }}></h2>
              <p className="sec-p block-view" dangerouslySetInnerHTML={{ __html: products.proctadesc }}></p>
              <button className='explore-btn cta-btn my-4 gap-3'>{products.proctabtn}
                <img src={arrow} alt="arrow" className="rt-btn" />
              </button>
            </div>
          </center>
        </div>
      </section>

    </>
  )
}

export default Product
import React from 'react';
import './CardBoxs.css';
import langData from '../locales/langData.json';

const CardBox = ({ language }) => {
    const cardItems = langData[language].home.cardBox;

    return (
        <div className='container my-5'>
            <div className="row">
                {cardItems.map((item, index) => (
                    <div className="col-md-4 mob-card-anim" key={index}>
                        <div className="card-boxs block-view">
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <div className="animation-text">
                                

                                {index === 0 && (
                                    <>
                                        <span className="text-11" data-text={item.text2}>{item.text2}</span>
                                        <div className="card-anims pt-3">
                                            <div className="empty-boxs f-boxs"></div>
                                            <div className="player-boxs f-boxs">
                                                <h2
                                                    style={{
                                                        fontSize: language === "ar" ? "50px" : "50px",
                                                    }}
                                                > {item.text1}</h2>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {index === 1 && (
                                    <div className="rotae-box">
                                        <div className="f-boxs cardrotae-1">
                                            <h2>{item.text1}</h2>
                                        </div>
                                        <div className="f-boxs text-cards cards1">
                                            <h2>{item.text2}</h2>
                                        </div>
                                        <div className="f-boxs text-cards cards2">
                                            <h2>{item.text3}</h2>
                                        </div>
                                    </div>
                                )}
                                {index === 2 && (
                                    <>

                                        <div className="card-anim">
                                            <div className="f-boxs s-card">
                                                <h2>{item.text1}</h2>
                                            </div>
                                            <div className="f-boxs s-card1"></div>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardBox;

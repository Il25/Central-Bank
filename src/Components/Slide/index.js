import React from "react";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { slideData } from "./data";
import first from "../../Assets/Images/Inflation.jpg";
import second from "../../Assets/Images/Exchange.jpg";
import third from "../../Assets/Images/rates.jpg";

const Slide = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slide_wrapper">
            <div className="date">
                <h4><h4 className="w_word">W</h4>ednesday, 28 Sep.</h4>
            </div>
            <Slider {...settings} className="slider">
                {slideData.map((item, index) => (
                    <div key={index} className="slide_section">
                        <div className="background">
                            <div className="slide_lists">
                                <div className="slide_list">
                                    <h1 style={{marginTop: "10px"}}>{item.title}</h1>
                                    {item.id===1 &&(<img style={{margin: "40px 0 0 30px"}} src={first} alt="image"/>)}
                                    {item.id ===2 &&(
                                        <div className="exchange_rate">
                                            <div className="exchange_cards">
                                                <div>
                                                    <div className="ex_card">
                                                        <h5>$ 1 USD</h5>
                                                    </div>
                                                    <div className="ex-num">1.7000</div>
                                                </div>
                                                <div className="ex_percent">
                                                    <span>-15%</span>
                                                </div>
                                            </div>
                                            <div className="exchange_cards">
                                                <div>
                                                    <div className="ex_card">
                                                        <h5>₽ 1 RUB</h5>
                                                    </div>
                                                    <div className="ex-num">0.0155</div>
                                                </div>
                                                <div className="ex_percent">
                                                    <span>-25%</span>
                                                </div>
                                            </div>
                                            <div className="exchange_cards">
                                                <div>
                                                    <div className="ex_card">
                                                        <h5>€ 1 EUR</h5>
                                                    </div>
                                                    <div className="ex-num">1.8764</div>
                                                </div>
                                                <div className="ex_percent">
                                                    <span>+15%</span>
                                                </div>
                                            </div>
                                            <div className="exchange_cards">
                                                <div>
                                                    <div className="ex_card">
                                                        <h5>₺ 1 TRY</h5>
                                                    </div>
                                                    <div className="ex-num">0.0932</div>
                                                </div>
                                                <div className="ex_percent">
                                                    <span>-25%</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {item.id ===3 &&(
                                        <div className="rates_cards">
                                            <div className="rates_percent">
                                                <ul className="rates_ul">
                                                    <li className="rates_card">
                                                        <p className="rates_li">6%</p>
                                                        <span className="rates_li_span">Corridor floor</span>
                                                    </li>
                                                    <li className="rates_card">
                                                        <p className="rates_li">9%</p>
                                                        <span className="rates_li_span">Corridor ceiling</span>
                                                    </li>
                                                    <li className="rates_card">
                                                        <p className="rates_li">7.5%</p>
                                                        <span className="rates_li_span">Refinancing rate</span>
                                                    </li>
                                                </ul>
                                                <span className="from_date">From 22.08.2022</span>
                                            </div>
                                            <div className="backing_sector">
                                                <h3>Banking sector</h3>
                                            </div>
                                            <div className="loans">
                                                <ul className="rates_ul">
                                                    <li className="rates_card">
                                                        <p className="rates_li">16781.4</p>
                                                        <span className="rates_li_span">Loans (min. AZN)</span>
                                                    </li>
                                                    <li className="rates_card">
                                                        <p className="rates_li">9635.8</p>
                                                        <span className="rates_li_span">Household savings (min. AZN)</span>
                                                    </li>
                                                </ul>
                                                <span className="from_date">From 22.08.2022</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div> 
                    </div>
                </div>
                ))}
            </Slider>
        </div>       
    );
};

export default Slide;
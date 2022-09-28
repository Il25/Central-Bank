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
                                    {item.id ===2 &&(<img style={{margin: "40px 0 0 30px"}} src={second} alt="image"/>)}
                                    {item.id ===3 &&(<img style={{margin: "40px 0 0 30px"}} src={third} alt="image"/>)}
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
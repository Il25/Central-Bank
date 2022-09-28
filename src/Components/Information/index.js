import React from "react";
import "./index.css";

const Information = () => {


    return (
        <div className="information_wrapper">
            <div className="info_h4"><h4 className="i_word">I</h4><h4>nformation</h4></div>
            <div className="info_cards">
                <div className="information_card">
                    <h3 className="news_h3">News</h3>
                    <div>
                        <div className="time">
                            <span className="span_time">11.03.2022</span>
                            <p className="written_info">On FX auctio</p>
                        </div>
                    </div>
                    <div>
                        <div className="time">
                            <span className="span_time">09.03.2022</span>
                            <p className="written_info">Azerbaijani insurance sector representatives participate in International Insurance Forum and Congress</p>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="time">
                        <span className="span_time">03.03.2022</span>
                        <p className="written_info">On FX auctio</p>
                    </div>
                    <div>
                        <button className="button_SeeMore_ViewAll">See More</button>
                    </div>
                </div>
                <div className="information_card">
                    <h3 className="news_h3">Calendar</h3>
                        <div>
                            <div className="august">
                                <div className="div_date">
                                    <span className="month">Aug</span>
                                    <span className="number">10</span>
                                </div>
                                <p className="written_info">Martin Flodén: Swedish and international monetary policy</p>
                            </div>
                        </div>
                        <div>
                            <div className="march">
                                <div className="div_date">
                                    <span className="month">Mar</span>
                                    <span className="number">5</span>
                                </div>
                                <p className="written_info">Martin Flodén: Swedish and international monetary policy</p>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="january">
                            <div className="div_date">
                                    <span className="month">Jan</span>
                                    <span className="number">23</span>
                                </div>
                            <p className="written_info">Martin Flodén: Swedish and international monetary policy</p>
                        </div>
                        <div>
                            <button className="button_SeeMore_ViewAll">View all</button>
                        </div>
                </div>
            </div>
        </div>       
    );
};

export default Information;
import React from "react";
import "./index.css";
import Fb from "../../Assets/Images/fb.svg.png";
import Instagram from "../../Assets/Images/Instagram.svg.png";
import YouTube from "../../Assets/Images/YouTube.svg.png";
import Linkedin from "../../Assets/Images/linkedin.png";
import Twitter from "../../Assets/Images/twitter.png";
import CBLogo from "../../Assets/Images/cb-logo.svg"
import Search from "../../Assets/Images/search-icon.svg";

const Header = () => {

    return (
        <div className="header">
            <div className="header_info">
                <div className="header_top_wrapper">
                    <div className="header_sosial_links">
                        <a className="sosial_links" href="https://www.facebook.com/Az%C9%99rbaycan-Respublikas%C4%B1n%C4%B1n-M%C9%99rk%C9%99zi-Bank%C4%B1-107763107801037" target="_blank">
                            <img width={20} src={Fb} alt="Facebook"/>
                        </a>
                        <a href="https://www.instagram.com/cbar.az_official" target="_blank">
                            <img width={20} src={Instagram} alt="Instagram"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCCEEsVrhbIcLyRNMgQYiaxg" target="_blank">
                            <img width={20} src={YouTube} alt="YouTube"/>
                        </a>
                        <a href="https://www.linkedin.com/company/cbaraz" target="_blank">
                            <img width={20} src={Linkedin} alt="Linkedin"/>
                        </a>
                        <a href="https://twitter.com/Merkezi_Bank_AZ" target="_blank">
                            <img width={20} src={Twitter} alt="Twitter"/>
                        </a>
                    </div>
                    <div className="header_info_wrapper">
                        <div className="header_adress">
                            <p>90 Rashid Behbudov str., AZ1014 Baku, Azerbaijan</p>
                        </div>
                        <div className="phone_number">
                            <p>+996</p>
                        </div>
                        <div className="header_lang">
                            <select className="select_lang">
                                <option>English</option>
                                <option>Azərbaycanca</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_bottom_info">
                <div className="main_logo">
                    <div>
                        <a href="https://new-cbar.gts.az/" target="_blank">
                            <img src={CBLogo} alt="Central Bank"/>
                        </a>
                    </div>
                    <div className="search_wrapper">
                        <div className="search_icon">
                            <img src={Search} alt="Search"/>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <ul className="navbar_items">
                        <li>ABOUT US</li>
                        <li>MONETARY POLICY</li>
                        <li>MARKET ACTORS</li>
                        <li>LEGAL FRAMEWORK</li>
                        <li>PAYMENT SYSTEMS</li>
                        <li>NATIONAL CURRENCY</li>
                        <li>STATISTICS</li>
                        <li>PUBLICATIONS AND RESEARCHES</li>
                    </ul>
                </div>
            </div>
        </div>       
    );
};

export default Header;
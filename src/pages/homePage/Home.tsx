import React from 'react';
import './Home.css';
import homeLogo from '../../assets/homeImage.png'
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";

function Home() {
    return (
        <div className="homePage">
            <HeaderComponent />
            <div className="homeLogo">
                <img className="logoImage" src={homeLogo} alt="logo"/>
                <div className="textContainer">
                    <h1 className="imageText">Travel with us!</h1>
                </div>
            </div>
        </div>
    );
}
export default Home;
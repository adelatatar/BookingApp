import React from 'react';
import './Home.css';
import homeLogo from '../../assets/homeImage.png'

function Home() {
    return (
        <div className="homePage">
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
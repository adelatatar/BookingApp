import React from 'react';
import './Home.css';
import homeLogo from '../../assets/homeImage.png'

/**
 * This is the home page and is only contains the header component, an image and a footer.
 * @constructor
 */
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
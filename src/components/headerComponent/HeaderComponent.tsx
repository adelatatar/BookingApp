import React from 'react';
import siteLogo from '../../assets/logoAirbnb.png';
import './HeaderComponent.css'
import MenuComponent from "../menuComponent/MenuComponent";

function HeaderComponent() {
    return (
        <nav className="navbar">
            <div>
                <img className="logo" src={siteLogo} alt="logo"/>
                <MenuComponent/>
            </div>
        </nav>

    );
}
export default HeaderComponent;
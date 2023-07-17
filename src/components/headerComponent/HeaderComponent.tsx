import React from 'react';
import siteLogo from '../../assets/logoAirbnb.png';
import './HeaderComponent.css'
import MenuComponent from "../menuComponent/MenuComponent";

function HeaderComponent() {
    return (
        <nav className="navbar">
            <img className="logo" src={siteLogo} alt="logo"/>
            <MenuComponent/>
        </nav>

    );
}

export default HeaderComponent;
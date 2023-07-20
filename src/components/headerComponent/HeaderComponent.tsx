import React from 'react';
import siteLogo from '../../assets/logoAirbnb.png';
import './HeaderComponent.css'
import MenuComponent from "../menuComponent/MenuComponent";

/**
 * The header is displayed in each page and contains a logo and another component, a menu with buttons that redirect to other pages.
 * @constructor
 */
function HeaderComponent() {
    return (
        <nav className="navbar">
            <img className="logo" src={siteLogo} alt="logo"/>
            <MenuComponent/>
        </nav>

    );
}

export default HeaderComponent;
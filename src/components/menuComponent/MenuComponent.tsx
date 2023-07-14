import React from "react";
import {useNavigate} from 'react-router-dom'
import {Button} from "@mui/material";
import './MenuComponent.css'
function MenuComponent() {
    const navigate = useNavigate();

    const navigateToHomePage =() => {
        navigate('/');
    };

    const navigateToPropertiesPage = () => {
        navigate('/properties');
    };

    const navigateToContactPage = () => {
        navigate('/contact');
    };

    const navigateToAddPropertyPage = () => {
        navigate('/newProperty');
    }

    return (
        <div className="menu">
            <nav>
                <Button className="button" onClick = {navigateToHomePage} color="inherit">Home</Button>
                <Button className="button" onClick = {navigateToPropertiesPage} color="inherit">Properties</Button>
                <Button className="button" onClick = {navigateToContactPage} color="inherit">Contact</Button>
                <Button className="button" onClick = {navigateToAddPropertyPage} color="inherit">Add New Property</Button>
            </nav>
        </div>
    );

}
export default MenuComponent
import React, {ChangeEvent, useState} from "react";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import SearchBar from "../../components/searchBarComponent/SearchBar";
import './Properties.css'
import {TextField} from "@mui/material";
function Properties() {
    const properties =[
        {
            image: "../../assets/villaDomina.jpg",
            name: "Villa Domina",
            location: "Croatia, Split",
            rate:"4.8",
            price:"110 Euro"
        },
        {
            image: "",
            name: "Aparthotel Stare Miasto",
            location: "Poland, Krakow",
            rate:"4.7",
            price:"125 Euro"
        },
        {
            image: "",
            name: "Hotel Confort",
            location: "Cluj-Napoca, Romania",
            rate:"4.9",
            price:"85 Euro"
        },
        {
            image: "",
            name: "Hotel Plaza",
            location: "Italy, Rome",
            rate:"5",
            price:"160 Euro"
        },
        {
            image: "",
            name: "Hotel Palace",
            location: "Italy, Palermo",
            rate:"4.8",
            price:"120 Euro"
        }
    ]

    const [searchedTerm, setSearchedTerm] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchedTerm(e.target.value);
    }

    return (
        <main className="mainContainer">
            <HeaderComponent/>
            <SearchBar/>
            <table className="propertiesTable">
                {properties.map((content, key) => {
                    return (
                      <tr key = {key}>
                          <td><img src={content.image} height="150" width="150"/></td>
                          <td>{content.name}</td>
                          <td>{content.location}</td>
                          <td>{content.rate}</td>
                          <td>{content.price}</td>
                          <td><button className="deleteButton">Delete Property</button></td>
                          <td><button className="seePropertyButton">See the Property</button></td>
                      </tr>
                    );
                })}
            </table>
        </main>
    );
}

export default Properties;
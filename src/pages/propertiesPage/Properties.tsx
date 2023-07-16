import React, {useState} from "react";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import SearchBar from "../../components/searchBarComponent/SearchBar";
import './Properties.css'
import PropertyType from "../../types/PropertyType";
import {useNavigate} from "react-router-dom";
import properties from "../../consts/data";

function Properties() {
    const [searchedResults, setSearchedResults] = useState<PropertyType[]>(properties);

    const onSearchChange = (searchedName: string) => {
        if (searchedName !== '') {
            const results = properties.filter((property: PropertyType)=>{
                return (
                    // property.image &&
                    property.name &&
                    property.location &&
                    property.rate &&
                    property.price &&
                    property.name.toLocaleLowerCase().includes(searchedName));
            });
            setSearchedResults(results);
        } else {
            setSearchedResults(properties);
        }
    };

    const deleteProperty = (propertyIndex:number) => {
        let results = [...searchedResults];
        results = results.filter(
            (item, index) => propertyIndex !== index
        );
        setSearchedResults(results);
    }

    const navigate = useNavigate();
    const navigateToSeeThePage = (propertyId: number) => {
        navigate(`/seeProperty/${propertyId}`);
    };

    return (
        <main className="mainContainer">
            <SearchBar onSearchChange = {onSearchChange}/>
            <table className="propertiesTable">
                {searchedResults.map((content, propertyIndex) => {
                    return (
                      <tr key = {content.id}>
                          <td><img src={content.image} height="150" width="150"/></td>
                          <td>{content.name}</td>
                          <td>{content.location}</td>
                          <td>{content.rate}</td>
                          <td>{content.price}</td>
                          <td><button className="deleteButton" onClick={() => deleteProperty(propertyIndex) }>Delete Property</button></td>
                          <td><button className="seePropertyButton" onClick={() => navigateToSeeThePage(content.id) }>See the Property</button></td>
                      </tr>
                    );
                })}
            </table>
        </main>
    );
}

export default Properties;
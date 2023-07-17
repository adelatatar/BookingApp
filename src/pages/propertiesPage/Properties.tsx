import React, {useState} from "react";
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
                    property.image &&
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

    const deleteProperty = (propertyId:number) => {
        let results = [...searchedResults];
        results = results.filter(
            (property) => propertyId !== property.id
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
            <table className="table table-bordered">
                {searchedResults.map((property, propertyIndex) => {
                    return (
                      <tr key = {property.id}>
                          <td><img src={property.image} height="150" width="150"/></td>
                          <td>{property.name}</td>
                          <td>{property.location}</td>
                          <td>Rate: {property.rate}</td>
                          <td>{property.price}</td>
                          <td>Type: {property.type}</td>
                          <td><button className="btn btn-outline-dark" onClick={() => deleteProperty(property.id) }>Delete Property</button></td>
                          <td><button className="btn btn-dark" onClick={() => navigateToSeeThePage(property.id) }>See the Property</button></td>
                      </tr>
                    );
                })}
            </table>
        </main>
    );
}

export default Properties;
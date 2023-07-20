import React, {useEffect, useState} from "react";
import SearchBar from "../../components/searchBarComponent/SearchBar";
import PropertyType from "../../types/PropertyType";
import {useNavigate} from "react-router-dom";
import CanceledError from "axios";
import DropDownButton from "../../components/dropDownButton/DropDownButton";
import {deleteProperty, getProperties} from "../../services";

/**
 * This page is used to display all the available properties.
 * When the page is rendered for the first time a function, that contains an
 * API request of type GET, is called.
 * The properties are displayed in a table and for each property we have a delete button,
 * and a button that redirect the user to another page where he can see more details
 * about the property.
 * The page has a dropdown button that contains a menu with all the available towns and filter
 * the property by town. Also, the user can filter the properties by name using the search bar.
 * @constructor
 */

function Properties() {
    const [properties, setProperties] = useState<PropertyType[]>([]);
    const [allProperties, setAllProperties] = useState<PropertyType[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        getProperties( (data:PropertyType[])=>{
            setProperties(data);
            setAllProperties(data);
        }, (err) => {setError(err)})
    }, []);

    const deleteSelectedProperty = (property: PropertyType) => {
        const originalProperties = [...properties];
        setProperties(properties.filter(p => p.name !== property.name))
        deleteProperty(property.name)
            .catch(err => {
                setError(err.message);
                setProperties(originalProperties);
            })

    };

    const navigate = useNavigate();
    const navigateToSeeThePage = (property: PropertyType) => {
        navigate(`/seeProperty/${property.name}`);
    };

    const onSearchChange = (searchedName: string) => {
        const originalProperties = [...allProperties];
        if (searchedName && searchedName !== '') {
            setProperties(originalProperties.filter(p => p.name!==null && p.name.toLocaleLowerCase().includes(searchedName)));
        } else {
            setProperties(originalProperties);
        }
    };

    const onSelectTown = (town:string) => {
        setProperties([]);

        const originalProperties = [...allProperties];
        if(!town) {
            setProperties(originalProperties);
        } else {
            console.log('originaol: ', originalProperties)
            console.log('filtered originaol: ', originalProperties.filter(p => p.town && p.town=== town))
            setProperties(originalProperties.filter(p => p.town && p.town=== town));
        }
    };

    useEffect(()=>{
        console.log("Prop: ", properties)
    },[properties])

    return (
        <>
            <SearchBar onSearchChange = {onSearchChange}/>
            {error && <p className="text-danger">{error}</p>}
            <DropDownButton onSelectTown={onSelectTown} />
            <table className="table table-bordered" style={{
                marginLeft: "2%",
                marginRight: "2%"
            }}>
                <tbody>
                    {properties.map((property, index) => {
                        return (
                            <tr key = {index}>
                                <td>{property.name}</td>
                                <td>{property.town}</td>
                                <td>Rate: {property.review}</td>
                                <td>{property.price}</td>
                                <td>Type: {property.type}</td>
                                <td><button className="btn btn-outline-dark" onClick={() => deleteSelectedProperty(property) }>Delete Property</button></td>
                                <td><button className="btn btn-outline-dark" onClick={() => navigateToSeeThePage(property) }>See the Property</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Properties;
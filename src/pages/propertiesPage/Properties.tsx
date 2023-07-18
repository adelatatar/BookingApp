import React, {useEffect, useState} from "react";
import SearchBar from "../../components/searchBarComponent/SearchBar";
import PropertyType from "../../types/PropertyType";
import {useNavigate} from "react-router-dom";
import axios, {CanceledError} from "axios";
import DropDownButton from "../../components/dropDownButton/DropDownButton";

function Properties() {
    const [properties, setProperties] = useState<PropertyType[]>([]);
    const [error, setError] = useState("");
    const [selectedTown, setSelectedTown] = useState<string | null>()

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get<PropertyType[]>('http://192.168.123.25:9039/accommodation-units', {signal: controller.signal})
            .then(res => setProperties(res.data))
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err);
            });

        return () => controller.abort();
        }, [])

    const onSearchChange = (searchedName: string) => {
        const originalProperties = [...properties];
        if (searchedName !== '') {
            setProperties(properties.filter(p => p.name.toLocaleLowerCase().includes(searchedName)));
        } else {
            setProperties(originalProperties);
        }
    };

    const deleteProperty = (property: PropertyType) => {
        const originalProperties = [...properties];
        setProperties(properties.filter(p => p.name !== property.name))

        axios.delete('http://192.168.123.25:9039/accommodation-units?name='+ property.name)
            .catch(err => {
                setError(err.message);
                setProperties(originalProperties);
            })
    }

    const navigate = useNavigate();
    const navigateToSeeThePage = (property: PropertyType) => {
        navigate(`/seeProperty/${property.name}`);
    };

    const onSelectTown = (town:string | null) => {

    }

    return (
        <>
            <SearchBar onSearchChange = {onSearchChange}/>
            {error && <p className="text-danger">{error}</p>}
            <DropDownButton />
            <table className="table table-bordered" style={{
                marginLeft: "2%",
                marginRight: "2%"
            }}>
                <tbody>
                    {properties.map((property) => {
                        return (
                            <tr key = {property.name}>
                                <td>{property.name}</td>
                                <td>{property.town}</td>
                                <td>Rate: {property.review}</td>
                                <td>{property.price}</td>
                                <td>Type: {property.type}</td>
                                <td><button className="btn btn-outline-dark" onClick={() => deleteProperty(property) }>Delete Property</button></td>
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
import React, {useState} from "react";
import './NewProperty.css'
import PropertyType from "../../types/PropertyType";
import axios from "axios";

function NewProperty() {
    const [formData, setFormData] = useState<PropertyType>({
        review: 0,
        name:"",
        description: "",
        price: 0,
        town: "",
        type: "",
        remarks: []
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios
            .post('http://192.168.123.25:9039/accommodation-units', formData, {
                headers: {
                    'content-type' : 'application/json'
                }
            })
    }

    return (
        <main className="mainContainer">
            <div className="formText">
                <h1>Complete the next fields to add a new property:</h1>
            </div>
            <div className="addNewPropertyForm">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>
                        Property Name:
                        <input onChange={handleChange} type="text" name="name" />
                    </label> <br/>
                    <label>
                        Description:
                        <input onChange={handleChange} type="text" name="description" />
                    </label> <br/>
                    <label>
                        Price:
                        <input onChange={handleChange} type="text" name="price" />
                    </label> <br/>
                    <label>
                        Location:
                        <input onChange={handleChange} type="text" name="town" />
                    </label> <br/>
                    <label >
                        Type (HOTEL/PENSION):
                        <input onChange={handleChange} type="text" name="type" />
                    </label>
                    <button type="submit" className="newPropertyButton">Add Property</button>
                </form>
            </div>
        </main>
    );
}

export default NewProperty;
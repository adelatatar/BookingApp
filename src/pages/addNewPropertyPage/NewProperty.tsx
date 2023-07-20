import React, {useState} from "react";
import './NewProperty.css'
import PropertyType from "../../types/PropertyType";
import {CanceledError} from "axios";
import {addNewProperty} from "../../services";

/**
 * This page contains a form for adding a new property.
 * After the object of type Property is created (the user completed all the form's fields and
 * pressed subbmit) we call a function that contains an API request of type POST.
 * @constructor
 */
function NewProperty() {
    const [formData, setFormData] = useState<PropertyType>({
        review: 0,
        name:"",
        description: "",
        price: 0,
        town: "",
        type: "",
        remarks: []
    });
    const [error, setError] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addNewProperty(formData)
            .catch(err => {
                if(err instanceof CanceledError)
                    return;
                setError(err);
            })
    }

    return (
        <main className="mainContainer">
            <div className="formText">
                {error && <p className="text-danger">{error}</p>}
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
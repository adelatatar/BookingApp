import React, {useState} from "react";
import './NewProperty.css'
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import properties from "../../consts/data";
import PropertyType from "../../types/PropertyType";

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
        debugger
        console.log(formData);
        properties.push(formData);
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
                        <input onChange={handleChange} type="text" name="location" />
                    </label> <br/>
                    <label>
                        What is the type of the property?
                    </label> <br/>
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <span>{"HOTEL"}</span>
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" />
                        <span>{"PENSION"}</span>
                    </label>
                    <button type="submit" className="newPropertyButton">Add Property</button>
                </form>
            </div>
        </main>
    );
}

export default NewProperty;
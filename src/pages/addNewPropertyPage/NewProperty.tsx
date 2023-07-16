import React, {useState} from "react";
import './NewProperty.css'
import HeaderComponent from "../../components/headerComponent/HeaderComponent";

function NewProperty() {
    interface newDataType {
        name:string,
        description: string,
        price: string,
        location: string
    }

    const [formData, setFormData] = useState<newDataType>({
        name:"",
        description: "",
        price: "",
        location: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <main className="mainContainer">
            <HeaderComponent/>
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
                        <span>{"Hotel"}</span>
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" />
                        <span>{"Pension"}</span>
                    </label>
                    <button type="submit" className="newPropertyButton">Add Property</button>
                </form>
            </div>
        </main>
    );
}

export default NewProperty;
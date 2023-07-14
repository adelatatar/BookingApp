import React from "react";
import './NewProperty.css'
import HeaderComponent from "../../components/headerComponent/HeaderComponent";

function NewProperty() {
    return (
        <div>
            <HeaderComponent/>
            <form className="addNewPropertyForm">
                <label>
                    Property Name:
                    <input type="text" name="name" />
                </label>
                <label>
                     Description:
                    <input type="text" name="description" />
                </label>
                <label>
                    Price:
                    <input type="text" name="price" />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" />
                </label>
                <label>
                    What is the type of the property?
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default NewProperty;
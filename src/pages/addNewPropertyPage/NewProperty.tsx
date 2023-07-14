import React from "react";
import './NewProperty.css'
import HeaderComponent from "../../components/headerComponent/HeaderComponent";

function NewProperty() {
    return (
        <main className="mainContainer">
            <HeaderComponent/>
            <div className="formText">
                <h1>Complete the next fields to add a new property:</h1>
            </div>
            <div className="addNewPropertyForm">
                <form>
                    <label>
                        Property Name:
                        <input type="text" name="name" />
                    </label> <br/>
                    <label>
                        Description:
                        <input type="text" name="description" />
                    </label> <br/>
                    <label>
                        Price:
                        <input type="text" name="price" />
                    </label> <br/>
                    <label>
                        Location:
                        <input type="text" name="location" />
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
                    <button className="newPropertyButton">Add Property</button>
                </form>
            </div>
        </main>
    );
}

export default NewProperty;
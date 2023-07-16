import React, {useState} from "react";
import './ViewPropertyPage.css'
import {useParams} from "react-router-dom";
import properties from "../../consts/data";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import Rating from '@mui/material/Rating';

function ViewPropertyPage() {
    const params = useParams();
    const [propertyId, setPropertyId] = useState(params.id ? parseInt(params.id) : null);
    const [value, setValue] = React.useState<number | null>(4);
    const foundProperty = properties.find((property) => property.id === propertyId);

     return (
         <div className="mainContainer">
             <HeaderComponent />
             <div className = "propertyDetails" >
                 <h1>{foundProperty?.name}</h1>
                 <h4> Location: {foundProperty?.location} </h4>
                 <h4> Price: {foundProperty?.price}</h4>
                 <h3> Rate: {foundProperty?.rate}</h3>
                 <h3> {foundProperty?.description } </h3>
                 <h4> Comments: </h4>
             </div>
             <div className="reviewSection">
                 <h2> Do you want to leave a review? </h2>
                 <Rating
                     name="simple-controlled"
                     value={value}
                     onChange={(event, newValue) => {
                         setValue(newValue);
                     }}
                 /> <br/>
                 <textarea className="commentSection" placeholder="Leave a comment"/> <br/>
                 <button className = "submitButton" type="submit">Submit</button>
             </div>

         </div>
    );
}

export default ViewPropertyPage;
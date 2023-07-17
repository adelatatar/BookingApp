import React, {useState} from "react";
import './ViewPropertyPage.css'
import {useParams} from "react-router-dom";
import properties from "../../consts/data";
import Rating from '@mui/material/Rating';
import ExpandableTextField from "../../components/expandableTextField/ExpandableTextField";

function ViewPropertyPage() {
    const params = useParams();
    const [propertyId, setPropertyId] = useState(params.id ? parseInt(params.id) : null);
    const [value, setValue] = React.useState<number | null>(4);
    const foundProperty = properties.find((property) => property.id === propertyId);

     return (
         <div className="mainContainer">
             <div className = "propertyDetails" >
                 <h1>{foundProperty?.name}</h1>
                 <h6> Location: {foundProperty?.location} </h6>
                 <h5> Price: {foundProperty?.price}</h5>
                 <h5> Rate: {foundProperty?.rate}</h5>
                 <img src={foundProperty?.image} height="150" width="150"/>
                 <h5> Description Of The property: <ExpandableTextField>{foundProperty ? foundProperty.description : " "}</ExpandableTextField> </h5>
                 <h5> Comments: </h5>
             </div>
             <div className="reviewSection">
                 <h5> Do you want to leave a review? </h5>
                 <Rating
                     name="simple-controlled"
                     value={value}
                     onChange={(event, newValue) => {
                         setValue(newValue);
                     }}
                 /> <br/>
                 <textarea className="commentSection" placeholder="Leave a comment"/> <br/>
                 <button className = "btn btn-light" type="submit">Submit</button>
             </div>

         </div>
    );
}

export default ViewPropertyPage;
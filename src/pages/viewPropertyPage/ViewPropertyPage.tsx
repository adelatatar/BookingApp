import React, {useEffect, useState} from "react";
import './ViewPropertyPage.css'
import {useParams} from "react-router-dom";
import Rating from '@mui/material/Rating';
import ExpandableTextField from "../../components/expandableTextField/ExpandableTextField";
import PropertyType from "../../types/PropertyType";
import axios from "axios";

function ViewPropertyPage() {
    const params = useParams();
    const [propertyName, setPropertyId] = useState(params.name ? params.name : null);
    const [value, setValue] = React.useState<number | null>(4);
    const [foundProperty, setFoundProperty] = useState<PropertyType>();

    useEffect(() => {
        axios
            .get<PropertyType[]>(`http://192.168.123.25:9039/accommodation-units?name=${propertyName}`)
            .then(res => setFoundProperty(res.data[0]))
    }, [])

     return (
         <div className="mainContainer">
             <div className = "propertyDetails" >
                 <h1>{foundProperty?.name}</h1>
                 <h6> Location: {foundProperty?.town} </h6>
                 <h5> Price: {foundProperty?.price}</h5>
                 <h5> Rate: {foundProperty?.review}</h5>
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
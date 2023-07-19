import React, {FormEvent, useEffect, useRef, useState} from "react";
import './ViewPropertyPage.css'
import {useParams} from "react-router-dom";
import Rating from '@mui/material/Rating';
import ExpandableTextField from "../../components/expandableTextField/ExpandableTextField";
import PropertyType from "../../types/PropertyType";
import axios from "axios";

function ViewPropertyPage() {
    const params = useParams();
    const propertyName = params.name ? params.name : null;
    const [reviewValue, setReviewValue] = React.useState<number | null>(0);
    const [foundProperty, setFoundProperty] = useState<PropertyType>();
    const commRef = useRef<HTMLInputElement>(null);
    const reviewRef = useRef<HTMLInputElement>(null);
    const [comments, setComments] = useState<string[]>([]);
    const [newReview, setNewReview] = useState<boolean>(false);

    useEffect(() => {
        axios
            .get<PropertyType[]>(`http://192.168.123.25:9039/accommodation-units?name=${propertyName}`)
            .then(res => setFoundProperty(res.data[0]));
    }, [newReview, propertyName])

    ///accommodation-units?name=<current_name>&review=<1-5>&remarks=<[comments]>
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if(commRef.current !== null && reviewRef.current!=null) {
            axios
                .put(`http://192.168.123.25:9039/accommodation-units?name=${propertyName}&review=${reviewValue}&remarks=${comments}`)
                .then();
            setNewReview(!newReview);
        }
    }

     return (
         <div className="mainContainer">
             <div className = "propertyDetails" >
                 <h1>{foundProperty?.name}</h1>
                 <h6> Location: {foundProperty?.town} </h6>
                 <h5> Price: {foundProperty?.price}</h5>
                 <h5> Rate: {foundProperty?.review}</h5>
                 <h5> Description Of The property: <ExpandableTextField>{foundProperty ? foundProperty.description : " "}</ExpandableTextField> </h5>
                 <h5> Comments: </h5>
                 {foundProperty?.remarks.map(remark => <p>{remark}</p>)}
             </div>
             <form onSubmit={handleSubmit} className="reviewSection">
                 <h5> Do you want to leave a review? </h5>
                 <Rating ref={reviewRef}
                     name="simple-controlled"
                     value={reviewValue}
                     onChange={(event, newValue) => {
                         setReviewValue(newValue);
                     }}
                 /> <br/>
                 <input onChange={(event) => setComments([event.target.value])} ref={commRef} id="comment" name="comment" className="commentSection" placeholder="Leave a comment"/> <br/>
                 <button className = "btn btn-light" type="submit">Submit</button>
             </form>

         </div>
    );
}

export default ViewPropertyPage;
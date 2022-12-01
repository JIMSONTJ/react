import React from "react";
import Card from "./Card";
import "./ThankYou.css";
import tha from "../media/tha.jpg";
const ThankYou = ({rating}) => {
return(
    <Card>
        <div className="thankimg_container">
            <img src={tha} alt="" width="100px"height="100px"/>
        </div>
        <div className="selected">
            <p>You selected {rating}out of 5</p>
        </div>

    <h2 className="title">Thank you</h2>
    <p className="text">
    we appreciate you taking the time to give a rating.If you ever need more support,
    dont hesitate to get in touch
    </p>

</Card>






);
};
export default ThankYou;
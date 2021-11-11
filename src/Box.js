import React from "react";
import "./Box.css";
// import { v4 as uuid } from 'uuid';

const Box = ({height="50px", width="50px", backgroundColor="#555", removeBox, boxId}) => {//can I have default css style then change in react?
    

    return (
        <div className="Box">
            <div className="BoxHolder"
                style={{height: height, 
                width: width,
                backgroundColor:backgroundColor}}>
            </div>
            <button className="BoxButton" onClick={() => removeBox(boxId)}>X</button>
        </div>
        // remove box does nothing right now
    );
};

export default Box;

//pros of react forms
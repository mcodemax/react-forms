import React, { useState } from "react";
import "./Box.css";

const Box = ({height="50px", width="50px", backgroundColor="#555", removeBox}) => {//can I have default css style then change in react?
    const [showBox, setShowBox] = useState(true); 
    //might need to move this piece of state up a level^

    return showBox ? (
        <div className="Box">
            <div  className="BoxHolder"
                style={{height: height, 
                width: width,
                backgroundColor:backgroundColor}}>
            </div>
            <button className="BoxButton" onClick={() => removeBox()}>X</button>
        </div>
        // remove box does nothing right now
    ) : <></>;
};

export default Box;

//pros of react forms
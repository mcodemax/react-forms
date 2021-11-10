import React, { useState } from "react";
import "./BoxList.css";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    //an ele in boxes is an obj:{height, width, backgroundColor}
    const [boxes, setBoxes] = useState([]); 
    

    /**func to remove box components */
    const removeBox = () => {
        //pass removeBox to Box component, then remove an instance of Box

    };

    /**func to add box components */
    const addBox = () => {
        //add {height: , width: , backgroundColor: , id: } to boxes
        //when form submitted

    };

    return (
        <>
            <div className="BoxList">
                {boxes.map( (box, ind) => {
                    <Box key={ind} {...boxes[ind]}/>
                })}
                {/* add box form below here */}
                <NewBoxForm />
            </div>
        </>
    )
};

export default BoxList;


/*

func(
    //something has 5 elements
    something.map(
        //adds 1 to the state variable
    )
)
*/
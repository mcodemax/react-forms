import React, { useState } from "react";
import "./BoxList.css";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

const dummyBoxes = [
    {height:"50px", width:"50px", backgroundColor:"#555", boxId: uuid()}, 
    {height:"50px", width:"50px", backgroundColor:"#555", boxId: uuid()}, 
    {height:"50px", width:"50px", backgroundColor:"#555", boxId: uuid()}, 
    {height:"50px", width:"50px", backgroundColor:"#555", boxId: uuid()}, 
    {height:"50px", width:"50px", backgroundColor:"#555", boxId: uuid()}]

console.log(dummyBoxes)

const BoxList = () => {
    //an ele in boxes is an obj:{height, width, backgroundColor}
    const [boxes, setBoxes] = useState([]); 
    
    //Don’t change the state in the main body of the component. otherwise you get unlimited 
    // re-renders ask why

    /**func to remove box components */
    const removeBox = (boxId) => {
        //pass removeBox to Box component, then remove an instance of Box
        const newBoxes = boxes.filter( (box) => box.boxId !== boxId )
        setBoxes(newBoxes);
    };

    /**func to add box components */
    const addBox = (box) => {
        //add {height: , width: , backgroundColor: , id: } to boxes
        //when form submitted
        
        const newBoxes = [...boxes, box];
        setBoxes(newBoxes);
    };

    return (
        <>
            <div className="BoxList">
                {boxes.map( (box, ind) => {
                    return (
                        <Box key={ind} 
                        {...boxes[ind]} removeBox={removeBox} boxId={box.boxId}/>)
                })}
                <NewBoxForm addBox={addBox}/>
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
import React from "react";
import { render, fireEvent } from "@testing-library/react"; //but none is installed. You must install peer dependencies yourself. npm warning after installing react testing library
import BoxList from "./BoxList";
import { v4 as uuid } from 'uuid';

const dummyBoxes = [
    {height:"50px", width:"50px", backgroundColor:"#555", boxId: uuid()}, 
    {height:"50px", width:"50px", backgroundColor:"#555", boxId: uuid()}, 
    {height:"50px", width:"50px", backgroundColor:"#555", boxId: uuid()}, 
    {height:"50px", width:"50px", backgroundColor:"#555", boxId: uuid()}, 
    {height:"50px", width:"50px", backgroundColor:"#555", boxId: uuid()}]

it("should render", () => {
  render(<BoxList/>)
});

it("matches snapshot", () => {
    const obj = {
                  //get a boxList to render //maybe force dummyBoxes in BoxList somehow
                };
    const { asFragment } = render(<BoxList {...obj}/>);
    //maybe shove a mock f() in there so testing works
    //or alter BoxList to accept a preform'd box array so you don't have to worry about it
    expect(asFragment()).toMatchSnapshot();
});

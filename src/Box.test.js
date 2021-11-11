import React from "react";
import { render, fireEvent } from "@testing-library/react"; //but none is installed. You must install peer dependencies yourself. npm warning after installing react testing library
import Box from "./Box";
import { v4 as uuid } from 'uuid';

it("should render", () => {
  render(<Box/>)
});

it("matches snapshot", () => {
    const obj = {
                    height:"100px",
                    width: "50px",
                    backgroundColor: blue,
                    boxId: 20 //don't use uuid b/c it's randomized randomized
                };
    const { asFragment } = render(<Box {...obj}/>);
    expect(asFragment()).toMatchSnapshot();
});

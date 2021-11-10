import React from "react";
import { render, fireEvent } from "@testing-library/react"; //but none is installed. You must install peer dependencies yourself. npm warning after installing react testing library
//prob need to import other methods to test this.
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

it("should render", () => {
  render(<NewBoxForm/>)
});

it("matches snapshot", () => {
    const obj = {
                    height:"100px",
                    width: "50px",
                    backgroundColor: blue,
                    boxId: 20 //don't use uuid for snapshots since randomized
                };
    const { asFragment } = render(<NewBoxForm {...obj}/>);
    expect(asFragment()).toMatchSnapshot();
});

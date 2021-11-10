import React from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({addBox}) => {
    return (
        <form className="NewBoxForm">
            <label htmlFor="width">Width</label><br/>
            <input type="text" id="width" name="width"/><br/>
            <label htmlFor="height">Height</label><br/>
            <input type="text" id="height" name="height" /><br/>
            <label htmlFor="backgroundColor">Background Color of Box</label><br/>
            <input type="text" id="backgroundColor" name="backgroundColor" /><br/>
            <input type="submit" id="submit" name="submit" />
            
        </form>
    )
};

export default NewBoxForm;
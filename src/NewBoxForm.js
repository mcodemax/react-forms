import React, { useState } from "react";
import "./NewBoxForm.css";
import { v4 as uuid } from 'uuid';


/** Have not implemented validation to form,
 * If implementing implement both validaiton to both forms and 
 * logic.
 */
const NewBoxForm = ({addBox}) => {
    const emptyForm = {
        backgroundColor:'',
        width:'',
        height:''
    };
    const [formData, setFormData] = useState(emptyForm);
    
    const handleFormChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    //https://reactjs.org/docs/uncontrolled-components.html

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        let { width, height, backgroundColor } = evt.target;
        
        width = width.value.concat('px');
        height = height.value.concat('px');
        backgroundColor = backgroundColor.value;
        const boxId = uuid();

        addBox({ width, height, backgroundColor, boxId })
        
        setFormData(emptyForm);
    };
    return (
        <form className="NewBoxForm" onSubmit={onFormSubmit}>
            <label htmlFor="width">Width</label><br/>
            <input type="text" id="width" name="width" value={formData.width} onChange={handleFormChange}/><br/>
            <label htmlFor="height">Height</label><br/>
            <input type="text" id="height" name="height" value={formData.height} onChange={handleFormChange}/><br/>
            <label htmlFor="backgroundColor">Background Color of Box</label><br/>
            <input type="text" id="backgroundColor" name="backgroundColor" value={formData.backgroundColor} onChange={handleFormChange}/><br/>
            <input type="submit" id="submit" name="submit" />
        </form>
    )
};

export default NewBoxForm;
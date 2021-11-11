import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({addTodo}) => {
    const emptyForm = {
        newTodo: ''
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
        let { newTodo } = evt.target;
        
        newTodo = newTodo.value;
        const id = uuid();

        addTodo({ todo: newTodo, id })
        
        setFormData(emptyForm);
    };
    return (
        <form className="NewBoxForm" onSubmit={onFormSubmit}>
            <label htmlFor="newTodo">Add a New Todo</label><br/>
            <input type="text" id="newTodo" name="newTodo" value={formData.newTodo} onChange={handleFormChange}/><br/>
            <input type="submit" id="submit" name="submit" />
        </form>
    );
};

export default NewTodoForm;

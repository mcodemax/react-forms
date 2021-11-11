import React from "react";

// import { v4 as uuid } from 'uuid';

const Todo = ({todo, ind, id, removeTodo}) => {
    return (
        <div>
            {`${ind + 1}: ${todo}`}
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    );
};

export default Todo;

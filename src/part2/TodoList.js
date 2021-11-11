import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = ({todo, id}) => {
        setTodos(todos => [...todos, {todo, id}]);
    }

    const removeTodo = (id) => {
        const newTodos = todos.filter(todo => {
            return todo.id !== id
        })
        setTodos(newTodos);
    }
    return (
        <>
        <div>
            {todos.map( (todo, ind) => (
                <Todo id={todo.id} ind={ind} key={uuid()} todo={todo.todo} removeTodo={removeTodo}/>
            ))}
        </div>
        <div>
            <NewTodoForm addTodo={addTodo}/>
        </div>
        </>
        // remove TodoList does nothing right now
    );
};

export default TodoList;

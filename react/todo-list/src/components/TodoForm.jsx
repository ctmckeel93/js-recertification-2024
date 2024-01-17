import { useState } from "react";

const TodoForm = ({setTodos}) => {

    const initialTodo = {
        id: crypto.randomUUID(),
        value: "",
        checked: false
    }
    const [todo, setTodo] = useState(initialTodo);
    const handleTodo = (e) => {
        let value = e.target.value
        setTodo({...todo, value: value});
    }

    const addTodo = (e) => {
        e.preventDefault();

        setTodos(prevState => [...prevState, todo]);
        setTodo(initialTodo);

    }
    return (
        <form onSubmit={addTodo}>
            <label htmlFor="todo" >Todo:</label>
            <input type="text" value={todo.value} onChange={handleTodo} />
            <button>Submit</button>
        </form>
    )
}

export default TodoForm;
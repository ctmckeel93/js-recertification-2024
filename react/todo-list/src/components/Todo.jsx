import { useState } from "react";

const Todo = (props) => {

    const {todo,setTodos} = props;
    const [todoStyle, setTodoStyle] = useState("none");
    const handleCheck = (e) => {
        setTodoStyle(e.target.checked ? "line-through": "none")
        setTodos(prevState => {
            const updatedTodos = prevState.map((t) => {
                if (t.id === todo.id) {
                    t.checked = e.target.checked
                }
                return t;
            })
            return updatedTodos;
        })
    }

    const deleteTodo = () => {

        if (todo.checked) {
            setTodos(prevState => {
                return prevState.filter(t => t.id !== todo.id); 
            })
        } else {
            alert("You must complete this task before deleting")
        } 
    }
    return (
        <div>
            <input id="todo" name="todo"  onChange={handleCheck} type="checkbox" checked={todo.checked} />
            <label style={{textDecoration: todoStyle}} htmlFor="todo">{todo.value}</label>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default Todo;
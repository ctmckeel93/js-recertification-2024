import { useState } from "react";

const Todo = ({todo, index, setTodos}) => {

    const [currentTodo, setCurrentTodo] = useState(todo);
    const handleCheck = (e) => {
        e.preventDefault();
        setCurrentTodo({...currentTodo, checked: !currentTodo.checked});
        // setTodos(prevState => {
        //     const todosCopy = structuredClone(prevState);
        //     todosCopy[index] = {...todo, checked: !todo.checked};
        //     return todosCopy;
        // })
    }
    return (
        <div>
            <input onChange={handleCheck} type="checkbox" checked={currentTodo.checked} />
            <span>{currentTodo.value}</span>
        </div>
    )
}

export default Todo;
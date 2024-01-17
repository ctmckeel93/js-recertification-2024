
import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {

  const [todos, setTodos] = useState([]);
    

    return (
        <>
            <TodoForm setTodos={setTodos}/>
            {todos.length > 0 && todos.map((todo) => (
              <Todo key={todo.id} todo={todo} setTodos={setTodos}/>
            ))}
        </>
    );
}

export default App;

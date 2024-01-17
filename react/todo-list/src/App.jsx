
import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {

  const [todos, setTodos] = useState([]);
    

    return (
        <>
            <TodoForm setTodos={setTodos}/>
            {todos.map((todo, i) => (
              <Todo key={i} todo={todo} index={i} setTodos={setTodos}/>
            ))}
        </>
    );
}

export default App;

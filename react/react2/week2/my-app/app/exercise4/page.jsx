"use client";

import MyProvider from "./MyProvider";
import { ACTIONS } from "./MyProvider";
import { useContext, useState } from "react";
import { TodoContext } from "./Context";

function Content() {
  const { todos, dispatch } = useContext(TodoContext);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  }

return (
    <div
        style={{
            background: "#222",
            color: "#fff",
            minHeight: "100vh",
            padding: "10px",
        }}
    >
        <h1>Exercise 4 - Create a TodoContext with Reducer</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginRight: "0.5rem" }}
            />
            <button type="submit">ADD TODO</button>
        </form>
        <ul style={{ paddingLeft: 0 }}>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    style={{
                        textDecoration: todo.complete ? "line-through" : "none",
                        marginBottom: "0.5rem",
                        listStyle: "none",
                    }}
                >
                    {todo.name}
                    <button
                        style={{ marginLeft: "0.5rem" }}
                        onClick={() => dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id } })}
                    >
                        REMOVE TODO
                    </button>
                    <button
                        style={{ marginLeft: "0.5rem" }}
                        onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
                    >
                        MARK COMPLETE
                    </button>
                </li>
            ))}
        </ul>
    </div>
);
}

export default function Page() {
  return (
    <MyProvider>
      <Content />
    </MyProvider>
  );
}

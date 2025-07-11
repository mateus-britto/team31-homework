"use client";

import { useReducer } from "react";
import { TodoContext } from "./Context";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  REMOVE_TODO: "remove-todo",
  TOGGLE_TODO: "toggle-todo",
};

function addTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, addTodo(action.payload.name)];
    case ACTIONS.REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    default:
      return todos;
  }
}

export default function MyProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, []);

  const value = {
    todos,
    dispatch,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

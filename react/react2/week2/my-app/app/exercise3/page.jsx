"use client";

import MyProvider from "./MyProvider";
import { useContext } from "react";
import { CounterContext } from "./Context";
import { ACTIONS } from "./MyProvider";

function Content() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "#fff",
        height: "100vh",
        padding: "10px",
      }}
    >
      <h1>Exercise 3 - CounterContext with Reducer</h1>
      <button style={{ fontSize: "2rem" }} onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        -
      </button>
      <span style={{ fontSize: "2rem", margin: "10px" }}>{state.count}</span>
      <button style={{ fontSize: "2rem" }} onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        +
      </button>
    </div>
  );
}

export default function page() {
  return (
    <MyProvider>
      <Content />
    </MyProvider>
  );
}

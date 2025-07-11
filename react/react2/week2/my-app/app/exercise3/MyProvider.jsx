"use client";

import { useReducer, useState } from "react";
import { CounterContext } from "./Context";

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      state;
  }
}

export default function MyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const value = {
    state,
    dispatch,
  };

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
}

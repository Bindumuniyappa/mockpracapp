import React, { useReducer } from "react";
import { Action } from "../CommonComp/Action";
import { reducer } from "../CommonComp/ReducerF";

const CounterReducer = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <p>Count: {state?.count}</p>
      <button onClick={() => dispatch(Action.ADD_ITEM)}>Increment</button>
      <button onClick={() => dispatch(Action.REMOVE_ITEM)}>Decrement</button>
    </div>
  );
};

export default CounterReducer;

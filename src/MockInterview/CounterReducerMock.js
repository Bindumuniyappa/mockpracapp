import React, { useReducer, useState } from "react";
import { Action } from "./ActionMock";
import { reducer } from "./ReducerFunct";

const CounterReducerMock = () => {
  const [data, setData] = useState("");
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter Reducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch(Action.Incre)}>Increment</button>
      <button onClick={() => dispatch(Action.Decre)}>Decrement</button>

      <div>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <h4>{data}</h4>
      </div>
    </div>
  );
};

export default CounterReducerMock;

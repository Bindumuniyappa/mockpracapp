import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/CounterSlice";

const CounterComp = () => {
  const data = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {data}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default CounterComp;

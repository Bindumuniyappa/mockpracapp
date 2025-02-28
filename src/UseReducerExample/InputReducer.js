import React, { useReducer } from "react";
import { ReducerFunctInput } from "./ReducerFunctInput";

const InputReducer = () => {
  const initialState = { value: "" };
  const [state, dispatch] = useReducer(ReducerFunctInput, initialState);
  return (
    <div>
      InputReducer
      <input type="text" />
    </div>
  );
};

export default InputReducer;

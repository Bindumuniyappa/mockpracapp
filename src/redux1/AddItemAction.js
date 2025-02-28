import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CounterSlice";

const AddItemAction = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem("bindu"));
  };

  return (
    <div>
      AddItemAction:
      <button onClick={handleClick}>AddItem</button>
    </div>
  );
};

export default AddItemAction;

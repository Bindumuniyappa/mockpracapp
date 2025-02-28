import React from "react";
import { useSelector } from "react-redux";

const AddItemComp = () => {
  const data = useSelector((store) => store.addItem.items);
  return <div>AddItemComp:{data}</div>;
};

export default AddItemComp;

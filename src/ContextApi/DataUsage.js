import React, { useContext } from "react";
import UserContext from "./UserContext";

const DataUsage = () => {
  const data = useContext(UserContext);
  console.log(data);

  return (
    <div>
      DataUsage:{data.id}---------{data.name}
    </div>
  );
};

export default DataUsage;

import React from "react";
import UseCustom from "./UseCustom";

const ShowData = () => {
  const datas = UseCustom();
  const dataToBeShown = datas.data.data.data;
  console.log(datas.data.data.data);

  return (
    <div>
      ShowData:
      {dataToBeShown.map((ele) => {
        return <div>{ele.Population}</div>;
      })}
    </div>
  );
};

export default ShowData;

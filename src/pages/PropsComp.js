import React from "react";

const PropsComp = (props) => {
  console.log(props);

  return (
    <div>
      {props.props.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default PropsComp;

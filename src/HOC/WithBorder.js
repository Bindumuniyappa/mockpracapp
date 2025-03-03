import React from "react";

const WithBorder = (WrappedComponent) => {
  return (props) => (
    <div style={{ border: "2px solid red", padding: "4px" }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default WithBorder;

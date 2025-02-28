import React, { useState } from "react";

const FormPrac = () => {
  const [data, setData] = useState("");
  const [store, setStore] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
    setStore([...store, data]);
    setData("");
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="enter something"
          onChange={handleChange}
          value={data}
        />
        <button>Submit</button>
        {/* <h1>{store}</h1> */}

        {store.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item}</h1>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default FormPrac;

import React, { useContext, useState } from "react";
import UserContext from "../CommonComp/UserContext";

const FormPage = () => {
  const [state, setState] = useState(0);
  const data = useContext(UserContext);
  const [d, sd] = useState(data);
  console.log(d);

  //   const [data, setData] = useState({
  //     name: "",
  //     email: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setData((prevData) => ({ ...prevData, [name]: value }));
  //   };

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     console.log(data);
  //   };

  return (
    <div>
      <h1>{d.id}</h1>
      <h1>count:{state}</h1>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => setState(state - 1)}>Decrement</button>

      {/* <form onSubmit={handleClick}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form> */}
    </div>
  );
};

export default FormPage;

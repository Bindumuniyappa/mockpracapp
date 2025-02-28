import React, { useState } from "react";

const FormPage2 = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSubmitted(state);
    // const { name, value } = e.target;
    // setState((state) => ({ ...state, [name]: value }));
    console.log(state);
    setState({ firstName: "", lastName: "" });
  };

  return (
    <div>
      <h1>Form Page 2</h1>
      <form onSubmit={handleClick}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h1>{submitted.lastName}</h1>
          <h1>{submitted.firstName}</h1>
        </div>
      )}
      //the state is in string format but map is not string method so i have
      used object method to take th values...
      {/* {Object.entries(state).map(([key, value], ind) => {
        return (
          <div key={ind}>
            <h1>{value}</h1>
          </div>
        );
      })} */}
    </div>
  );
};

export default FormPage2;

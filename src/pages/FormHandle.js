import React, { useState } from "react";

const FormHandle = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: "", email: "" });
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {submittedData.map((ele, ind) => {
          return (
            <div key={ind}>
              <table border={2}>
                <tbody>
                  <tr>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                  </tr>
                </tbody>
              </table>
              {/* {ele.name}
              <p>{ele.email}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormHandle;

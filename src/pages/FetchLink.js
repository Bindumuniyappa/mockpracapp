import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchLink = () => {
  const [state, setState] = useState([]);

  const url =
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

  const FetchApi = async () => {
    const response = await axios.get(url);
    console.log(response.data.data);
    setState(response.data.data);
  };

  // useEffect(() => {
  //   FetchApi();
  // }, []);

  return (
    <div>
      FetchLink:
      <button onClick={FetchApi}>Fetch Data</button>
      {state.map((item, ind) => {
        return (
          <div>
            <tr style={{ border: "2px" }}>
              <td>{item.Nation}</td>
              <td>{item.Population}</td>
            </tr>
            {/* <li>{item.Nation}</li>
            <li>{item.Population}</li> */}
          </div>
        );
      })}
    </div>
  );
};

export default FetchLink;

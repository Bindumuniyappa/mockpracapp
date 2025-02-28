import axios from "axios";
import React, { useEffect, useState } from "react";

const UseCustom = () => {
  const [data, setData] = useState([]);

  const url =
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

  const fetchData = async () => {
    const response = await axios.get(url);
    setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { data };
};

export default UseCustom;

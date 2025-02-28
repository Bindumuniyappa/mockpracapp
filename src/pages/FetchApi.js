import React, { useEffect } from "react";
import axios from "axios";

const FetchApi = () => {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      //   const data = await response.json();
      console.log(data);

      setData(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div>
            {item.id}-------
            {item.firstName}
          </div>
        );
      })}
    </div>
  );
};

export default FetchApi;

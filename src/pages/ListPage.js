import { useState, useEffect } from "react";
import List from "../components/List";
const axios = require("axios");

const ListPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEntries();
  }, []);

  async function fetchEntries() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      setError("Something went wrong!");
    }

    setIsLoading(false);
  }

  if (isLoading) {
    return <p>Fetching data...</p>;
  } else if (!isLoading && error) {
    return <p>{error}</p>;
  }
  return <List list={data} />;
};

export default ListPage;

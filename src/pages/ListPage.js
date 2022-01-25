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
      setData(response.data);
    } catch (err) {
      setError("Something went wrong!");
    }

    setIsLoading(false);
  }

  return (
    <div className="page-list">
      <h2>Current users</h2>
      {isLoading && <p>Fetching data...</p>}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && <List list={data} />}
    </div>
  );
};

export default ListPage;

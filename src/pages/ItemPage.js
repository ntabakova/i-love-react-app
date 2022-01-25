import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import ListItem from "../components/ListItem";
const axios = require("axios");

const ItemPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setData(response.data);
    } catch (err) {
      setError("Something went wrong!");
    }

    setIsLoading(false);
  }, [params.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="page-item">
      <h2>User Details</h2>
      {isLoading && <p>Fetching data...</p>}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && <ListItem data={data} inPage={true} />}
    </div>
  );
};

export default ItemPage;

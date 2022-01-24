import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios");

const ItemPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
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
  }

  if (isLoading) {
    return <p>Fetching data...</p>;
  } else if (!isLoading && error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <h2>Details for {data.name} </h2>
      <div>Name: {data.name}</div>
      <div>Username: {data.username}</div>
      <div>Email: {data.email}</div>
      <div>City: {data.address ? data.address.city : ""}</div>
      <div>Phone: {data.phone}</div>
      <div>
        Website:
        <a href={`http://${data.website}`} target="_blank" rel="noreferrer">
          {data.website}
        </a>
      </div>
    </div>
  );
};

export default ItemPage;

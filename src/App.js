import React, { useState, useEffect } from "react";
import Card from "./Card";

const MyComponent = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      // Fetch data from the API
      const response = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const data = await response.json();
      console.log(data);
      setUserData(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        userData &&
        userData.map((user, id) => (
          <Card
            key={id}
            fname={user.name.first}
            lname={user.name.last}
            phoneno={user.phone}
            gender={user.gender}
            imglink={user.picture.large}
          />
        ))
      )}
    </>
  );
};

export default MyComponent;

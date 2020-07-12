import React, { useState, useEffect } from "react";
import axios from "axios";

const CheckDB = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/api/users", {
        withCredentials: true,
      })
      .then((d) => setUsers(d.data))
      .catch((err) => err);
  }, []);

  return (
    <div className="CheckDB">
      <h2>USERS FROM MY MONGO CLUSTER</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default CheckDB;

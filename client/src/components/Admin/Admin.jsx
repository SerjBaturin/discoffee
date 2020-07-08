import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./Users";
import "./style.scss";

const Admin = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios("http://jsonplaceholder.typicode.com/users")
      .then((users) =>
        setTimeout(() => {
          setUsers(users.data);
        }, 1000),
      )
      .catch((err) => err);
  }, []);

  return (
    <div className="admin">
      <div className="admin__container">
        <h2 className="admin__title">Hello, Admin!</h2>
        <Users users={users} />
      </div>
    </div>
  );
};

export default Admin;

import React, { useEffect } from "react";
import { connect } from "react-redux";

const CheckDB = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
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

const mapStateToProps = (state) => {
  return {
    users: state.getUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch({ type: "GET_USERS_ASYNC" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckDB);

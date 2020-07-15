import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import "./style.scss";

/**
 * Admin wrapper component.
 *
 * @param {array} users array from props
 * @param {function} getUsers method from props dispatching action into saga
 * @returns {JSX} admin wrapper component
 */
const Admin = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

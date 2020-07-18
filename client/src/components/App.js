import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Header, Footer } from "./layouts";
import Menu from "./Menu";
import Admin from "./Admin";
import Landing from "./Landing";
import "./style.scss";

const App = ({ user, getUser }) => {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Header name={user.name} />
        <Menu />
        <Route exact path="/" component={Landing} />
        <Route path="/admin" component={Admin} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.getUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch({ type: "GET_USER_ASYNC" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

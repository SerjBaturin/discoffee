import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header, Footer } from "./layouts";
import Menu from "./Menu";
import Admin from "./Admin";
import Landing from "./Landing";
import "./style.scss";

const App = ({ isLogged }) => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Menu />
      {isLogged === true ? <Redirect to="/admin" /> : null}
      <Route exact path="/" component={Landing} />
      <Route path="/admin" component={Admin} />
      <Footer />
    </div>
  </BrowserRouter>
);

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged.isLogged,
  };
};

export default connect(mapStateToProps)(App);

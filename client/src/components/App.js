import React from "react";
import { connect } from "react-redux";
import { Header, Footer } from "./layouts";
import Menu from "./Menu";
import Admin from "./Admin";
import Landing from "./Landing";
import "./style.scss";

const App = ({ isLogged }) => (
  <div className="app">
    <Header />
    <Menu />
    {isLogged ? <Admin /> : <Landing />}
    <Footer />
  </div>
);

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged.isLogged,
  };
};

export default connect(mapStateToProps)(App);

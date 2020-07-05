import React from "react";
import { connect } from "react-redux";
import { Header, Footer } from "./layouts";
import Menu from "./Menu";
import Landing from "./Landing";
import "./style.scss";

const App = (props) => (
  <div className="app">
    <Header />
    <Menu />
    <Landing />
    <Footer />
  </div>
);

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.toggleMenu,
  };
};

export default connect(mapStateToProps)(App);

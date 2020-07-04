import React from "react";
import { connect } from "react-redux";
import { Header, Footer } from "./layouts";
import Landing from "./Landing";
import "./style.scss";

const App = (props) => (
  <div className="app">
    <Header />
    <div className="container">
      <Landing />
    </div>
    <Footer />
  </div>
);

const mapStateToProps = (state) => {
  return {
    test: state.test,
  };
};

export default connect(mapStateToProps)(App);

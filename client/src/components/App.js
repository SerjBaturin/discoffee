import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./layouts";
import Menu from "./Menu";
import Admin from "./Admin";
import Landing from "./Landing";
import "./style.scss";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/admin" component={Admin} />
      </Switch>
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

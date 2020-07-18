import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header, Footer } from "./layouts";
import Menu from "./Menu";
import Admin from "./Admin";
import Landing from "./Landing";
import "./style.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Menu />
        <Route exact path="/" component={Landing} />
        <Route path="/admin" component={Admin} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};


export default App

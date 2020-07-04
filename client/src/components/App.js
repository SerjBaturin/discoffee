import React from "react";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <h1>{props.test}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    test: state.test,
  };
};

export default connect(mapStateToProps)(App);
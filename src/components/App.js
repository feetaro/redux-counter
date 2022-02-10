import React, { Component } from "react";
import { connect } from "react-redux";
//import { increment, decrement } from "../actions";
import * as Actions from "../actions";

//const App = ({ value, incre, decre }) => {
//  return (
//    <>
//      <div>value: {value}</div>
//      <button onClick={incre}>+1</button>
//      <button onClick={decre}>-1</button>
//    </>
//  );
//};

class App extends Component {
  render() {
    return (
      <>
        <div>value: {this.props.value}</div>
        <button onClick={this.props.incre}>+1</button>
        <button onClick={this.props.decre}>-1</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { value: state.count.value };
};

//const mapDispatchToProps = (dispatch) => ({
//  incre: () => dispatch(Actions.increment()),
//  decre: () => dispatch(Actions.decrement())
//});

const mapDispatchToProps = (dispatch) => {
  return {
    incre: () => dispatch(Actions.increment()),
    decre: () => dispatch(Actions.decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

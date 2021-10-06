import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

//class App extends Component {
//  render() {
//    const props = this.props;
const App = ({ value, increment, decrement }) => {
  return (
    <>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
  // }
};

const mapStateToProps = (state) => ({ value: state.count.value });
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

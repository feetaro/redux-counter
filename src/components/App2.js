import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../actions";

class App extends Component {
  render() {
    return (
      <>
        <div>value: {this.props.value}</div>
        {/*
        <button onClick={this.props.incre}>+1</button>
        <button onClick={this.props.decre}>-1</button>
*/}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { value: state.count.value };
};

//const mapDispatchToProps = (dispatch) => {
//  return {
//    incre: () => dispatch(Actions.increment()),
//    decre: () => dispatch(Actions.decrement())
//  }
//};

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps)(App);

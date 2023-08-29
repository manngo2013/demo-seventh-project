import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h3>Counter App</h3>
        <form>
          <input type="button" value="+" />
          {this.props.count}
          <input type="button" value="-" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer.initCount,
  };
};

export default connect(mapStateToProps)(Counter);

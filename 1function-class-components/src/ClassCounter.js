import React, { Component } from "react";
// Class Component

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <header className="app__header">
          <h3>Counter below is built with Class Component</h3>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <h3>The count is : {this.state.count}</h3>
        </header>
      </div>
    );
  }
}

export default ClassCounter;

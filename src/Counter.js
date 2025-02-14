import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
    };
    this.handleDecremnt = this.handleDecremnt.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecremnt() {
    this.setState((curState) => {
      return {
        count: curState.count - 1,
      };
    });
  }

  handleIncrement() {
    this.setState((curState) => {
      return {
        count: curState.count + 1,
      };
    });
  }

  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecremnt}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;

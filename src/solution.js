import React, { Component } from "react";

class Solution extends Component {
  constructor() {
    super();
    this.state = {
      time: 1
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.startClock, 1000);
  }

  render() {
    return (
      <div>
        Seconds:
        {this.state.time % 15 === 0
          ? "FizzBuzz"
          : this.state.time % 5 === 0
          ? "Buzz"
          : this.state.time % 3 === 0
          ? "Fizz"
          : this.state.time}
      </div>
    );
  }

  startClock = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };
}

export default Solution;

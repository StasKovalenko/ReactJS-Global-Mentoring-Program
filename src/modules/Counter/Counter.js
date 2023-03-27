import React from "react";
import Button from "../Button/Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value : props.initialValue || 0 };
  }

  handleDecrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  }

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  }

  render () {
    return (
      <>
      <div className="counter_container">
        <h1>Counter component</h1>
        <Button btnText={'Decrement'} btnEvent={this.handleDecrement} dataCy={'decrement'}/>
        <span className="count_value">{this.state.value}</span>
        <Button btnText={'Increment'} btnEvent={this.handleIncrement} dataCy={'increment'}/>
      </div>
      </>
    )
  }
}

export default Counter;

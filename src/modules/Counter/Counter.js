import React from "react";
import Button from "../Button/Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.btnstyle = props.btnstyle;
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
        <Button btntext={'Decrement'} onClick={this.handleDecrement} datacy={'decrement'} btnstyle={this.btnstyle}/>
        <span className="count_value">{this.state.value}</span>
        <Button btntext={'Increment'} onClick={this.handleIncrement} datacy={'increment'} btnstyle={this.btnstyle}/>
      </div>
      </>
    )
  }
}

export default Counter;

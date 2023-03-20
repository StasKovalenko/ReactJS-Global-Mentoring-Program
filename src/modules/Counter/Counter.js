import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value : props.value || 0 };
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
    return React.createElement(
      'div',
      { className: 'counter_container' },
        React.createElement('h1', null, 'Counter component'),
        React.createElement('button', { className: 'btn', onClick: this.handleDecrement, } , 'Decrement'),
        React.createElement('span', { className: 'count_value' }, `${this.state.value}`),
        React.createElement('button', { className: 'btn' , onClick: this.handleIncrement }, 'Increment'),
    )
  }
}

export default Counter;

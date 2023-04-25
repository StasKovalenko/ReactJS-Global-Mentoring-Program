import React from 'react';
import Button from '../modules/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  btntext: 'Submit',
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnStyle: 'secondary',
  btntext: 'Reset',
};

export const Decrement = Template.bind({});
Decrement.args = {
  btntext: 'Decrement',
};

export const Increment = Template.bind({});
Increment.args = {
  btntext: 'Increment',
};

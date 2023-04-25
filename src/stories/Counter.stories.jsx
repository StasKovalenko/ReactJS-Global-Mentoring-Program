import React from 'react';

import Counter from '../modules/Counter/Counter';

export default {
  title: 'Example/Counter',
  component: Counter, 
};

const Template = (args) => <Counter {...args} />;

export const InitialValueDefault = Template.bind({});
InitialValueDefault.args = {
  initialValue: 0,
};

export const InitialValueFromProps = Template.bind({});
InitialValueFromProps.args = {
  initialValue: '5',
  btnstyle: 'secondary'
};
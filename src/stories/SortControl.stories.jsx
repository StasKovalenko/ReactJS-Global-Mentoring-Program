import React from 'react';
import SortControl from '../modules/SortControl/SortControl';

export default {
  title: 'Example/SortControl',
  component: SortControl,
};

export const Default = () => (
  <SortControl />
);
Default.storyName = 'Default SortControl';
Default.parameters = {
  info: {
    text: 'The default SortControl component',
  },
};

export const WithSelectedValue = () => (
  <div style={{background: "red"}}>
    <SortControl selectedValue="Title" />
  </div>
);
WithSelectedValue.storyName = 'SortControl with RedBackground';


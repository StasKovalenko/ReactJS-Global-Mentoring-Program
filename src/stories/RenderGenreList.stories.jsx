import React from 'react';
import RenderGenreList from '../modules/GenreSelect/components/RenderGenreList';

import '../modules/GenreSelect/GenreSelect.css';

export default {
  title: 'Example/RenderGenreItem',
  component: RenderGenreList,
  
};

const Template = (args) => <RenderGenreList {...args} />;

export const NotSelected = Template.bind({});
NotSelected.args = {
};

export const AllSelected = Template.bind({});
AllSelected.args = {
  active: 'active',
};
import React from 'react';
import RenderGenreList from '../modules/GenreSelect/components/RenderGenreList';

import '../modules/GenreSelect/GenreSelect.css';

export default {
  title: 'Example/RenderGenreItem',
  component: RenderGenreList,
  
};

const Template = (args) => <RenderGenreList {...args} />;

export const CustomGenres = Template.bind({});
CustomGenres.args = {
  genres: ["all", "Cartoon", "Documental", "Sitcom", "Historical"],
  active: 'active',
};

export const AllSelected = Template.bind({});
AllSelected.args = {
  active: 'active',
};
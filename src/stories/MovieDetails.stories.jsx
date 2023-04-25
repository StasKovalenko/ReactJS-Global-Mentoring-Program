import React from 'react';
import MovieDetails from '../modules/MovieDetails/MovieDetails';

export default {
  title: 'Example/MovieDetails',
  component: MovieDetails, 
};

const Template = (args) => <MovieDetails {...args} />;

export const CustomMovie = Template.bind({});
  CustomMovie.args = {
    movie: {
      poster_path: "https://image.tmdb.org/t/p/w500/jABswtfPt03TWjfJnUJ3HmMWWjT.jpg",
      title: "NAmsadasda",
      genres: ["Criminal","Not film"],
      vote_average: 7.6,
      release_date: "2025",
      runtime: 2444,
      overview:" Release Date"
    }
};

export const NoPoster = Template.bind({});
  NoPoster.args = {
    movie: {
      title: "The Shawshank Redemption",
      genres: ["Drama", "Crime"],
      vote_average: 8.7,
      release_date: "1994-09-23",
      runtime: 142,
      overview: " the double murder of his wife and her love"
  }
};


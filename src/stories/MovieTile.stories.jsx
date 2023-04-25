import React from 'react';
import MovieTile from '../modules/MovieTile/MovieTile';

import '../modules/MovieTile/MovieTile.css'

export default {
  title: 'Example/MovieTile',
  component: MovieTile, 
};

const Template = (args) => <MovieTile {...args} />;

export const CustomMovie = Template.bind({});
CustomMovie.args = {
  movie: {
    id: 16690,
    title: "Return to Never Land",
    tagline: "The Classic Continues",
    vote_average: 6.1,
    vote_count: 423,
    release_date: "2002-02-14",
    poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    overview: "The classic tale of 'Peter Pan' continues in Disney's sequel 'Return to Never Land'. In 1940 on a world besieged by World War II, Wendy, now grown up, has two children, one of them is her daughter, Jane.",
    budget: 20000000,
    revenue: 109862682,
    genres: [
        "Adventure",
        "Fantasy",
        "Animation",
        "Family"
    ],
    runtime: 72
  }

};

export const MovieLimitedInfo = Template.bind({});
MovieLimitedInfo.args = {
  movie: {
    title: "RV",
    poster_path: "https://image.tmdb.org/t/p/w500/eqV0JjfwcEJuK3JPZ2rsNvS1p30.jpg",
    overview: "Climbing aboard their mammoth recreational vehicle for a cross-country road trip to the Colorado Rockies, ",
  }

};
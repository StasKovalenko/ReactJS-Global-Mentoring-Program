import React from 'react';
import MovieForm from "../modules/MovieForm/MovieForm"

import MovieEditAndDelete from "../modules/MovieForm/components/AddAndEditModal/AddAndEditModal"
import "../modules/MovieForm/MovieForm.css"
import Dialog from '../modules/Dialog/Dialog';

export default {
  title: 'Example/Dialog',
  component: Dialog,
};

const Template = (args) => <Dialog {...args}><MovieForm {...args}/></Dialog> ;

export const AddMovieForm = Template.bind({});
AddMovieForm.args = {
  title: "add movie",
  children: <MovieEditAndDelete />,
  movie: {
    title: "",
    releaseDate: "",
    email: "",
    rating: "",
    genres: [],
    runtime: "",
    overview: "",
  }
};


export const EditMovieForm = Template.bind({});
EditMovieForm.args = {
  title: "edit movie",
  children: <MovieEditAndDelete />,
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

export const DeleteMovieForm = Template.bind({});
DeleteMovieForm.args = {
  title: "delete movie",
  isOpenDeleteDialog: true,
}
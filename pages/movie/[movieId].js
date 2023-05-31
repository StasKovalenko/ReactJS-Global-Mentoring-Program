import MovieDetailsWrapper from "../../components/MovieDetails/MovieDetailsWrapper";

export const getServerSideProps = async (context) => {
  const movieId = context.params.movieId;
  const response = await fetch(`http://localhost:4000/movies/${movieId}`);
  const data = await response.json();

  return {
    props: {
      movieData: data,
    },
  };
};

const MovieDetailsPage = ({ movieData }) => {
  return <MovieDetailsWrapper movieData={movieData} />;
};

export default MovieDetailsPage;
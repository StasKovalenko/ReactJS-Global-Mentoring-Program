import React from "react";
import Head from "next/head";
import MovieListPage from "../components/MovieListPage/MovieListPage";
import Layout from "../components/Layout/Layout";

export const getServerSideProps = async () => {
  const searchParams = ""; // Здесь вы можете определить параметры поиска на основе своих критериев или получить их из контекста
  const response = await fetch(`http://localhost:4000/movies?limit=100&${searchParams}`);
  
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  
  return {
    props: {
      moviesData: data.data,
    }
  };
};

const HomePage = ({moviesData}) => {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <MovieListPage moviesData={moviesData}/>
    </Layout>
  );
};

export default HomePage;

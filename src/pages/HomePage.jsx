import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/tmdb-api';
import MovieList from '../components/MovieList';
import s from './HomePage.module.css';
function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={s.header_title}>
      <h1 className={s.title}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;

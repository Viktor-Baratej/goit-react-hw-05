import React, { useState } from 'react';
import { searchMovies } from '../services/tmdb-api';
import MovieList from '../components/MovieList';
import s from './MoviesPage.module.css';
function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(query).then(setMovies);
  };

  return (
    <div>
      <h1 className={s.movie_title}>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <div className={s.movie_content}>
          <input
            className={s.movie_input}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search movies..."
          />
          <button className={s.movie_btn} type="submit">
            Search
          </button>
        </div>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;

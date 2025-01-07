import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/tmdb-api';
import MovieList from '../components/MovieList';
import s from './MoviesPage.module.css';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim();
    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    }
  };

  return (
    <div className={s.movies_container}>
      <h1 className={s.movie_title}>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <div className={s.movie_content}>
          <input
            className={s.movie_input}
            type="text"
            name="query"
            defaultValue={query}
            placeholder="Search movies..."
          />
          <button className={s.movie_btn} type="submit">
            Search
          </button>
        </div>
      </form>
      {error && <div>Error: {error}</div>}
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;

import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../services/tmdb-api';
import s from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <div className={s.movie_load}>Loading...</div>;
  }

  return (
    <div>
      <button className={s.movie_btnback} onClick={() => navigate(-1)}>
        Go Back
      </button>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <ul className={s.movie_list}>
        <li>
          <Link className={s.movie_item} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={s.movie_item} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;

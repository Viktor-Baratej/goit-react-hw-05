import React, { useEffect, useState } from 'react';
import {
  useParams,
  Outlet,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import { fetchMovieDetails } from '../services/tmdb-api';
import s from './MovieDetailsPage.module.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getMovieDetails();
  }, [movieId]);

  const goBackHandler = () => {
    navigate(location.state?.from || '/movies');
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div className={s.movie_load}>Loading...</div>;
  }

  return (
    <div>
      <div className={s.movie_btn_content}>
        <button className={s.movie_btn_back} onClick={goBackHandler}>
          Go Back
        </button>
      </div>
      <h1 className={s.movie_title}>{movie.title}</h1>
      {movie.poster_path && (
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      )}
      <p className={s.movie_text}>{movie.overview}</p>
      <ul className={s.movie_list}>
        <li>
          <Link
            className={s.movie_item}
            to="cast"
            state={{ from: location.state?.from }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            className={s.movie_item}
            to="reviews"
            state={{ from: location.state?.from }}
          >
            Reviews
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;

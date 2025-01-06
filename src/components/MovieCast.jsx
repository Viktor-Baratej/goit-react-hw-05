import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../services/tmdb-api';
import s from './MovieCast.module.css';
function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, character }) => (
        <li key={id}>
          <p className={s.autor_title}>{name}</p>
          <p className={s.autor_content}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;

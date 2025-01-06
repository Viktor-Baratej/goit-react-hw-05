import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services/tmdb-api';
import s from './MovieReviews.module.css';
function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3 className={s.autor_title}>Author: {author}</h3>
          <p className={s.autor_content}>{content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;

import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id} className={s.item}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;

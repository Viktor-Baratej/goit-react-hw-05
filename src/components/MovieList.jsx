import { Link } from 'react-router-dom';
import s from './MovieList.module.css';
function MovieList({ movies }) {
  return (
    <ul className={s.movie_list}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link className={s.movie_item} to={`/movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;

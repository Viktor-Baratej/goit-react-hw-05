import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
function Navigation() {
  return (
    <header className={s.navbar}>
      <nav className={s.header_nav}>
        <ul>
          <NavLink className={s.header_list} to="/">
            Home
          </NavLink>
          <NavLink className={s.header_list} to="/movies">
            Movies
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;

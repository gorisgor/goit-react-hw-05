import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from 'clsx';

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};


export default function Navigation() {
  return (
      <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={makeNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeNavLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

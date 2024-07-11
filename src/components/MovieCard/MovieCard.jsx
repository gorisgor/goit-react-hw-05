import css from './MovieCard.module.css';
import { NavLink, useLocation } from "react-router-dom";
import clsx from 'clsx';

const imageUrl = 'https://image.tmdb.org/t/p/w400/';

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieCard({ movie }) {
  const { title, original_title, vote_average, overview, genres, backdrop_path } = movie;
  const src = imageUrl + backdrop_path;

 

  return ( <>
    <div className={css.border}>
      <div className={css.container}>
        <div className={css.img}>
          <img src={src} alt={original_title} />
        </div>
        <div className={css.desc}>
          <h2>{title}</h2>
          <p>USERS VOTE: {vote_average}</p>
          <p>OVERVIEW: {overview}</p>
          <p>GENRES: {genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <p>ADDITIONAL INFORMATION</p>
      <ul>
        <li> 
          <NavLink to="cast" className={makeNavLinkClass}>
            <p>Cast</p>
          </NavLink>
        </li>
        <li> 
          <NavLink to="reviews" className={makeNavLinkClass}>
            <p>Reviews</p>
          </NavLink> 
        </li>
      </ul> 
    </div>  
     <Outlet /> 
     </>  
  );
}

import css from './MovieCard.module.css';
import { Link } from "react-router-dom";

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

export default function MovieCard({ movie }) {
  const { title, original_title, vote_average, overview, genres, backdrop_path } = movie;
  const src = imageUrl + backdrop_path;

  return (
    <div>
      <img src={src} alt={original_title} />
      <h2>{title}</h2>
      <p>Users vote: {vote_average}</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres.map((genre) => genre.name).join(", ")}</p>
      <div>
        <p>Additional information</p>
        <ul>
          <li> <Link>Cast</Link></li>
          <li> <Link>Reviews</Link> </li>
          </ul>     
        </div>
    </div>
  );
}

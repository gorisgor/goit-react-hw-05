import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to="/movies/:movieId" movie={movie}><p>{movie.title}</p></Link>
        </li>
      ))}
    </ul>
  );
}

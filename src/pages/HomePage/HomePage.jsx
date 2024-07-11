import css from "./HomePage.module.css";
import { getTrendingMovies } from "../../movies-api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from '../../components/Loader/Loader'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data.movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Tranding today</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} /> }
    </div>
  );
}


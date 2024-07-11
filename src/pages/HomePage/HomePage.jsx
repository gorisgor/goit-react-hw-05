import css from "./HomePage.module.css";
import { getTrendingMovies } from "../../movies-api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Tranding today</h1>
      {movies.length > 0 ? <MovieList movies={movies} /> : <p>No movies found</p>}
    </div>
  );
}


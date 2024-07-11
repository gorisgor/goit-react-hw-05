import { useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useEffect, useState, useRef } from "react";
import { getMovieDetails } from "../../movies-api";
import { useLocation, Link } from "react-router-dom";
import Loader from '../../components/Loader/Loader'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movies");

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && <MovieCard movie={movie} />}
    </div>
  );
}

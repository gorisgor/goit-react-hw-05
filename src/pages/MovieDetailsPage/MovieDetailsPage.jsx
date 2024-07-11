import { useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useEffect, useState, useRef } from "react";
import { getMovieDetails } from "../../movies-api";
import { useLocation, Link } from "react-router-dom";

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movies");

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
      {movie ? <MovieCard movie={movie} /> : <p>Loading...</p>}
    </div>
  );
}

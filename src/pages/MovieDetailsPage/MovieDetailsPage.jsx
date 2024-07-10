import { useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../movies-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    getMovie();
  }, [movieId]);

  return movie ? <MovieCard movie={movie} /> : <p>Loading...</p>;
}

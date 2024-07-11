import css from "./MovieCast.module.css";
import { useState, useEffect } from "react";
import { getMovieCast } from "../../movies-api";
import { useParams } from "react-router-dom";
import CastCard from "../CastCard/CastCard";
import Loader from '../../components/Loader/Loader'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";




export default function MovieCast() {
 
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      if (!movieId) return;
    async function getMovie() {
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getMovie();
  }, [movieId]);



  return <div className={css.container}>
    {loading && <Loader />}
    {error && <ErrorMessage />}
    {cast.length > 0 ? (
        <CastCard cast={cast} />
      ) : (
        !loading && !error && <p>No actors in this movie</p>
      )}
    </div>;
}

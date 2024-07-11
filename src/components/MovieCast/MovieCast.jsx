import css from "./MovieCast.module.css";
import { useState, useEffect } from "react";
import { getMovieCast } from "../../movies-api";
import { useParams } from "react-router-dom";
import CastCard from "../CastCard/CastCard";




export default function MovieCast() {
 
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

    useEffect(() => {
      if (!movieId) return;
    async function getMovie() {
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    getMovie();
  }, [movieId]);



  return <div>
    {cast.length>0 ?<CastCard cast={cast} /> : <p>No actors at this movie</p>}
    </div>;
}

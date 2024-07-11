import css from "./MovieCast.module.css";
import { useState, useEffect } from "react";
import { getMovieCast } from "../../movies-api";
import { useParams } from "react-router-dom";
import CastCard from "../CastCard/CastCard";




export default function MovieCast() {
 
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

    useEffect(() => {
    async function getMovie() {
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    getMovie();
  }, [movieId]);



  return <CastCard cast={cast} />;
}

import { getMovieReviews } from "../../movies-api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./MovieReviews.module.css";
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import Loader from '../../components/Loader/Loader'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function MovieReviews() {
const { movieId } = useParams();
const [reviews, setReviews] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
  async function getReviews() {
    try {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  getReviews();
}, [movieId]);

return <div className={css.container}>
     {loading && <Loader />}
     {error && <ErrorMessage />}
     {reviews.length > 0 ? (<ReviewsCard reviews={reviews} />) : (!loading && !error && <p>No reviews available for this movie</p>)}
       </div>}

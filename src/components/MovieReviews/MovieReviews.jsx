import { getMovieReviews } from "../../movies-api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./MovieReviews.module.css";
import ReviewsCard from "../ReviewsCard/ReviewsCard";

export default function MovieReviews() {
const { movieId } = useParams();
const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
  async function getReviews() {
    try {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }
  getReviews();
}, [movieId]);



return <div>
{reviews.length > 0 ? (
  <ReviewsCard reviews={reviews} />
) : (
  <p>No reviews available for this movie</p>
)}
</div>}

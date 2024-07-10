import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage({ movie }) {
  const { title, original_title, vote_average, overview, genre_ids, backdrop_path } = movie;
  const src = imageUrl + backdrop_path;
  
  return (
    <div className={css.movieCard}>
      <img src={src} alt={original_title} />
      <h2>{title}</h2>
      <p>Users vote: {vote_average}</p>
      <h4>Overview: {overview}</h4>
      <p>Genres: {genre_ids.join(", ")}</p>
    </div>
  );
}

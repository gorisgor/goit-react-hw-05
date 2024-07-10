import css from './MovieCard.module.css';

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

export default function MovieCard({ movie }) {
  const { title, original_title, vote_average, overview, genre_ids, backdrop_path } = movie;
  const src = imageUrl + backdrop_path;
  
  return (
    <div>
      <img src={src} alt={original_title} />
      <h2>{title}</h2>
      <p>Users vote: {vote_average}</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genre_ids.join(", ")}</p>
    </div>
  );
}

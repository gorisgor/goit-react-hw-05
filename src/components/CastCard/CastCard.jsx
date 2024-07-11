import css from './CastCard.module.css';

const imageUrl = 'https://image.tmdb.org/t/p/w400/';
const defaultImg ='https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster'

export default function CastCard({ cast }) {
  
  return (
    <ul>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <li key={id} >
          <img
            src={profile_path ? imageUrl + profile_path : defaultImg}
            alt={original_name}
          />
          <p>ACTOR NAME: {original_name}</p>
          <p>CHARACTER NAME: {character}</p>
        </li>
      ))}
    </ul>
  );
}


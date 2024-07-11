import css from './ReviewsCard.module.css'

export default function ReviewCard ({reviews}){
    return <ul className={css.list}>
      {reviews.map(({id, author, content}) => (
        <li key={id} className={css.item}>
          <p className={css.user}>USER: {author}</p>
          <p className={css.review}>USERS REVIEW: {content}</p>
        </li>
      ))}
    </ul>
}  
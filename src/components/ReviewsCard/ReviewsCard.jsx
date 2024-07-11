import css from './ReviewsCard.module.css'

export default function ReviewCard ({reviews}){
    return <ul>
      {reviews.map(({id, author, content}) => (
        <li key={id} >
          <p>USER: {author}</p>
          <p>USERs REVIEW: {content}</p>
        </li>
      ))}
    </ul>
}  
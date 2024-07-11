import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return <div className={css.container}>
    <Link to='/'>Way to Home page</Link>
    <p className={css.text}>Sorry, page not found</p>
    </div>;
}

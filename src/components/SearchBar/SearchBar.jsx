import css from './SearchBar.module.css';
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim(); 
    if (!query) {
      toast.error("Please, fulfill query");
      form.reset();
      return;
    }
    onSearch(query);
    form.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.container}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}




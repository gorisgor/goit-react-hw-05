import css from './SearchBar.module.css';
import toast, { Toaster } from "react-hot-toast";
import { useState } from 'react';

export default function SearchBar({ onSearch, value }) {
  const [query, setQuery] = useState(value);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim(); 
    if (!query) {
      toast.error("Please, fulfill query");
      setQuery('');
      return;
    }
    onSearch(query);
    setQuery('');
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.container}>
        <input
          className={css.input}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleChange}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

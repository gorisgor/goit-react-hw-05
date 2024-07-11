import css from "./MoviesPage.module.css";
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchingMovies } from "../../movies-api";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setLoading] = useState(false); 

  const [searchParams, setSearchParams] = useSearchParams();
  const userSearch = searchParams.get("search") ?? "";
  const [topic, setTopic] = useState(userSearch);

  async function handleSearch(query) {
    if (query === topic) return;
    setMovies([]);
    setTopic(query);
    setSearchParams({ search: query });
  }

  useEffect(() => {
    if (!topic) return;

    async function getMovies() {
      try {
        setIsEmpty(false);
        setLoading(true);
        setError(false);
        const { movies: newMovies } = await getSearchingMovies(topic);
        if (newMovies.length === 0) {
          setIsEmpty(true);
          return;
        }
        setMovies(newMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [topic]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} value={userSearch} />
      {isEmpty && (
        <p style={{ fontSize: '28px', color: "red" }}>
          Hello, friend! Please, enter a valid query!
        </p>
      )}
      {movies.length > 0 && <MovieList movies={movies} />}  
      {error && <p>Something went wrong, Please reload page</p>}
      {loading && <p>Loading...</p>}
    </div>
  );   
}

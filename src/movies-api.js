import axios from "axios";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjMzMjVlM2E4ODE0MzBiMDViZGM1ZGNiNzhiYzkxNiIsIm5iZiI6MTcyMDU5MDg1MS43NDIxOSwic3ViIjoiNjY4ZTFlMGI0OTBlZDQ4YzA5NTlkNTk2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nNG1IS4H-0Ltn8Xp76mKyorR6SrOJdQzctq0EJu5lKQ"
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  return {
    movies: response.data.results,
  };
};

export const getSearchingMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: query,
    },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  return {
    movies: response.data.results,
  };
};
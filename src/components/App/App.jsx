import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navigation from "../Navigation/Navigation";
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';


export default function App() {

  return <div>
  <Navigation />
  <Toaster />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviesPage />} />
    <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
    <Route path="/movies/:movieId/cast" element={<MovieCast />} />
    <Route path="/movies/:movieId/reviews " element={<MovieReviews />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
</div>
}

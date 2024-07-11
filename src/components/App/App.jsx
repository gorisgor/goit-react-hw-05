import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

const HomePage = lazy(()=>import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(()=>import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(()=>import('../../pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = lazy(()=>import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(()=>import('../MovieCast/MovieCast'));
const MovieReviews = lazy(()=>import('../MovieReviews/MovieReviews'));


export default function App() {

  return <div>
  <Navigation />
  <Toaster />
  <Suspense fallback={<Loader />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviesPage />} />
    <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
      <Route path="cast" element={<MovieCast />} />
      <Route path="reviews" element={<MovieReviews />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  </Suspense>
  
</div>
}

import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader/Loader";
const Movies = React.lazy(() => import('../pages/movies'));
// const MovieDetails = React.lazy(() => import('../pages/movieDetails'));
// const WatchList = React.lazy(() => import('../pages/watchList'));
// const Search = React.lazy(() => import('../pages/search'));
const Login = React.lazy(() => import('../pages/login'));
const Register = React.lazy(() => import('../pages/register'));
const NotFound = React.lazy(() => import('../pages/notFound'));
const MovieDetails = React.lazy(()=>import('../pages/movieDetails'));

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
       <Route path="/" element={<Movies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/movie-details/:id" element={<MovieDetails />} />
      {/* <Route path="/search/:movieName" element={<Search />} />
      <Route path="/watchList" element={<WatchList />} />
      <Route path="/movie-details/:id" element={<MovieDetails />} /> */}
      <Route path="*" element={<NotFound />} /> 
    </Routes>
    </Suspense>
  );
}

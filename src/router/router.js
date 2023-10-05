import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader/Loader";
// const Movies = React.lazy(() => import('../pages/movies'));
// const MovieDetails = React.lazy(() => import('../pages/movieDetails'));
// const Login = React.lazy(() => import('../pages/login'));
// const Register = React.lazy(() => import('../pages/register'));
// const WatchList = React.lazy(() => import('../pages/watchList'));
// const NotFound = React.lazy(() => import('../pages/notFound'));

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      {/* <Route path="/" element={<Movies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/watchList" element={<WatchList />} />
      <Route path="/movie-details/:id" element={<MovieDetails />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </Suspense>
  );
}

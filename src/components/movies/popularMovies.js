import { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import { useNavigate } from "react-router-dom";
import PagePagination from "../pagePagination/pagePagination";
import axios from "axios";


const PopularMovies = () => {
  const navigate = useNavigate();
  const [popularMovies, setPopularMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=d31d8bb09970c0c573668146ab0702f3&page=${page}`
      )
      .then((res) => {
        setPopularMovies(res.data.results);
        setPages(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const redirectToDetails = (id) => {
    navigate(`/movie-details/${id}`);
  };
  const navigateToPage = (page) => {
    setPage(page);
  };

  const increaseCount = () => {
    if (page < 500) {
      setPage(page + 1);
    }
  };
  const decreaseCount = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className="row">
      {popularMovies?.map((movie, index) => {
        return (
          <div className="col-2" key={movie.id}>
            <MovieCard
              movieDetails={movie}
              handleNavigate={redirectToDetails}
            />
          </div>
        );
      })}
      <PagePagination
        increase={increaseCount}
        decrease={decreaseCount}
        setPage={navigateToPage}
        totalPages={pages}
      />
    </div>
  );
};

export default PopularMovies;

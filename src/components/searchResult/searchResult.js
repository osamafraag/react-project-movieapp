import { useEffect, useState } from "react";
import MovieCard from "../movies/movieCard";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import PagePagination from '../pagePagination/pagePagination'


const SearchResult = (props) => {
    const {movieName} = props
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState([]);
    const [pages, setPages] = useState(1);
    const [page, setPage] = useState(1);
    useEffect(() => {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=d31d8bb09970c0c573668146ab0702f3&page=${page}&query=${movieName}`)
        .then((res) => {setSearchResult(res.data.results); setPages(res.data.total_pages)})
        .catch((err) => console.log(err));
    },[page,movieName]);
  
    const redirectToDetails = (id) => {
      navigate(`/movie-details/${id}`);
    };
    const navigateToPage = (page) => {
      setPage(page)
    }
  
    const increaseCount = () => {
      if (page < pages){
        setPage(page+1)
      }
    }
    const decreaseCount = () => {
      if (page > 1){
        setPage(page-1)
      }
    }
    return (
      <div className="row">
        {searchResult?.map((movie, index) => {
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
  
  export default SearchResult;
  
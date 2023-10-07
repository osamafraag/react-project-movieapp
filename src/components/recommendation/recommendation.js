import { useEffect,useContext, useState } from "react";
import MovieCard from "../movies/movieCard";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import PagePagination from '../pagePagination/pagePagination'
import { LanguageContext } from '../../context/language';


const Recommendation = (props) => {
    const {movieId} = props
    const navigate = useNavigate();
    const [recommend, setRecommend] = useState([]);
    const [pages, setPages] = useState(1);
    const [page, setPage] = useState(1);
    const { contextLang , setContextLang }  = useContext(LanguageContext)

    useEffect(() => {
      axios
        .get(` https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=d31d8bb09970c0c573668146ab0702f3&page=${page}&language=${contextLang}`)
        .then((res) => {setRecommend(res.data.results); setPages(res.data.total_pages)})
        .catch((err) => console.log(err));
    },[page,movieId,contextLang]);
  
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
        {recommend?.map((movie, index) => {
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
  
  export default Recommendation;
  
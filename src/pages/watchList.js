import React from "react";
import { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAction } from "../store/slices/watchList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Stars from "../components/Star/Stars";
import { LanguageContext } from '../context/language';
import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const listedMovies = useSelector((state) => state.watchList.listedMovies);
  const { contextLang, setContextLang } = useContext(LanguageContext)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddRemove = (movie) => {
    dispatch(handleAction(movie));
  };
  const navigateToHome = () => {
    navigate(`/`);
  };
const [style, setStyle] = useState('text-muted')
  return (
    <div className="container" style={{justifyContent: 'center'}} dir={contextLang == 'ar'? 'rtl':'ltr'}>
      {contextLang === 'ar'? <h2>قائمة الافلام المفضلة</h2> : <h2>Watchlist</h2>}
      <hr/>
      
      <div className="row">
        {listedMovies?.map((movie) => (
          <div key={movie.id} className="col-md-6 col-lg-4">
            <div className="card mb-3">
              <div className="position-relative">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="heart-icon"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    zIndex: "1",
                    color: "darkorange", 
                  }}
                />
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  alt={movie.id}
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h6 className="card-title">{movie.title}</h6>
                <p className="release-date-details">
                  {movie.release_date}
                </p>
                <Stars rating={movie.vote_average / 2} />
                <p>{movie.vote_count}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleAddRemove(movie)}
                >Remove from Watchlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      { listedMovies.length === 0 ?  (
        <div className="text-muted" style={{justifyContent: 'center', textAlign:'center', fontSize: '250px'}}>
          <FontAwesomeIcon className={style} icon={faHeartCirclePlus} 
          onMouseEnter={()=>{setStyle('text-dark')}}
          onMouseLeave={() =>{setStyle('text-muted')}}
          onClick={navigateToHome}/>
        </div>
      )  : () => {}}
    </div>
  );
};

export default WatchList;

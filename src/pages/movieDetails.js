import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./movieDetails.css";
import Stars from "../components/Star/Stars";
import { LanguageContext } from '../context/language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch ,useSelector} from "react-redux";
import { handleAction } from "../store/slices/watchList";
import Recommendation from '../components/recommendation/recommendation'

export default function MovieDetails() {
  var isActive = false
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const { contextLang , setContextLang }  = useContext(LanguageContext)
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const watchList = useSelector((state) => state.watchList);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d31d8bb09970c0c573668146ab0702f3&language=${contextLang}`
      )
      .then((res) => {
        setMovieDetails(res.data);
      })
      .catch((err) => console.error(err));
  }, [id, contextLang]);

  watchList?.listedMovies?.map((movie, index) => {
    if (movie.id === movieDetails?.id){ 
      isActive = true
    }
  })
  const labelStyle = {
    marginLeft: '450px'
  };


  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container" dir={contextLang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="row">
          <div className="col-md-4 ">
            <div className="card">
              <img
                className="card-img-top "
                src={`${imageBaseUrl}/${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
            </div>
          </div>
          <div className="col-md-8 ">
            <br />
            <div className="row">
              <h3 className="col title-details">{movieDetails.title}</h3>
              <div className='col my-auto text-muted'>
                <input className="love" style={{display: 'none'}} type="checkbox" 
                defaultChecked={isActive} id={movieDetails.id}/>
                <label className='my-auto love' style={labelStyle} htmlFor={movieDetails.id} 
                onClick={() => {dispatch(handleAction(movieDetails))}}>
                  <FontAwesomeIcon className='fs-3 my-auto'icon={faHeart} />
                </label> 
              </div>
            </div>
            
            <p className="release-date-details">{movieDetails.release_date}</p>
            <Stars rating={movieDetails.vote_average / 2} />
            <p>{movieDetails.vote_count}</p>
            <br />
            <br />
            <p className="overview-details">{movieDetails.overview}</p>
            <br />
            <br />
            <div className="row">
            <div className="col">
            <h6>Production Countries:</h6>
            <ul>
              {movieDetails.production_countries.map((country) => (
                <li key={country.iso_3166_1}>{country.name}</li>
              ))}
            </ul><br/>
            <h6>Languages Available:</h6>
            <ul>
              {movieDetails.spoken_languages.map((language) => (
                <li key={language.iso_639_1}>{language.name}</li>
              ))}
            </ul>
            </div>
            <div className="col-7 text-center"><br/><br/><br/>
              {movieDetails.genres.length > 0 && movieDetails.genres[0] && (
                <button className="btn btn-warning mx-4 " >
                  <p className="my-auto">{movieDetails.genres[0].name}</p>
                </button>
              )}
              {movieDetails.genres.length > 1 && movieDetails.genres[1] && (
                <button className="btn btn-warning" >
                  <p className="my-auto">{movieDetails.genres[1].name}</p>
                </button>
              )}
              {movieDetails.genres.length > 2 && movieDetails.genres[2] && (
                <button className="btn btn-warning mx-4" >
                  <p className="my-auto">{movieDetails.genres[2].name}</p>
                </button>
              )}
            </div>
            <br />
            <br />
            </div>  
                <a className="btn btn-danger my-4" href={movieDetails.homepage}>Go To Film</a> 

          </div>
        </div>
      </div>

      <div className="container">
        <hr />
        <h2>Recommendations</h2>
        <Recommendation movieId={movieDetails.id}/>
      </div>
    </>
  );
}

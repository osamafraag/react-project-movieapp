import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./movieDetails.css";
import Stars from "../components/Star/Stars";
import { Link } from "react-router-dom";

export default function MovieDetails() {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d31d8bb09970c0c573668146ab0702f3`
      )
      .then((res) => {
        setMovieDetails(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="card">
              <img
                className="card-img-top "
                src={`${imageBaseUrl}/${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
            </div>

            {/* <img
                src={`${imageBaseUrl}/${movieDetails.backdrop_path}`}
                alt={movieDetails.title}
              /> */}
          </div>
          <div className="col-md-8 ">
            <br />
            <h3 className="title-details">{movieDetails.title}</h3>
            <p className="release-date-details">{movieDetails.release_date}</p>
            <Stars rating={movieDetails.vote_average / 2} />
            <p>{movieDetails.vote_count}</p>
            <br />
            <br />
            <p className="overview-details">{movieDetails.overview}</p>
            <br /><br/>
            <div className="text-center">
              <button className="btn btn-warning  mx-4" disabled>
                Action
              </button>
              <button className="btn btn-warning" disabled>
                Crime
              </button>
              <button className="btn btn-warning mx-4" disabled>
                Thriller
              </button>
            </div><br/><br/>
            <p><b>Durations : </b>117 Min     </p>
            <p> <b>Language : </b> {movieDetails.original_language} </p>
          </div>
        </div>
      </div>
    </>
  );
}

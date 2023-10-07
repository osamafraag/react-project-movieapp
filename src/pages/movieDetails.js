import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./movieDetails.css";
import Stars from "../components/Star/Stars";

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
            <br />
            <br />
            <div className="text-center">
              {movieDetails.genres.length > 0 && movieDetails.genres[0] && (
                <button className="btn btn-warning mx-4" disabled>
                  <p>{movieDetails.genres[0].name}</p>
                </button>
              )}
              {movieDetails.genres.length > 1 && movieDetails.genres[1] && (
                <button className="btn btn-warning" disabled>
                  <p>{movieDetails.genres[1].name}</p>
                </button>
              )}
              {movieDetails.genres.length > 2 && movieDetails.genres[2] && (
                <button className="btn btn-warning mx-4" disabled>
                  <p>{movieDetails.genres[2].name}</p>
                </button>
              )}
            </div>
            <br />
            <br />
            <h6>Production Countries:</h6>
            <ul>
              {movieDetails.production_countries.map((country) => (
                <li key={country.iso_3166_1}>{country.name}</li>
              ))}
            </ul>
            <h6>Languages Available:</h6>
            <ul>
              {movieDetails.spoken_languages.map((language) => (
                <li key={language.iso_639_1}>{language.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <hr />

        <div className="row">
          <div className="col-md-12">
            <h2>Recommendations</h2>
          </div>
        </div>
      </div>
    </>
  );
}

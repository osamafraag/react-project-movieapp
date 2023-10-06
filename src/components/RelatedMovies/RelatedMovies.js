// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const RelatedMovies = ({ genre, movieId }) => {
//   const [relatedMovies, setRelatedMovies] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=${getGenreId(genre)}&page=1`
//       )
//       .then((res) => {
//         const recommendedMovies = res.data.results.slice(0, 6); // Get the first 6 recommended movies
//         setRelatedMovies(recommendedMovies);
//       })
//       .catch((err) => console.error(err));
//   }, [genre]);

//   // Helper function to map genre names to genre IDs (customize as needed)
//   const getGenreId = (genreName) => {
//     const genreMap = {
//       Action: 28,
//       Crime: 80,
//       // Add more genres as needed

//     };
//     return genreMap[genreName];
//   };

//   if (relatedMovies.length === 0) {
//     return <div>No related movies available for {genre} genre.</div>;
//   }

//   return (
//     <div>
//       <h2>Related {genre} Movies</h2>
//       <div className="row">
//         {relatedMovies.map((movie) => (
//           <div className="col-md-2 mb-3" key={movie.id}>
//             <div className="card">
//               <Link to={`/movie/${movie.id}`}>
//                 <img
//                   className="card-img-top"
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={movie.title}
//                 />
//               </Link>
//               <div className="card-body">
//                 <h6 className="card-title">{movie.title}</h6>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelatedMovies;

import React from 'react'

export default function RelatedMovies() {
  return (
    <div>RelatedMovies</div>
  )
}

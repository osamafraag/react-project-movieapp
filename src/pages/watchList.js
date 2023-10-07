// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { handleAction } from "../store/slices/watchList";

// const WatchList = () => {
//   const watchListCount = useSelector((state) => state.watchList.watchListCount);
//   const listedMovies = useSelector((state) => state.watchList.listedMovies);
//   const dispatch = useDispatch();

//   const handleAddRemove = (movie) => {
//     dispatch(handleAction(movie));
//   };


//   return (
//     <div className="container ">
//       <h2>Watchlist</h2>
//       <p>
//         Count: <button className="btn btn-danger">{watchListCount}</button>
//       </p>
//       <br />
//       <br />

//       <div className="row">
//         {listedMovies.map((movie) => (
//           <div key={movie.id} className="col-md-6 col-lg-4">
//             <div className="card mb-3">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
//                 alt={movie.id}
//                 className="card-img-top"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{movie.title}</h5>
//                 <p className="card-text">Release Date: {movie.release_date}</p>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleAddRemove(movie)}
//                 >
//                   Remove from Watchlist
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WatchList;


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAction } from "../store/slices/watchList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const WatchList = () => {
  const watchListCount = useSelector((state) => state.watchList.watchListCount);
  const listedMovies = useSelector((state) => state.watchList.listedMovies);
  const dispatch = useDispatch();

  const handleAddRemove = (movie) => {
    dispatch(handleAction(movie));
  };

  return (
    <div className="container">
      <h2>Watchlist</h2>
      <p>
        Count: <button className="btn btn-danger">{watchListCount}</button>
      </p>
      <br />
      <br />

      <div className="row">
        {listedMovies.map((movie) => (
          <div key={movie.id} className="col-md-6 col-lg-4">
            <div className="card mb-3">
              <div className="position-relative">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="heart-icon"
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: '1',
                    color: 'darkorange', // Yellow dark
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
                <p className="card-text">Release Date: {movie.release_date}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleAddRemove(movie)}
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;

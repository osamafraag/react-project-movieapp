import Rating from '../rating/rating'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
export default function MovieCard(props) {

  const [heartColor, setHeartColor] = useState("text-warning");
  const { movieDetails, handleNavigate } = props;

  const handleClick = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="card position-relative mt-3" style={{height:'400px'}}>
      <Rating rating={movieDetails.vote_average*10}/>
      <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} 
      className="card-img-top h-75" alt="..." onClick={() => handleNavigate(movieDetails.id)}/>
      <div className="card-body position-relative mt-4">
        <div className="row">
          <p className="card-title col-9 my-auto"
          style={{textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap', fontWeight: 'bold'}}>{movieDetails.title}</p>
          
          <div className='col-1 my-auto text-muted'>
            <input className="love" style={{display: 'none'}} type="checkbox" id={movieDetails.id}/>
            <label className='my-auto love' for={movieDetails.id}>
              <FontAwesomeIcon className='fs-5 my-auto' icon={faHeart} />
            </label> 
          </div>
           
        </div>
        <p>{movieDetails.release_date}</p>
      </div> 
    </div>
    
  );
}

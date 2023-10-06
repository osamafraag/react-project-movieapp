import Rating from '../rating/rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function MovieCard(props) {

  const { movieDetails, handleNavigate } = props;
  return (
    <div className="card position-relative mt-3" style={{height:'400px'}}>
      <Rating rating={movieDetails.vote_average*10}/>
      <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} 
      className="card-img-top h-75" alt="..." onClick={() => handleNavigate(movieDetails.id)}/>
      <div className="card-body position-relative mt-4">
        <div className="row">
          <p className="card-title col-9 my-auto"
          style={{textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap', fontWeight: 'bold'}}>{movieDetails.title}</p>
          <a className="col-1 my-auto" onClick={() => {}}>
            <FontAwesomeIcon className='fs-5 my-auto text-warning' icon={faHeart} />
          </a>
        </div>
        <p className="col">{movieDetails.release_date}</p>
      </div> 
    </div>
    
  );
}

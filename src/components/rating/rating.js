import './rating.css'
import React from 'react'  
function Rating(props){
const {rating} = props
 return (
    <>
      <div className={rating < 50 ? "position-absolute rating bad" 
        : rating < 70 ? "position-absolute rating median" 
        : "position-absolute rating good"} 
       style={rating < 50 ? {background: `conic-gradient(red ${rating}%, transparent 0 100%)`}
        : rating < 70 ? {background: `conic-gradient(orange ${rating}%, transparent 0 100%)`} 
        : {background: `conic-gradient(green ${rating}%, transparent 0 100%)`}}><span>{rating}<small>%</small></span></div> 
    </> 
 )
}
export default Rating;

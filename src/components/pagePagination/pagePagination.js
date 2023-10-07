import React from 'react'  
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function PagePagination(props){
  const { increase, decrease, setPage, totalPages} = props;
  var pages = []
  for (let i = 1 ; i <= 20 ; i++) {
    if(i > totalPages){
      break
    }
    pages.push(i)
  }

  return (
    <>
      <div className='fixed-bottom bg-light w-100 d-flex' style={{height: '40px', justifyContent: 'center'}}>
        <div className='btn btn-warning my-auto mx-4' onClick={() => {decrease()}}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div style={{width: '200px'}}>
          <p style={{textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap'}}> 
          {pages?.map((page, index) => {
            return(
              <span className='my-auto btn'  key={page} onClick={() => {setPage(page)}}>{page}</span>
            );
          })}
          </p>
        </div>
        <div className='btn btn-warning my-auto mx-4' onClick={() => {increase()}}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </> 
 )
}
export default PagePagination;

import React from 'react'
import { LanguageContext } from '../context/language';
import { useContext, useState } from "react";
import SearchResult from '../components/searchResult/searchResult'
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";

export default function Movies() {
    const params = useParams();
    const navigate = useNavigate();
    const { contextLang , setContextLang }  = useContext(LanguageContext);
    const [ searchValue , setSearchValue]  = useState(params.movieName);
    const [ search , setSearch]  = useState(params.movieName);

    const handleSearch = () => {
      setSearch(searchValue)
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    };


  return (
    <>
      <div className='container'>
        <div className='d-flex mt-4'>
          <input className='form-control rounded w-75 m-2' placeholder='search a movie'
          onChange={handleChange} value={searchValue}
          ></input>
          <button className='btn btn-warning h-100 m-2 ms-5' style={{width:'150px'}}
          onClick={() => handleSearch()}
          >search</button>
        </div>
        <h5 className='mt-5 m-2'>Search results for : <span style={{fontSize: '16px'}}>{searchValue}</span></h5><hr/>

      </div>
      <SearchResult movieName={search}/>
    </>
  )
}
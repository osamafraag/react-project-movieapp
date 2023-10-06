import React from 'react'
import PopularMovies from '../components/movies/popularMovies'
import { LanguageContext } from '../context/language';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Movies() {
  const navigate = useNavigate();
  const { contextLang , setContextLang }  = useContext(LanguageContext)
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  const navigatTosearch = (searchValue) => {
    navigate(`/search/${searchValue}`)
  }
  return (
    <>
      <div className='container mb-3 rounded' style={{backgroundColor: 'Gainsboro', height: '200px'}}>
        <h1 className='m-2 pt-2'>Welcome to our movies app</h1>
        <p className='m-3'>search what ever you want, discover more movies and TV shows</p>
        <div className='d-flex mt-4'>
          <input className='form-control rounded w-75 m-2' placeholder='search a movie'
          onChange={handleChange} value={searchValue}
          ></input>
          <button className='btn btn-warning h-100 m-2 ms-5' style={{width:'150px'}}
          onClick={() => navigatTosearch(searchValue)}
          >search</button>
        </div>
      </div>
      {contextLang === "EN" ? <h2>Popular Movies</h2>
      : contextLang === "AR" ? <h2 dir='rtl'>اشهر الافلام</h2>
      : <h1/>}
      
      <hr />
      <PopularMovies />
    </>
  )
}
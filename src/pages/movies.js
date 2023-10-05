import React from 'react'
import PopularMovies from '../components/movies/popularMovies'
import { LanguageContext } from '../context/language';
import { useContext } from "react";

export default function Movies() {
  const { contextLang , setContextLang }  = useContext(LanguageContext)
  return (
    <>
      <div className='container mb-3 rounded' style={{backgroundColor: 'Gainsboro', height: '200px'}}>
        <h1 className='m-2 pt-2'>Welcome to our movies app</h1>
        <p className='m-3'>search what ever you want, discover more movies and TV shows</p>
        <div className='d-flex mt-4'>
          <input className='form-control rounded w-75 m-2' placeholder='search a movie'></input>
          <button className='btn btn-warning h-100 m-2 ms-5' style={{width:'150px'}}>search</button>
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
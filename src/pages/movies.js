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
      <div className='container mb-3 rounded' style={{backgroundColor: 'Gainsboro', height: '200px'}} 
      dir={contextLang === 'ar' ? 'rtl' : 'ltr'}>
        {contextLang === "ar" ? <h1 className='m-2 pt-2'>مرحبًا بك في تطبيق الأفلام الخاص بنا</h1> 
        : <h1 className='m-2 pt-2'>Welcome to our movies app</h1>}
        {contextLang === "ar" ? <p className='m-3'>ابحث عما تريد، واكتشف المزيد من الأفلام والبرامج التلفزيونية</p> 
        : <p className='m-3'>search what ever you want, discover more movies and TV shows</p>}   
        <div className='d-flex mt-4'>
          <input className='form-control rounded w-75 m-2' placeholder={contextLang === "ar" ? 'ابحث عن فيلم':'search a movie'}
          onChange={handleChange} value={searchValue}
          ></input>
          <button className='btn btn-warning h-100 m-2 ms-5' style={{width:'150px'}}
          onClick={searchValue.length === 0 || searchValue.trim() === ''? () => {}: () => navigatTosearch(searchValue)}
          >search</button>
        </div>
      </div>
      {contextLang === "ar" ? <h2>اشهر الافلام</h2> : <h2>Popular Movies</h2>}
      
      <hr />
      <PopularMovies />
    </>
  )
}
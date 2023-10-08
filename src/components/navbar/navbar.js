import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { LanguageContext } from '../../context/language';
import { useContext } from "react";
import { useSelector } from "react-redux";

function HeaderNav() {
  const { contextLang , setContextLang }  = useContext(LanguageContext)
  const watchList = useSelector((state) => state.watchList);

  return (
    <>
    <Navbar className='navbar navbar-expand-lg fixed-top bg-white' dir={contextLang === 'ar' ? 'rtl' : 'ltr'}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid bg-warning shadow rounded" style={{height:"50px"}}>
            <Navbar.Brand className='ms-5 my-auto'>{contextLang === 'ar' ? 'موفي' : 'Movies App'}</Navbar.Brand>
            <NavLink className='nav-link my-auto ms-2'>
              <select className="form-select " aria-label="Default select example" style={{fontSize: '13px'}}
              onChange={(event) => setContextLang(event.target.value)}>
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </NavLink>
            <NavLink className='nav-link my-auto ms-auto' 
            style={({ isActive }) => (isActive ? {fontWeight: 'bold',fontSize: 'large'} : {})} 
            to='/'>{contextLang === 'ar' ? 'الصفحة الرئيسية' : 'Home'}
            </NavLink>
            <NavLink className='nav-link my-auto ms-2' 
            style={({ isActive }) => (isActive ? {fontWeight: 'bold',fontSize: 'large'} : {})} 
            to="/register">{contextLang === 'ar' ? 'تسجيل جديد' : 'Register'}
            </NavLink>
            <NavLink className='nav-link my-auto ms-2' 
            style={({ isActive }) => (isActive ? {fontWeight: 'bold',fontSize: 'large'} : {})} 
            to="/login">{contextLang === 'ar' ? 'تسجيل دخول' : 'Login'}
            </NavLink>
            <NavLink className='nav-link my-auto ms-5 position-relative' 
            style={({ isActive }) => (isActive ? {fontWeight: 'bold'} : {})} 
            to="/watchList">  
              <div className='d-flex  me-2'>
                <FontAwesomeIcon className='fs-4 my-auto m-1' icon={faHeart} />
                <span className='m-1 my-auto'>{contextLang === 'ar' ? 'الافلام المفضلة' : 'Watch list'}</span>
                <div className='text-black text-center rounded bg-light' style={{width: '22px', height: '22px'}}>
                  <span className='mx-auto my-auto'>{watchList.listedMovies.length}</span>
                </div>
              </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default HeaderNav;
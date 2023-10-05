import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { LanguageContext } from '../../context/language';
import { useContext } from "react";

function HeaderNav() {
  const { contextLang , setContextLang }  = useContext(LanguageContext)

  return (
    <>
    <Navbar className='navbar navbar-expand-lg fixed-top bg-white'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid bg-warning shadow rounded" style={{height:"50px"}}>
            <Navbar.Brand className='ms-5 my-auto'>Movies App</Navbar.Brand>
            <NavLink className='nav-link my-auto ms-2'>
              <select className="form-select " aria-label="Default select example" style={{fontSize: '13px'}}
              onChange={(event) => setContextLang(event.target.value)}>
                <option value="EN">EN</option>
                <option value="AR">AR</option>
              </select>
            </NavLink>
            <NavLink className='nav-link my-auto ms-auto' 
            style={({ isActive }) => (isActive ? {fontWeight: 'bold',fontSize: 'large'} : {})} 
            to='/'>Home
            </NavLink>
            <NavLink className='nav-link my-auto ms-2' 
            style={({ isActive }) => (isActive ? {fontWeight: 'bold',fontSize: 'large'} : {})} 
            to="/register">Register
            </NavLink>
            <NavLink className='nav-link my-auto ms-2' 
            style={({ isActive }) => (isActive ? {fontWeight: 'bold',fontSize: 'large'} : {})} 
            to="/login">Login
            </NavLink>
            <NavLink className='nav-link my-auto ms-5 position-relative' 
            style={({ isActive }) => (isActive ? {} : {color: 'gray'})} 
            to="/watchList">
              <div className='d-flex  me-2'>
                <FontAwesomeIcon className='fs-3 my-auto m-1' icon={faHeart} />
                <span className='m-1 my-auto'>Watch list</span>
              </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default HeaderNav;
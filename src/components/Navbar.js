import React from 'react';
import Navitem from './NavItem';
import './Nav.css';
import { useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation().pathname;

  return (
    <>
      <nav>
        <ul>
          <Navitem item="Home" tolink="/"  currentRoute={location}></Navitem>
          <Navitem item="About" tolink="/about"  currentRoute={location}></Navitem>
          <Navitem item="Experience" tolink="/experience"  currentRoute={location}></Navitem>
          <Navitem item="Skills" tolink="/skills"  currentRoute={location}></Navitem>
          <Navitem item="Contact" tolink="/contact"  currentRoute={location}></Navitem>
        </ul>
        <ul>
          <li style={{ display: 'inline-block', margin: 16 }}><a href="https://github.com/brandonctoun/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
          <li style={{ display: 'inline-block', margin: 16 }}><a href="https://www.linkedin.com/in/brandon-t-1097787b/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </nav>
    </>
  )
}
export default Navbar
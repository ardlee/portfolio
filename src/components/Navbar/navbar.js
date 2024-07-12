import React from 'react';
import './navbar.css'
import logo from '../../assets/AL_stylized_logo_transparent.png'
import { Link } from 'react-scroll';
import contactImg from '../../assets/contactme.png'

const Navbar = () => {
    return (
        <nav className="navbar">
        <Link to='intro' spy={true} smooth={true} offset={-100} duration={500}>
        <img src={logo} alt="Logo" className='logo' />
        </Link>
        <div className="desktopMenu">
            <Link activeClass = 'active' to = 'intro' spy = {true} smooth = {true} offset = {-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass = 'active' to = 'skills' spy = {true} smooth = {true} offset = {-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass = 'active' to = 'works' spy = {true} smooth = {true} offset = {-5} duration={500} className="desktopMenuListItem">Portfolio</Link>
        </div>
        <Link to='contactpage' spy={true} smooth={true} offset={-200} duration={500} className="desktopMenuListItem">
        <button className="desktopMenuBtn">
        <img src= {contactImg} alt="" className="desktopMenuImg" />Contact Me 
        </button>
        </Link>
    </nav>
    )
}

export default Navbar
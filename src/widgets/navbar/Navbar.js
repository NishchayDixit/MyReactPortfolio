import React, { useState } from 'react';
import logo from '../../assets/image/My_Logo.svg';
import resume from '../../assets/resume/Resume_Nishchay_Dixit.pdf';
import { scrollToSection } from '../../utills/smoothScrollService';
import './Navbar.css'
import 'boxicons';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <header className='nav_css'>
            <a href={() => scrollToSection('home')} className='logo'>
                <img src={logo} alt='Logo' />
            </a>
            <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <li><a href={() => scrollToSection('home')} className='active'>Home</a></li>
                <li><a href={() => scrollToSection('about')}>About</a></li>
                <li><a href={() => scrollToSection('project')}>Projects</a></li>
                <li><a href={() => scrollToSection('skill')}>Skill Set</a></li>
            </ul>
            <div className='main'>
                <a href={resume} download='Nishchay_Dixit_Resume'>Download CV</a>
                <box-icon
                    name={isMenuOpen ? 'x' : 'menu'}
                    id='menu-icon'
                    color='#828282'
                    onClick={toggleMenu}
                ></box-icon>
            </div>
        </header>
    );
}

export default Navbar;
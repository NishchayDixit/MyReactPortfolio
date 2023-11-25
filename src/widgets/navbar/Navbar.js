import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/image/My_Logo.svg';
import resume from '../../assets/resume/Resume_Nishchay_Dixit.pdf';
import { scrollToSection } from '../../utills/smoothScrollService';
import './Navbar.css'
import 'boxicons';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    const navbarLinks = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'project', label: 'Projects' },
        { to: 'skill', label: 'Skill Set' },
    ];

    return (
        <header className='nav_css'>
            <a onClick={() => scrollToSection('home')} className='logo'>
                <img src={logo} alt='Logo' />
            </a>
            <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                {navbarLinks.map((link) => (
                    <li key={link.to}>
                        <Link
                            to={link.to}
                            spy={true}
                            smooth={true}
                            duration={800}
                            onSetActive={handleSetActive}
                            className={activeSection === link.to ? 'active' : ''}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
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
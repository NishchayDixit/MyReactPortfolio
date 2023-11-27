import React from 'react';
import './HeroSection.css';
import HeroSectionAnimation from '../../utills/HeroSectionAnimation';
const HeroSection = () => {
    HeroSectionAnimation();
    return (
        <div>
            <header className='header'>
                <div className='intro'>
                    <h1 className='intro_content'>
                        <span className='intro_content-el intro_content-el--name'>Nishchay Dixit</span>
                        <span className='intro_content-el intro_content-el--description'>Creative</span>
                        <span className='intro_content-el intro_content-el--job'>Developer</span>
                    </h1>
                </div>
            </header>
            <div className='mouse_scroll'>
                <div className='position'>
                    <div className='mouse'></div>
                </div>
                <span className='mouse_content'>Scroll Down</span>
            </div>
        </div>
    );
};

export default HeroSection;
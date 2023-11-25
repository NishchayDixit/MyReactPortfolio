import React from 'react';
import { Element } from 'react-scroll';
import './Sections.css'
import HeroSection from './Hero_section/HeroSection';

const Sections = () => {
    return (
        <>
            <Element id='home' name='home' className='home'>
                <HeroSection />
            </Element>
            <Element id='about' name='about' className='portfolio_content'></Element>
            <Element id='project' name='project' className='portfolio_content exception'></Element>
            <Element id='skill' name='skill' className='portfolio_content'></Element>
        </>
    );
};

export default Sections;
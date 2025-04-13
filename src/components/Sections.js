import React from 'react';
import { Element } from 'react-scroll';
import './Sections.css'
import HeroSection from './Hero_section/HeroSection.js';
import AboutSection from './about_section/AboutSection.js';
import ProjectSection from './project_section/ProjectSection.js';
import SkillsSection from './skills_section/SkillsSection.js';

const Sections = () => {
    return (
        <>
            <Element id='home' name='home' className='home'>
                <HeroSection />
            </Element>
            <Element id='about' name='about' className='portfolio_content'>
                <AboutSection />
            </Element>
            <Element id='project' name='project' className='portfolio_content exception'>
                <ProjectSection />
            </Element>
            <Element id='skill' name='skill' className='portfolio_content'>
                <SkillsSection />
            </Element>
        </>
    );
};

export default Sections;
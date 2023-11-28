import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import './Sections.css'
import HeroSection from './hero_section/HeroSection';
import AboutSection from './about_section/AboutSection';
import ProjectSection from './project_section/ProjectSection';
import SkillsSection from './skills_section/SkillsSection';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Sections = () => {

    useEffect(() => { 
        Aos.init({
            once: true,
        });
    }, [])

    return (
        <>
            <Element id='home' name='home' className='home'>
                <HeroSection />
            </Element>
            <Element id='about' name='about' className='portfolio_content' data-aos='fade-up'>
                <AboutSection />
            </Element>
            <Element id='project' name='project' className='portfolio_content exception' data-aos='fade-up'>
                <ProjectSection />
            </Element>
            <Element id='skill' name='skill' className='portfolio_content' data-aos='fade-up'>
                <SkillsSection />
            </Element>
        </>
    );
};

export default Sections;
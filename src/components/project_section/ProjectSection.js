import React, { useEffect } from 'react';
import './ProjectSection.css';
import SectionHeading from '../../widgets/section_heading/SectionHeading';
import ProjectContainer from '../../widgets/project_container/ProjectContainer';
import first_project from '../../assets/image/Project 2.png';
import second_project from '../../assets/image/Project 1.svg';
import third_project from '../../assets/image/Project 4.svg';

const ProjectSection = () => {
    return (
        <>
            <SectionHeading secction_name='My Recent Work' />
            <div className='projects'>
                <div className='container'>
                    <ProjectContainer projectImg={first_project} projectName='RMTS-BRTS' projectType='Mobile App (Flutter)' projectDescription='Rajkot city bus mobile app provides route details, timings, charges,
                        live tracking, simplifying public transit. Enhancing user experience with comprehensive features
                        for efficient navigation.'/>
                </div>
                <div className='container'>
                    <ProjectContainer projectImg={second_project} projectName='Finance App' projectType='Application Design (Figma, Adobe XD)' projectDescription='User-centric design for seamless financial management. Features
                        include budget tracking, expense analysis, and intuitive interfaces for efficient money
                        management.'/>
                </div>
                <div className='container'>
                    <ProjectContainer projectImg={third_project} projectName='eSpectra' projectType='Logo Design (Adobe Illustrator)' projectDescription='The logo symbolizes dynamic synergy, innovation, and diversity.
                        Vibrant colors embody our commitment to a dynamic, inclusive future, reflecting the essence of
                        our company.'/>
                </div>
            </div>
        </>
    );
};

export default ProjectSection;
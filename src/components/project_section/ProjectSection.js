import React, { useEffect } from 'react';
import './ProjectSection.css';
import SectionHeading from '../../widgets/section_heading/SectionHeading';
import ProjectContainer from '../../widgets/project_container/ProjectContainer';
import first_project from '../../assets/image/Project 2.png';
import second_project from '../../assets/image/Project 1.svg';
import third_project from '../../assets/image/Project 4.svg';
import forth_project from '../../assets/image/Project 5.png';

const projects = [
  {
    projectImage: `${first_project}`,
    projectName: "RMTS-BRTS",
    projectType: "Mobile App (Flutter)",
    projectDDescription:
      "Rajkot city bus mobile app provides route details, timings, charges, live tracking, simplifying public transit. Enhancing user experience with comprehensive features for efficient navigation.",
    showProjectLink: true,
    projectLink: "https://github.com/NishchayDixit/rmts_brts_flutter"
  },
  {
    projectImage: `${second_project}`,
    projectName: "Finance App",
    projectType: "Application Design (Figma, Adobe XD)",
    projectDDescription:
      "User-centric design for seamless financial management. Features include budget tracking, expense analysis, and intuitive interfaces for efficient money management.",
    showProjectLink: false,
    projectLink: null,
  },
  {
    projectImage: `${third_project}`,
    projectName: "eSpectra",
    projectType: "Logo Design (Adobe Illustrator)",
    projectDDescription:
      "The logo symbolizes dynamic synergy, innovation, and diversity. Vibrant colors embody our commitment to a dynamic, inclusive future, reflecting the essence of our company.",
    showProjectLink: false,
    projectLink: null,
  },
  {
    projectImage: `${forth_project}`,
    projectName: "DNS Resolver",
    projectType: "Node Application (NodeJS)",
    projectDDescription: "A simple DNS Resolver built in Node.js using TypeScript that sends raw DNS queries over UDP to resolve domain names to their corresponding IPv4 (A) or IPv6 (AAAA) addresses.",
    showProjectLink: true,
    projectLink: "https://github.com/NishchayDixit/DNS-Resolver"
  }
];
  

const ProjectSection = () => {
    return (
        <>
            <SectionHeading secction_name='My Recent Work' />
            <div className='projects'>
                {projects.map((project, index) => (
                    <div className='container' key={index}>
                        <ProjectContainer projectImg={project.projectImage} projectName={project.projectName} projectType={project.projectType} projectDescription={project.projectDDescription} showProjectLink={project.showProjectLink} projectLink={project.projectLink}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProjectSection;
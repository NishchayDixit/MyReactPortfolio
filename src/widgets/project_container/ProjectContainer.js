import React from 'react';
import './ProjectContainer.css';

const ProjectContainer = ({projectImg, projectName, projectType, projectDescription}) => {
    return (
        <>
            <img src={projectImg} alt='project image' />
            <div className='project-info'>
                <h3 className='project-name'>{projectName}</h3>
                <p className='project-type'>{projectType}</p>
                <p className='project-description'>{projectDescription}</p>
            </div>
        </>
    );
};

export default ProjectContainer;
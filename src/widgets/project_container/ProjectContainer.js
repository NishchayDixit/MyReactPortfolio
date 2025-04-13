import React from 'react';
import './ProjectContainer.css';

const ProjectContainer = ({projectImg, projectName, projectType, projectDescription, showProjectLink, projectLink}) => {
    return (
      <>
        <img src={projectImg} alt="project image" />
        <div className="project-info">
          <h3 className="project-name">{projectName}</h3>
          <p className="project-type">{projectType}</p>
          <p className="project-description">{projectDescription}</p>
          {showProjectLink && (
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-links">View Project</a>
          )}
        </div>
      </>
    );
};

export default ProjectContainer;
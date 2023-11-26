import React from 'react';
import './SkillContainer.css';

const SkillContainer = ({ category, image, techNames }) => {
    return (
        <>
            <div className='s-container'>
                <div className='heading'>
                    <img src={image} alt={`${category} Icon`} />
                    <h3>{category}</h3>
                </div>
                <div className='tech'>
                    {techNames.map((tech, index) => (
                        <React.Fragment key={index}>
                            <div className='tech-name'>{tech}</div>
                            {index !== techNames.length - 1 && <hr />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SkillContainer;
import React from 'react';
import './SkillContainer.css';

const SkillContainer = ({ category, techNames }) => {
    return (
        <>
            <div className='s-container'>
                <div className='heading'>
                    <h3>{category}</h3>
                </div>
                <div className='tech'>
                    {techNames.map((tech, index) => (
                        <React.Fragment key={index}>
                            <div className='tech-name'>{tech}</div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SkillContainer;
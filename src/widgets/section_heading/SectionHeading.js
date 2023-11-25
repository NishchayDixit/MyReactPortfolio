import React from 'react';
import './SectionHeading.css';

const SectionHeading = ({secction_name}) => {
    return (
        <div className='section_heading'>
            <h3>{secction_name}</h3>
            <div className='heading_decoration'>
                <hr/>
            </div>
        </div>
    );
};

export default SectionHeading;
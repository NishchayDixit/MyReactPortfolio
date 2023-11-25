import React from 'react';
import './Contact.css';
import CustomBoxIcon from '../../utills/CustomBoxIcon';

const Contact = () => {
    return (
        <div className='contact-links'>
            <a href='mailto:nishchaydixit404@gmail.com' target='_blank' rel='noopener noreferrer'>
                <CustomBoxIcon name='gmail' type='logo' color='#a1a1a1'></CustomBoxIcon>
            </a>
            <a href="https://github.com/NishchayDixit/" target="_blank" rel="noopener noreferrer">
                <CustomBoxIcon name='github' type='logo' color='#a1a1a1'></CustomBoxIcon>
            </a>
            <a href="https://www.linkedin.com/in/nishchay-dixit-1104b8241/" target="_blank" rel="noopener noreferrer">
                <CustomBoxIcon name='linkedin' type='logo' color='#a1a1a1'></CustomBoxIcon>
            </a>
        </div>
    );
};

export default Contact;
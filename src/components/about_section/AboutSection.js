import React from 'react';
import './AboutSection.css';
import MySelf from '../../assets/image/profile_pic.svg';
import SectionHeading from '../../widgets/section_heading/SectionHeading';

const AboutSection = () => {
    return (
        <>
            <SectionHeading secction_name='Who am I'/> 
            <div className='about'>
                <div className='text_content'>
                    <div className='my_self'>
                        <p><span>Hello, I'm Nishchay Dixit</span>, A multi-talented creative with a passion for web
                            and app development, UI/UX design, and graphic design. I thrive on turning ideas into
                            captivating digital experiences. Let's build something
                            amazing together!</p>
                    </div>
                </div>
                <div className='a_frame'>
                    <img src={MySelf} alt='Me' className='a_visual' />
                    <div className='a_content'>
                        <div className='a_text'>
                            <h2 className='blurb_heading'>Nothing is<br />impossible</h2>
                            <p className='blurb_copy no-margin'>If you just work smart enough at it</p>
                        </div>
                        <p className='a_content-signature'>Nishchay Dixit</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;
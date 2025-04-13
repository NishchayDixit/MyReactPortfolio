import React from 'react';
import './SkillsSection.css';
import SectionHeading from '../../widgets/section_heading/SectionHeading';
import SkillContainer from '../../widgets/skill_container/SkillContainer';


const SkillsSection = () => { 
    const webDevelopmentTech = ['JavaScript', "TypeScript",  'ReactJS'];
    const backendDevelopmentTech = ["NodeJS", "ExpressJS"];
    const uiuxdesign = ['Figma', 'Adobe XD'];
    const graphicdesign = ['Adobe Illustrator'];

    return (
        <>
            <SectionHeading secction_name='Skill Set' />
            <div className='skills'>
                <div className='skill-content'>
                    <div className='view'>
                        <SkillContainer category='Web Development' techNames={webDevelopmentTech}/>
                        <SkillContainer category='Backend Development' techNames={backendDevelopmentTech}/>
                    </div>
                    <div className='view'>
                    <SkillContainer category='UI/UX Design' techNames={uiuxdesign}/>
                        <SkillContainer category='Graphic Design' techNames={graphicdesign}/>
                    </div>
                    <div className='view'>
                        <SkillContainer category='Database' techNames={['MongoDB', 'MySQL', 'PostgreSQL']}/>
                        <SkillContainer category='Version Control' techNames={['Git', 'GitHub']}/>
                    </div>
                    <div>
                        <SkillContainer category='AWS Services' techNames={["EC2", "S3", "RDS", "Lambda"]}/> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsSection;
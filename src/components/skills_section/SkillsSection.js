import React from 'react';
import './SkillsSection.css';
import SectionHeading from '../../widgets/section_heading/SectionHeading';
import SkillContainer from '../../widgets/skill_container/SkillContainer';


const SkillsSection = () => { 
    const webDevelopmentTech = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS'];
    const mobileDevelopmentTech = ['Android', 'Flutter'];
    const uiuxdesign = ['Figma', 'Adobe XD'];
    const graphicdesign = ['Adobe Illustrator'];

    return (
        <>
            <SectionHeading secction_name='Skill Set' />
            <div className='skills'>
                <div className='skill-content'>
                    <div className='view'>
                        <SkillContainer category='Web Development' techNames={webDevelopmentTech}/>
                        <SkillContainer category='App Development' techNames={mobileDevelopmentTech}/>
                    </div>
                    <div className='view'>
                    <SkillContainer category='UI/UX Design' techNames={uiuxdesign}/>
                        <SkillContainer category='Graphic Design' techNames={graphicdesign}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsSection;
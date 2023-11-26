import React from 'react';
import './SkillsSection.css';
import SectionHeading from '../../widgets/section_heading/SectionHeading';
import SkillContainer from '../../widgets/skill_container/SkillContainer';
import web_dev from '../../assets/image/web_dev.png';
import mobile_dev from '../../assets/image/mobile_dev.png';
import ui_ux_design from '../../assets/image/ui_ux_design.png';
import graphic_design from '../../assets/image/graphic_design.png';


const SkillsSection = () => { 
    const webDevelopmentTech = ['JavaScript', 'ReactJS', 'NodeJS'];
    const mobileDevelopmentTech = ['Android', 'Flutter'];
    const uiuxdesign = ['Figma', 'Adobe XD'];
    const graphicdesign = ['Adobe Illustrator'];

    return (
        <>
            <SectionHeading secction_name='Skill Set' />
            <div className='skills'>
                <div className='skill-content'>
                    <div className='view'>
                        <SkillContainer category='Web Development' image={web_dev} techNames={webDevelopmentTech}/>
                        <SkillContainer category='App Development' image={mobile_dev} techNames={mobileDevelopmentTech}/>
                    </div>
                    <div className='view'>
                    <SkillContainer category='UI/UX Design' image={ui_ux_design} techNames={uiuxdesign}/>
                        <SkillContainer category='Graphic Design' image={graphic_design} techNames={graphicdesign}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsSection;
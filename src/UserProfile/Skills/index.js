import React from 'react';
import Languages from './Languages/index';
import SoftwareSkills from './SoftwareSkills/index';
import OtherSkills from './OtherSkills/index';


const Skills = ({ skills, skillsPage, pageToPreview }) => {
    const handleClick = (e) => {
        pageToPreview("skillsPage");
    }

    return (
        <div className = "details">
            <span
                className="details__title"
                onClick={handleClick}>Skills</span>
            { skillsPage ?
                (<div className="wrapper skills__wrapper">
                    {skills.languages.length ?
                        (<Languages
                            languages={skills.languages}
                        />) : null}
                    { skills.softwareSkills.length ?
                        (<SoftwareSkills
                            softwareSkills={skills.softwareSkills}
                        />) : null}
                    { skills.otherSkills.length ?
                        (<OtherSkills
                            otherSkills={skills.otherSkills}
                        />) : null}
                </div>
                ) : null}
        </div>

    )
}

export default Skills;

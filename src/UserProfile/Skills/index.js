import React from 'react';
import Languages from './Languages/index';
import SoftwareSkills from './SoftwareSkills/index';
import OtherSkills from './OtherSkills/index';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const Skills = () => {
    const skills = useSelector(state => state.userToPreview.skills);
    const pathName = useLocation().pathname;

    return (
        <div
            className={`details ${pathName === "/profile/skills" ? "active-subpage" : ""}`}>
            <Link to='/profile/skills'>
                <span
                    className="details__title">Skills</span>
            </Link>
            {pathName === "/profile/skills" && skills ?
                (<div className="wrapper skills__wrapper">
                    {skills.languages?.length ?
                        (<Languages
                            languages={skills.languages}
                        />) : null}
                    {skills.softwareSkills?.length ?
                        (<SoftwareSkills
                            softwareSkills={skills.softwareSkills}
                        />) : null}
                    {skills.otherSkills?.length ?
                        (<OtherSkills
                            otherSkills={skills.otherSkills}
                        />) : null}
                </div>
                ) : null}
        </div>

    )
}

export default Skills;

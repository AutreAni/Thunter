import React from 'react';
import Languages from './Languages/index';
import SoftwareSkills from './SoftwareSkills/index';
import OtherSkills from './OtherSkills/index';
import { setActiveSubpage } from '../../actions/features/activeSubpageSlicer';
import { useSelector, useDispatch } from 'react-redux';

const Skills = () => {
    const dispatch = useDispatch();
    const activePage = useSelector(state => state.userToPreview.activeSubpage);
    const skills = useSelector(state => state.userToPreview.skills)

    const setActivePage = () =>  activePage === "SKILLS"?
                                dispatch(setActiveSubpage("")):
                                dispatch(setActiveSubpage("SKILLS"));
    return (
        <div
          className = {`details ${activePage ==="SKILLS" ? "active-subpage" : ""}`}>
            <span
                className="details__title"
                onClick={setActivePage}>Skills</span>
            { activePage === "SKILLS" && skills ?
                (<div className="wrapper skills__wrapper">
                    {skills.languages?.length ?
                        (<Languages
                            languages={skills.languages}
                        />) : null}
                    { skills.softwareSkills?.length ?
                        (<SoftwareSkills
                            softwareSkills={skills.softwareSkills}
                        />) : null}
                    { skills.otherSkills?.length ?
                        (<OtherSkills
                            otherSkills={skills.otherSkills}
                        />) : null}
                </div>
                ) : null}
        </div>

    )
}

export default Skills;

import React from 'react';
import LivesIn from './LivesIn/index';
import Family from './Family/index';
import Employment from './Employment/index';
import Education from './Education/index';
import Age from './Age/index';
import { setActiveSubpage } from '../../actions/activeSubpage';
import { useSelector, useDispatch } from 'react-redux';


const About = () => {
    const activePage = useSelector(state => state.userToPreview.activeSubpage);
    const about = useSelector(state => state.userToPreview.about)
    const dispatch = useDispatch();

    const setPageToAbout = () => dispatch(setActiveSubpage("ABOUT"));

    return (
        <div 
         className = {`details ${activePage ==="ABOUT" ? "active-subpage" : ""}`}             
        >
            <span
               className = "details__title"            
                onClick={setPageToAbout}>About</span>
            { activePage === "ABOUT" && about ?
                (<div className="wrapper about__wrapper">
                    {about.birthDate ?
                        (<Age
                            birthDate={about.birthDate}
                        />
                        ) : null}
                    {about.livesIn ?
                        (<LivesIn
                            livesIn={about.livesIn}
                        />) : null}
                    {about.family ?
                        (<Family
                        />) : null}
                    {about.employment ?
                        (<Employment
                            employment={about.employment}
                        />) : null}
                    {about.education ?
                        (<Education
                            education={about.education}
                        />) : null}

                </div>
                ) : null}
        </div>
    )
}

export default About

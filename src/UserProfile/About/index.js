import React from 'react';
import LivesIn from './LivesIn/index';
import Family from './Family/index';
import Employment from './Employment/index';
import Education from './Education/index';
import Age from './Age/index';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom'


const About = () => {
    const about = useSelector(state => state.userToPreview.about)
    const pathName = useLocation().pathname;
  
    return (
        <div 
         className = {`details ${ pathName ==="/profile/about" ? "active-subpage" : ""}`}             
        >
        <Link to = "/profile/about">
            <span
               className = "details__title">About</span>
        </Link>
            { pathName ==="/profile/about" && about ?
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

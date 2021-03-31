import React from 'react';
import LivesIn from './LivesIn/index';
import Family from './Family/index';
import Employment from './Employment/index';
import Education from './Education/index';

const About = ({ about, aboutPage, pageToPreview}) => {
    const handleClick = (e) => {
        pageToPreview("aboutPage");
    }
  
    return (
        <div className = "details">
            <span 
            className = "details__title" 
            onClick ={handleClick}>About</span>
            { aboutPage ?
                (<div className="wrapper about__wrapper">
                    {about.livesIn ?
                        (<LivesIn
                            livesIn={about.livesIn}
                        />) : null}
                    {about.family ?
                        (<Family
                            ids={about.family}
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

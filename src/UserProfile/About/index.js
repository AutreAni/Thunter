import React, { useState } from 'react';
import LivesIn from './LivesIn/index';
import Family from './Family/index';
import Employment from './Employment/index';
import Education from './Education/index';

const About = ({ about }) => {
    const [display, setDisplayAbout] = useState(false);

    const handleClick = () => {
        setDisplayAbout(true);
    }
    return (
        <div>
            <span className="about" onClick={handleClick}>About</span>
            { display ?
                (<div className="about__wrapper">
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

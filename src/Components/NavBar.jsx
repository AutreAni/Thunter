import React, { Component } from 'react';
import ButtonGroup from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhotoVideo, faStickyNote,faCalendar } from '@fortawesome/free-solid-svg-icons'
import InputImg from './InputImg';

class NavBar extends Component {
 
  render() { 
    return ( 
      <div className="navDiv">
        <InputImg />
        <nav>
          <ul className ="ulClass">
            <li> Photo 
            <FontAwesomeIcon className="marginIcon" icon={faPhotoVideo} />
            </li>
            <li>
              Add Notes
              <FontAwesomeIcon className="marginIcon" icon={faStickyNote} />
            </li>
            <li>
              Calendar
              <FontAwesomeIcon className="marginIcon" icon={faCalendar} />
            </li>
          </ul>
        </nav>
        
        <ButtonGroup  />
       
       
        
      </div>
     );
  }
}
 
export default NavBar;
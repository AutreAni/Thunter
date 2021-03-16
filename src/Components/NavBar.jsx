import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhotoVideo, faStickyNote,faCalendar,faWindowClose } from '@fortawesome/free-solid-svg-icons'
import InputImg from './InputImg';
import Example from './Example'

class NavBar extends Component {

  render() { 
    return ( 
      <div className="navDiv">
        <InputImg />
        <nav>
          <ul className ="ulClass">
            <li><Example name="Photo" title="Edit your photo" message="Select images to share" input ={<input className=" btn btn-secondary" type="file"></input>}/> 
            <FontAwesomeIcon className="marginIcon" icon={faPhotoVideo} />
          
            </li>
            <li>
            <Example name="Video" title="Select/Edit your video" message="Select video to share"input ={<input className=" btn btn-secondary" type="file"></input>} /> 
              <FontAwesomeIcon className="marginIcon" icon={faStickyNote} />
            </li>
            <li>
            <Example name="Event" title="Create event" message = "Write here" input ={   <textarea  className=" btn btn-secondary" ></textarea>} /> 
              <FontAwesomeIcon className="marginIcon" icon={faCalendar} />
            </li>
          </ul>
        </nav>
      
      </div>
     );
  }
}
 
export default NavBar;
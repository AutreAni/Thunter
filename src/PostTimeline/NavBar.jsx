import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhotoVideo, faStickyNote,faCalendar } from '@fortawesome/free-solid-svg-icons'
import InputImg from './InputImg';
import Example from './Example'
// import LikeButtons from './LikesButtons';

class NavBar extends Component {
   
  render() { 
    return ( 
      <div className="navDiv">
        <InputImg userData = {this.props.userData} />
        {/* <LikeButtons /> */}
        <nav className="navContainer">
        <input className="navInput" type="text" placeholder = "Add a post..." />

          <ul className ="ulClass">
            <li><Example name="Photo" title="Edit your photo" message="Select images to share" input ={<input type="file"></input>}/> 
            <FontAwesomeIcon className="marginIcon" icon={faPhotoVideo} />
          
            </li>
            <li>
            <Example name="Video" title="Select/Edit your video" message="Select video to share"input ={<input  type="file"></input>} /> 
              <FontAwesomeIcon className="marginIcon" icon={faStickyNote} />
            </li>
            <li>
            <Example name="Event" title="Create event" message = "Write here" input ={   <textarea></textarea>} /> 
              <FontAwesomeIcon className="marginIcon" icon={faCalendar} />
            </li>
          </ul>
        </nav>
      
      </div>
     );
  }
}
 
export default NavBar;
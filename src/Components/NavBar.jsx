import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhotoVideo, faStickyNote,faCalendar,faWindowClose } from '@fortawesome/free-solid-svg-icons'
import InputImg from './InputImg';
import Example from './Example'

class NavBar extends Component {
  constructor(props){
    super(props);
  }

  render() { 
    return ( 
      <div className="navDiv">
        <InputImg userData = {this.props.userData}/>
        <nav>
          <ul className ="ulClass">
            <li><Example /> 
            <FontAwesomeIcon className="marginIcon" icon={faPhotoVideo} />
          
            </li>
            <li>
            <Example /> 
              <FontAwesomeIcon className="marginIcon" icon={faStickyNote} />
            </li>
            <li>
            <Example /> 
              <FontAwesomeIcon className="marginIcon" icon={faCalendar} />
            </li>
          </ul>
        </nav>
      
      </div>
     );
  }
}
 
export default NavBar;
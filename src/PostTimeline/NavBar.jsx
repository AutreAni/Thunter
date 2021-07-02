import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhotoVideo, faStickyNote, faCalendar } from '@fortawesome/free-solid-svg-icons'
import InputImg from './InputImg';
import Example from './Example'

const NavBar = ({ setTextInput }) => {
  const [value, setValue] = useState("");


  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTextInput(value);
    setValue("");
  }
  return (
    <div className="navDiv">
      <InputImg />
      <nav className="navContainer">
        <form onSubmit={handleSubmit}>
          <input className="navInput" type="text" placeholder="Add a post..."
            value={value}
            onChange={handleChange}
          />

        <ul className="ulClass">
          <li><Example name="Photo" title="Post a photo" message="Select images to share" input={<input type="file"></input>} />
            <FontAwesomeIcon className="marginIcon" icon={faPhotoVideo} />

          </li>
          <li>
            <Example name="Video" title="Select/Edit your video" message="Select video to share" input={<input type="file"></input>} />
            <FontAwesomeIcon className="marginIcon" icon={faStickyNote} />
          </li>
          <li>
            <Example name="Event" title="Create event" message="Write here" input={<textarea></textarea>} />
            <FontAwesomeIcon className="marginIcon" icon={faCalendar} />
          </li>
        </ul>
        </form>
      </nav>

    </div>
  );
}

export default NavBar;
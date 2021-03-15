import React from 'react';

const InputImg = () => {
  return ( 
    <div className="inputDiv">
       <img src="http://placeimg.com/40/40/people" alt=" photo" className="profile-image"></img>
       <input className="navInput" type="text" placeholder="Start a post..." />
    </div>
   );
}
 
export default InputImg;
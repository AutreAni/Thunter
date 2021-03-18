import React from 'react';
import Avatar from '../UserProfile/Avatar/index';

const InputImg = (props) => {
 
  return ( 
    <div className="inputDiv">
      {props.userData ? 
       <Avatar userData = {props.userData}  />       
       :null}
       <input className="navInput" type="text" placeholder="Start a post..." />
    </div>
   );
}
 
export default InputImg;
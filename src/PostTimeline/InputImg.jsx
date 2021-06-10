import React from 'react';
import Avatar from '../UserProfile/Avatar/index';
import { useSelector } from 'react-redux';

const InputImg = () => {
  const avatar = useSelector(state => state.currentUser.picture)
 
  return ( 
    <div className="inputDiv">
      <span className = "timeline-avatar">
       <Avatar avatar = { avatar }  /> 
       </span>      
    </div>
   );
}
 
export default InputImg;
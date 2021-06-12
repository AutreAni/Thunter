import React from 'react';
import Avatar from '../UserProfile/Avatar/index';
import { useSelector } from 'react-redux';

const InputImg = () => {
  const avatar = useSelector(state => state.currentUser.picture)
 
  return ( 
    <div className="inputDiv">
      <span style = {{width:"45px", height:"45px"}}>
       <Avatar avatar = { avatar }  /> 
       </span>      
    </div>
   );
}
 
export default InputImg;
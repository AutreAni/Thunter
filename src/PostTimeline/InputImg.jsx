import React from 'react';
import Avatar from '../UserProfile/Avatar/index';

const InputImg = (props) => {
 
  return ( 
    <div className="inputDiv">
      {props.userData ? 
      <span style = {{width:"45px", height:"45px"}}>
       <Avatar userData = {props.userData}  /> 
       </span>      
       :null}
    </div>
   );
}
 
export default InputImg;
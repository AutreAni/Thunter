import React from 'react';
import Avatar from '../UserProfile/Avatar/index';

const InputImg = (props) => {
  return ( 
    <div className="inputDiv">
      {props.userData ? 
      <span style = {{width:"40px", height:"40px"}}>
       <Avatar style= {{width:"40px", height:"40px" }}
        userData = {props.userData}/>
        </span>       
       :null}
       <input className="navInput" type="text" placeholder="Start a post..." />
    </div>
   );
}
 
export default InputImg;
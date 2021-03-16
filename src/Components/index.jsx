import React, { Component } from 'react';



import NavBar from './NavBar';

const Components = (props) => {
  return ( 
    <React.Fragment>
      <NavBar userData = {props.userData}/>
    </React.Fragment>
   );
}
 
export default Components;

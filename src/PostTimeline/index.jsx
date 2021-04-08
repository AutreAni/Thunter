import React, { Component } from 'react';
// import './timeLine.css'


import NavBar from './NavBar';

const Components = (props) => {
  return ( 
    <React.Fragment>
      <NavBar userData = {props.userData}/>
    </React.Fragment>
   );
}
 
export default Components;

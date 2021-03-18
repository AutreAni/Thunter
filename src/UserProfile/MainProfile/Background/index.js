import React from 'react';
import AddPicture from '../AddPicture/index'

const Background = (props) => {
    return (
        <div className = "background">
        {props.userData?.backgroundImg?  <img className = "bg__img" alt = "bg" src = {props.userData.backgroundImg}/> :null} 
        <AddPicture/>           
        </div>
    )
}

export default Background;
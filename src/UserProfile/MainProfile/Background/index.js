import React from 'react'

const Background = (props) => {
    return (
        <div className = "background">
        {props.userData?.backgroundImg?  <img className = "bg__img" alt = "bg" src = {props.userData.backgroundImg}/> :null}            
        </div>
    )
}

export default Background;
import React from 'react'

const Username = (props) => {
    return (
        <span 
        className = "username"
        >
        {props.userData.username}
        </span>
    )
}

export default Username

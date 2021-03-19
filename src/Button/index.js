import React from 'react';
import '../css-modules/Button/style.css';

const Button = ({buttonName, handleButtonClick})=>{
    return (
        <div className = "button__wrapper" onClick = {handleButtonClick}>
        <button>{buttonName}</button>            
        </div>
    )
}

export default Button;

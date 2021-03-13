import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputField = (props) => {
    const handleBlur = (e) => {
        props.handleFocusout(e)
    }

    return (
        <div className = {props.className + " inputField"}>
            <FontAwesomeIcon className = "icon"
             icon = {props.icon}
             />
            <input 
            name = {props.name}
            type = {props.inputType} 
            placeholder = {props.placeholder}
            onBlur = {handleBlur}
            />   
             {props.errorMsg ? 
             (<span className = "error__msg">
             {props.errorMsg}
             </span>
             ) : null}         
        </div>
    )
}

export default InputField

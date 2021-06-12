import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputField = (props) => {
    const [value, setValue] = useState("");
    const handleBlur = (e) => {
        props.handleFocusout(e)
    }
    const handleChange = (e) => {
        setValue(e.target.value);
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
            value = {value}
            onChange = {handleChange}
            />   
             {props.errorMsg ? 
             (<span className = "error__msg">
             {props.errorMsg}
             </span>
             ) : null}         
        </div>
    )
}

export default InputField;

import React, { useState } from 'react';


const InputField = ({ labelName, handleBlur, handleInputChange,
    type, name, value, errorMsg, pattern }) => {

    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e) => {
        if (e.target.name === "username") {
            handleInputChange(e.target.value)
        }
        setInputValue(e.target.value)
    }

    return (
        <div className="details__fields input__field">
            <label>{labelName}</label>
            <div className = "input__wrapper">
            <div>
                <input
                    type={type}
                    name={name}
                    value={inputValue}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    pattern={pattern}
                />
                {name === "about.birthDate" ? <span>Format YYYY/MM//DD</span> : null}
               </div> 
                {errorMsg ? <span className="errorMsg"> {errorMsg}</span> : null}
           </div>         
        </div>
    )
}

export default InputField

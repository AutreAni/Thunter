import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from '@fortawesome/free-solid-svg-icons';


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
            <label>{labelName}
                <input
                    type={type}
                    name={name}
                    value={inputValue}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    pattern={pattern}
                />
                {errorMsg ? <span className="errorMsg"> {errorMsg}</span> : null}
                <FontAwesomeIcon
                    icon={faPen}
                    className="icon"
                />
            </label>
            {name === "about.birthDate" ? <span>Format YYYY/MM//DD</span> : null}
        </div>
    )
}

export default InputField

import React, { useState } from "react";


function LessText (props){
    const [state, setState] = useState(true);

    const{max = 2, text } = props;
    return (
        <span>{state ? `${text.substring(0, max)}...`: text}
        <a href='/some/valid/uri' onClick={(evt)=>{
            evt.preventDefault()
            setState(!state);
        }}>{state ?  'more': ' less'}</a>
        </span>
    )
}

export default LessText;
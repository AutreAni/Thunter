import React from 'react';
import '../css-modules/Timeline/style.scss';
import NavBar from './NavBar';
import { useState } from 'react';
import Main from '../main/timeLine';

const Components = () => {
  const [mains,setMain] = useState(null);
  const [pending,setPending] = useState(true);
  const [error,setError] = useState(null);
  const [textInput, setTextInput] = useState("");


  return ( 
    <React.Fragment>
      <NavBar
        textInput = { textInput }
        setTextInput = { setTextInput }
      />
      <Main
       mains = {mains}
       setMain = {setMain}
       pending = {pending}
       setPending = { setPending }
       error = {error}  
       setError = { setError }
       textInput = {textInput}
       setTextInput = { setTextInput }
       />
    </React.Fragment>
   );
}
 
export default Components;

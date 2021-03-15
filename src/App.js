import React, { useState } from 'react';
import './App.css';
import SignForm from "./SignForm/index";
import UserProfile from "./UserProfile/index";
import Components from './Components/index'


function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [currentUser, setUserData] = useState();


  const setData = ({ username, name, email, password, picture }) => {
    setUserData({
      username: username?username :name.split(" ")[0],
      email,
      password,
      picture: picture?.data.url
    })
    // setUsername(username);
    // setEmail(email);
    // setPassword(password);
    // setAvatar(picture? picture.data.url:null);
  }

  const handleSubmit = (data) => {
    setLoggedin(true);
    setData(data);
  }

  return (
    <div className="App">
      {loggedin ? 
      <UserProfile userData = {currentUser}/>
      : null}
      { !loggedin ?
        (<SignForm
          performSubmit={handleSubmit}
        />) : null}

<Components />
    </div>
  );
}

export default App;

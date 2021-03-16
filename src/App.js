import React, { useState } from 'react';
import './App.css';
import SignForm from "./SignForm/index";
import Header from './Header/index';
import Main from './Main/index';



function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState();


  const setData = ({ username, name, email, password, picture }) => {
    setCurrentUser({
      username: username ? username : name.split(" ")[0],
      email,
      password,
      picture: picture?.data.url
    })
  }

  const handleSubmit = (data) => {
    setLoggedin(true);
    setData(data);
  }

  const performSignOut = () => {
    setLoggedin(false);
    setCurrentUser(null);
  }

  return (
    <div className="App">
      { !loggedin ?
        (<SignForm
          performSubmit={handleSubmit}
        />) : <Header
        userData={currentUser}
        performSignOut={performSignOut}
      />}
      {loggedin ?
        <Main userData={currentUser} />
        : null}
    </div>
  );
}

export default App;

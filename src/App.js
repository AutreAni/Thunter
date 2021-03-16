import React, { useState } from 'react';
import './App.css';
import SignForm from "./SignForm/index";
<<<<<<< HEAD
import Header from './Header/index';
import Main from './Main/index';
=======
import UserProfile from "./UserProfile/index";
import Components from './Components/index'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fcdef8ca0f842f86b49edf4f97e879cf751b2a5
=======
>>>>>>> 2fcdef8ca0f842f86b49edf4f97e879cf751b2a5
=======
>>>>>>> 2fcdef8ca0f842f86b49edf4f97e879cf751b2a5


function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState();


  const setData = ({ username, name, email, password, picture }) => {
    setCurrentUser({
      username: username?username :name.split(" ")[0],
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
      userData = {currentUser}
      performSignOut = {performSignOut}
      />}
      {loggedin ? 
      <Main userData = {currentUser}/>
      : null}
<<<<<<< HEAD
=======
      { !loggedin ?
        (<SignForm
          performSubmit={handleSubmit}
        />) : null}

<Components />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fcdef8ca0f842f86b49edf4f97e879cf751b2a5
=======
>>>>>>> 2fcdef8ca0f842f86b49edf4f97e879cf751b2a5
=======
>>>>>>> 2fcdef8ca0f842f86b49edf4f97e879cf751b2a5
    </div>
  );
}

export default App;

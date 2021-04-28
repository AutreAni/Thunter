import React, { useState } from 'react';
import './App.css';
import SignForm from "./SignForm/index";
import Home from './Home/index';

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [signedIn, setSignedIn] = useState(false);


  const setData = ({ username, name, id, email, password, picture, backgroundImg, audience, about, skills }) => {
    setCurrentUser({
      username: username ? username : name.split(" ")[0],
      name: name,
      id: id,
      email,
      password,
      picture: picture?.data?.url || picture || null,
      backgroundImg: backgroundImg ? backgroundImg : null,
      audience: audience ? audience : null,
      currentUser: true,
      about: {
        family: about?.family || null,
        livesIn: about?.livesIn || null,
        employment: about?.employment || null,
        education: about?.education || null,
        birthDate: about?.birthDate || null
      },
      skills: {
        languages: skills?.languages || null,
        softwareSkills: skills?.softwareSkills || null,
        otherSkills: skills?.otherSkills || null,
      }
    })
  }


  const handleSubmit = (data) => {
    setData(data);
    setSignedIn(true);
  }

  const performSignOut = () => {
    setCurrentUser(null);
    setSignedIn(false);
  }

  const updatePicture = (field, url) => {
    setCurrentUser({
      ...currentUser,
      [field]: url
    });
  }

  const updateUserData = (obj) => {
    setCurrentUser({
      ...currentUser,
      ...obj
    })
  }


  return (
    <div className="App">
      { signedIn ?
        (<Home
          userData={currentUser}
          performSignOut={performSignOut}
          updatePicture={updatePicture}
          updateUserData={updateUserData}
        />)
        :
        (<SignForm
          performSubmit={handleSubmit}
        />)
      }
    </div>
  );
}

export default App;

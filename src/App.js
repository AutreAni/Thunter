import React, { useState, Fragment } from 'react';
import './App.css';
import SignForm from "./SignForm/index";
import Header from './Header/index';
import Home from './Home/index';
import MainProfile from './UserProfile/MainProfile/index';
import AudiencePage from './UserProfile/Audience/AudiencePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobSearchPage from './JobSearch/JobSearchPage';


function App() {
  const [currentUser, setCurrentUser] = useState();
  const [signedIn, setSignedIn] = useState(false);
  const [userToPreview, setUserToPreview] = useState();
 

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

  const showUserProfile = (obj) => {
    setUserToPreview(obj);
  }

  return (
    <div className="App">
      { signedIn ?
      <Fragment>
      <Router>
        <Header
          userData={currentUser}
          performSignOut={performSignOut}
          showUserProfile = {showUserProfile}
        />
        <Switch>
           <Route exact path="/" >
            <Home
              userData={currentUser}
              showUserProfile = {showUserProfile}
            />
          </Route>
          <Route path="/profile">
            <MainProfile
              userData= { userToPreview }
              updatePicture={updatePicture}
              updateUserData={updateUserData}
              showUserProfile = {showUserProfile}
            />
          </Route>
          <Route path="/audience">
            <AudiencePage
              userData={currentUser}
              showUserProfile = {showUserProfile}
            />
          </Route>
          <Route path="/jobs">
            <JobSearchPage              
            />
          </Route>
        </Switch>
        </Router>
      </Fragment>: 
     ( <SignForm
      performSubmit={handleSubmit}
      />)
      }
      
    </div>
  );
}

export default App;

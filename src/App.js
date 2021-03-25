import React, { useState } from 'react';
import './App.css';
import SignForm from "./SignForm/index";
import Header from './Header/index';
import Home from './Home/index';
import MainProfile from './UserProfile/MainProfile/index';
import AudienceMain from './UserProfile/Audience/AudienceMain';



function App() {
  const [currentUser, setCurrentUser] = useState();
  const [currentPage, setCurrentPage] = useState({ signing: true });


  const setData = ({ username, name, email, password, picture, backgroundImg, audience}) => {
    setCurrentUser({
      username: username ? username : name.split(" ")[0],
      name:name,
      email,
      password,
      picture: picture?.data?.url || picture || null,
      backgroundImg: backgroundImg? backgroundImg : null,
      audience: audience? audience : null,
      currentUser: true,
    })
  }

  const handleSubmit = (data) => {
    debugger;
    console.log(data)
    setData(data);
    setCurrentPage({ homePage: true });
  }

  const performSignOut = () => {
    setCurrentUser(null);
    setCurrentPage({ signing: true })
  }

  const goToMainProfile = () => {
    setCurrentPage({ mainProfilePage: true });
  }

  const goToJobSearch = () => {
    setCurrentPage({ jobSearchPage: true })
  }

  const goToHomePage = () => {
    setCurrentPage({ homePage: true })
  }

  const goToAudiencePage = () => {
    console.log("audience")
    setCurrentPage({audiencePage: true})
  }

  const updatePicture = (field, url) => {
    setCurrentUser({
      ...currentUser,
      [field]: url
    });
  }

  return (
    <div className="App">
      { !currentPage.signing ?
        (<Header
          userData={currentUser}
          performSignOut={performSignOut}
          goToMainProfile={goToMainProfile}
          goToHomePage = {goToHomePage}
        />) : null
      }
      { currentPage.signing ?
        (<SignForm
          performSubmit={handleSubmit}
        />) : null
      }
      { currentPage.homePage ?
        (<Home 
          userData={currentUser}
          goToMainProfile={goToMainProfile}
          goToJobSearch={goToJobSearch}
          goToAudiencePage = {goToAudiencePage}
        />) : null}
      { currentPage.mainProfilePage ?
        (<MainProfile
           userData = {currentUser}
           updatePicture = {updatePicture}
           goToAudiencePage = {goToAudiencePage}
        /> ) : null}
      {currentPage.audiencePage? 
        (<AudienceMain
            userData = {currentUser}
        /> ) : null}
    </div>
  );
}

export default App;

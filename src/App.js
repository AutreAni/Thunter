import React, { useState } from 'react';
import './App.css';
import SignForm from "./SignForm/index";
import Header from './Header/index';
import Home from './Home/index';
import MainProfile from './UserProfile/MainProfile/index';
import AudiencePage from './UserProfile/Audience/AudiencePage';



function App() {
  const [currentUser, setCurrentUser] = useState();
  const [currentPage, setCurrentPage] = useState({ signing: true });


  const setData = ({ username, name, email, password, picture, backgroundImg, audience, about, skills }) => {
    setCurrentUser({
      username: username ? username : name.split(" ")[0],
      name: name,
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
        education : about?.education || null,
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
    setCurrentPage({ audiencePage: true })
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
          goToHomePage={goToHomePage}
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
          goToAudiencePage={goToAudiencePage}
        />) : null}
      { currentPage.mainProfilePage ?
        (<MainProfile
          userData={currentUser}
          updatePicture={updatePicture}
          goToAudiencePage={goToAudiencePage}
        />) : null}
      {currentPage.audiencePage ?
        (<AudiencePage
          userData={currentUser}
        />) : null}
    </div>
  );
}

export default App;

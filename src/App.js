import React, { useState } from 'react';
import './App.css';
import SignForm from "./SignForm/index";
import Header from './Header/index';
import Home from './Home/index';
import MainProfile from './UserProfile/MainProfile/index';



function App() {
  const [currentUser, setCurrentUser] = useState();
  const [currentPage, setCurrentPage] = useState({ signing: true })


  const setData = ({ username, name, email, password, picture, backgroundImg }) => {
    setCurrentUser({
      username: username ? username : name.split(" ")[0],
      email,
      password,
      picture: picture?.data?.url || picture,
      backgroundImg: backgroundImg? backgroundImg : null,
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
        />) : null}
      { currentPage.mainProfilePage ?
        (<MainProfile
           userData = {currentUser}
           updatePicture = {updatePicture}
        /> ) : null}
    </div>
  );
}

export default App;

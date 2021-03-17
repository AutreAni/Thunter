import React, { useState } from 'react';
import './App.css';
import SignForm from "./SignForm/index";
import Header from './Header/index';
import HomePage from './HomePage/index';
import MainProfile from './UserProfile/MainProfile/index';



function App() {
  const [currentUser, setCurrentUser] = useState();
  const [currentPage, setCurrentPage] = useState({ signing: true })


  const setData = ({ username, name, email, password, picture }) => {
    setCurrentUser({
      username: username ? username : name.split(" ")[0],
      email,
      password,
      picture: picture?.data.url
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
    console.log("mainProfile");
    setCurrentPage({ mainProfilePage: true });
  }

  const goToJobSearch = () => {
    setCurrentPage({ jobSearchPage: true })
  }

  const goToHomePage = () => {
    setCurrentPage({ homePage: true })
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
        (<HomePage 
          userData={currentUser}
          goToMainProfile={goToMainProfile}
          goToJobSearch={goToJobSearch}
        />) : null}
      { currentPage.mainProfilePage ?
        (<MainProfile
           userData = {currentUser}
        /> ) : null}
    </div>
  );
}

export default App;

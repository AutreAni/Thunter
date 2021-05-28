import React  from 'react';
import './App.css';
import SignForm from "./SignForm/index";
import Home from './Home/index';
import { useSelector } from 'react-redux';

function App() {

  const currentUser = useSelector(state => state.currentUser);




  const performSignOut = () => {
    // setCurrentUser(null);
  }

  const updatePicture = (field, url) => {
    // setCurrentUser({
    //   ...currentUser,
    //   [field]: url
    // });
  }

  const updateUserData = (obj) => {
    // setCurrentUser({
    //   ...currentUser,
    //   ...obj
    // })
  }


  return (
    <div className="App">
      { currentUser ?
        <Home />       
        :
        <SignForm />
      }
    </div>
  );
}

export default App;

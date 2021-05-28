import React  from 'react';
import './App.css';
import SignForm from "./SignForm/index";
import Home from './Home/index';
import { useSelector } from 'react-redux';

function App() {
  //state removed from app
  const currentUser = useSelector(state => state.currentUser);
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

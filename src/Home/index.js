import React from 'react';
import SectionProfile from '../UserProfile/SectionProfile/index';
import Components from '../PostTimeline/index';
// import '../css-modules/Main/main.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import HomePage from '../JobPage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = props => {
    return (
        <div className = "main">
            <div className = "container main__wrapper"
            style = {{display:"flex"}}>
            <SectionProfile
                userData = {props.userData}
                goToMainProfile = {props.goToMainProfile}
            />
            <Components userData = {props.userData}
            />
            <Provider store={store}>
              <HomePage />
            </Provider>
            </div>
                  
        </div>
    )
};

export default Home;
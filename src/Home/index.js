import React from 'react';
import SectionProfile from '../UserProfile/SectionProfile/index';
import Components from '../PostTimeline/index';
import { Provider } from 'react-redux';
import store from '../store/store';
import HomePage from '../JobPage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NetworkIndex from '../Network/index';



const Home = ({userData, goToMainProfile, goToAudiencePage}) => {
    return (
        <div className = "main">
            <div className = "container main__wrapper"
            style = {{display:"flex"}}>
            <SectionProfile
                userData = {userData}
                goToMainProfile = {goToMainProfile}
                goToAudiencePage = {goToAudiencePage}
            />
            <Components userData = {userData}
            />
            <div className = "jobSection">
            <Provider store={store}>
              <HomePage />
            </Provider>
<<<<<<< HEAD
            </div>
=======
>>>>>>> 9da52cb0fa2b1c63ca384fc3106fc78df4c9417e
            </div>
           </div>
           <NetworkIndex />
        </div>
    )
};

export default Home;

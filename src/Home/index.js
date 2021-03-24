import React from 'react';
import SectionProfile from '../UserProfile/SectionProfile/index';
import Components from '../PostTimeline/index';
import { Provider } from 'react-redux';
import store from '../store/store';
import HomePage from '../JobPage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NetworkIndex from '../Network/index';



const Home = props => {
    return (
        <React.Fragment>
             <div className = "main">
              <div className = "container main__wrapper"
              style = {{display:"flex"}}>
              <SectionProfile
                  userData = {props.userData}
                  goToMainProfile = {props.goToMainProfile}
              />
              <Components userData = {props.userData}
              />
              <div className = "jobSection">
              <Provider store={store}>
                <HomePage />
              </Provider>
              </div>
             </div>
          </div>
          <NetworkIndex />
        </React.Fragment>
       
    )
};

export default Home;

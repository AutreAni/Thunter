import React, { useState, useEffect, Fragment } from 'react';
import SectionProfile from '../UserProfile/SectionProfile/index';
import Components from '../PostTimeline/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimelineItem from '../main';
import Header from '../Header/index';
import MainProfile from '../UserProfile/MainProfile/index';
import AudiencePage from '../UserProfile/Audience/AudiencePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css-modules/HomePage/homepage.css';
import '../css-modules/Timeline/style.css';
import '../css-modules/JobSectionCssShushan/style.css';
import Jobs from '../JobSectionByShushan/homePageJobs';
import Search from '../JobSectionByShushan/Search';
import JobSearchForm from '../JobSectionByShushan/JobSearchForm';
import { useSelector } from 'react-redux';



const Home = () => {
    const currentUser = useSelector(state => state.currentUser);
    const userToPreview = useSelector(state => state.userToPreview);
    const [state, setState] = useState(true);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    
    useEffect(()=>{
        const setWidth = () => {
            setInnerWidth(window.innerWidth);
        }
        window.addEventListener("resize",setWidth)
        return (()=> window.removeEventListener("resize"),setWidth);
    },[innerWidth])

    return (
        <Fragment>
            <Router>
                <Header
                    userData={currentUser}
                    innerWidth = {innerWidth}
                />
                <Switch>
                    <Route exact path="/">
                        <div className="main"
                            style={{ position: 'relative' }}>
                            <div className="wrapper main__wrapper"
                                style={{ display: "flex" }}>
                                {innerWidth >= 650 ?
                                <SectionProfile /> 
                                :null }
                                <div className="timeline">
                                    <Components />
                                    <div>
                                        <TimelineItem />
                                    </div>
                                </div>
                            
                                {innerWidth >= 650? 
                                    <div className="job__section"
                                style = {{width:"25%"}}>
      
                                    <span className="a" href ='#' onClick={(evt)=>{
                                    evt.preventDefault(); 
                                    setState(!state);
                                    }}>{state ? <Search /> : 'back' }</span>
                                    {state ? <Jobs />: <JobSearchForm />}
                                </div>
                                :null}
                             </div>
                        </div>
                    </Route>
                    <Route path="/profile">
                        <MainProfile
                            userData = { userToPreview.id === currentUser.id ? currentUser :  userToPreview }
                           />
                    </Route>
                    <Route path="/audience">
                        <AudiencePage />
                    </Route>
                 </Switch>
            </Router>
        </Fragment>
    )
};

export default Home;

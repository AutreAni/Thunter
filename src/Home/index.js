import React, { useState, Fragment, useEffect } from 'react';
import SectionProfile from '../UserProfile/SectionProfile/index';
import Components from '../PostTimeline/index';
// import { Provider } from 'react-redux';
// import store from '../store/store';
import useFetchJobs from '../JobSearch/useFetchJobs';
// import HomePage from '../JobPage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from '../newCourses';
import TimelineItem from '../main';
import Header from '../Header/index';
import MainProfile from '../UserProfile/MainProfile/index';
import AudiencePage from '../UserProfile/Audience/AudiencePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobSearchPage from '../JobSearch/JobSearchPage';
import JobSection from '../JobSearch/JobSection';
import '../css-modules/HomePage/homepage.css';
import '../css-modules/Timeline/style.css';
import '../css-modules/JobSectionCssShushan/style.css';
import Jobs from '../JobSectionByShushan/homePageJobs';
import Search from '../JobSectionByShushan/Search';
import JobSearchForm from '../JobSectionByShushan/JobSearchForm'



const Home = ({ userData, performSignOut, updatePicture, updateUserData }) => {
    const [userToPreview, setUserToPreview] = useState();
    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);
    const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
    const [state, setState] = useState(true);

    const handleParamChange = (e) => {
        const param = e.target.name;
        const value = e.target.value;
        setPage(1);
        setParams(prevParams => {
            return {
                ...prevParams,
                [param]: value
            }
        })
    }

    const showUserProfile = (obj) => {
        setUserToPreview(obj);
    }

    return (
        <Fragment>
            <Router>
                <Header
                    userData={userData}
                    performSignOut={performSignOut}
                    showUserProfile={showUserProfile}
                />
                <Switch>
                    <Route exact path="/">
                        <div className="main"
                            style={{ position: 'relative' }}>
                            <div className="container main__wrapper"
                                style={{ display: "flex" }}>
                                <SectionProfile
                                    userData={userData}
                                    showUserProfile={showUserProfile}
                                /> 
                                <div className="timeline">
                                    <Components userData={userData}
                                    />

                                    <div>
                                        <TimelineItem />
                                    </div>
                                </div>
    {/* Ani */}
                                {/* <div className="job__section">
                                    {jobs.length ?
                                        <JobSection
                                            jobs={jobs} />
                                        :
                                        <Courses />
                                    }
                                </div> */}
    {/*  Shushan */}
                                <div className="job__section">
      
                                    <a className="a" href ='#' onClick={(evt)=>{
                                    evt.preventDefault(); 
                                    setState(!state);
                                    }}>{state ? <Search /> : 'back' }</a>
                                    {state ? <Jobs />: <JobSearchForm />}
                                </div>

                                {/* <Provider store={store}>
                                    <HomePage />
                                </Provider> */}

                            </div>
                        </div>
                    </Route>
                    <Route path="/profile">
                        <MainProfile
                            userData={userToPreview}
                            updatePicture={updatePicture}
                            updateUserData={updateUserData}
                            showUserProfile={showUserProfile}
                        />
                    </Route>
                    <Route path="/audience">
                        <AudiencePage
                            userData={userData}
                            showUserProfile={showUserProfile}
                        />
                    </Route>
                    <Route path="/jobs">
                        <JobSearchPage
                            params={params}
                            page={page}
                            jobs={jobs}
                            loading={loading}
                            error={error}
                            hasNextPage={hasNextPage}
                            setPage={setPage}
                            handleParamChange={handleParamChange}
                        />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
};

export default Home;

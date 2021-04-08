import React, {useState} from 'react';
import useFetchJobs from './useFetchJobs';
import JobCard from './JobCard';
import { Link } from 'react-router-dom';
import JobSearchPage from './JobSearchPage.js';

const JobSection = () => {
    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);
    const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
    const [displaySearchPage, setDisplaySearchPage] = useState(false);

    const handleParamChange = (e) => {
        const param = e.target.name;
        const value = e.target.value;
        setPage(1);
        setParams(prevParams => {
            return{
                ...prevParams,
                [param]: value
            }
        })
    }

    const handleClick = () => {
        setDisplaySearchPage(true)
    }

    const jobsArr = jobs?.slice(0, 5);
    return (
        <div>
        { !displaySearchPage ?
        (<div className = "job__section">
           <Link to = "/jobs">
               <span onClick = {handleClick}>Search for jobs</span>
           </Link> 
           {jobsArr && jobsArr.map(job => {
                return <JobCard key={job.id} job={job} />
            })
           }
           </div>):
           ( <JobSearchPage
                params = { params }
                page = { page }
                jobs = { jobs }
                loading = { loading }
                error = { error }
                hasNextPage = { hasNextPage }
                setPage = { setPage }
                handleParamChange = { handleParamChange }
            />)}       
        </div>)
}

export default JobSection

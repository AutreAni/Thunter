import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import JobCard from './JobCard';
import JobsPagination from './JobsPagination';
import JobSearchForm from './JobSearchForm';

function JobSearchPage( {params, page, loading, error, jobs, setPage, handleParamChange, hasNextPage}) {
    // const [params, setParams] = useState({});
    // const [page, setPage] = useState(1);
    // const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

    // const handleParamChange = (e) => {
    //     const param = e.target.name;
    //     const value = e.target.value;
    //     setPage(1);
    //     setParams(prevParams => {
    //         return{
    //             ...prevParams,
    //             [param]: value
    //         }
    //     })
    // }

    return (
        <div>
            <h3>Looking for a job?</h3>
            <JobSearchForm
            params = {params}
            onParamChange = {handleParamChange}/>
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error. Try Refreshing.</h1>}
            {jobs.map(job => {
                return <JobCard key={job.id} job={job} />
            })}
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        </div>
    )
}

export default JobSearchPage

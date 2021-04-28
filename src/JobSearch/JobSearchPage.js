import React from 'react';
import JobCard from './JobCard';
import JobsPagination from './JobsPagination';
import JobSearchForm from './JobSearchForm';
import '../css-modules/JobSearch/JobPage/styel.css';

function JobSearchPage( {params, page, loading, error, jobs, setPage, handleParamChange, hasNextPage}) {

    return (
        <div className = "container job">
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

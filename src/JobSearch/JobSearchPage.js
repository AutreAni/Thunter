import React from 'react';
import JobCard from './JobCard';
import JobsPagination from './JobsPagination';
import JobSearchForm from './JobSearchForm';
import '../css-modules/JobSearch/JobPage/style.css';
import '../css-modules/JobSearch/Response/response.css'

function JobSearchPage( {params, page, loading, error, jobs, setPage, handleParamChange, hasNextPage}) {

    return (
        <div className = "container job">
            <JobSearchForm
            params = {params}
            onParamChange = {handleParamChange}/>
            {!loading && !error && <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />}
            {loading && <div className = "response__wrapper loading"><span>Loading...</span></div>}
            {error && <div className = "response__wrapper error"><span>Error.Please, refresh the page</span></div>}
            {jobs.map(job => {
                return <JobCard key={job.id} job={job} />
            })}
            {!loading && !error && <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />}
        </div>
    )
}

export default JobSearchPage

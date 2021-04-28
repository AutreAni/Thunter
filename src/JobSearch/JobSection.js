import React, {Fragment} from 'react';
import JobCard from './JobCard';
import { Link } from 'react-router-dom';
import '../css-modules/JobSearch/SectionJobs/style.css';

const JobSection = ( { jobs }) => {

    const jobsArr = jobs?.slice(0, 5);
    return (
        <Fragment>
           <Link to = "/jobs">
               <span>Search for jobs</span>
           </Link> 
           {jobsArr && jobsArr.map(job => {
                return <JobCard key={job.id} job={job} />
            })
           }
        </Fragment>
        )
}

export default JobSection

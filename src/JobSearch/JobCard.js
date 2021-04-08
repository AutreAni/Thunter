import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const JobCard = ({ job }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className = "job__card">
        <div className = "job__title">
            {job.title} -
            <span className = "company__name">
                {job.company}
            </span>
        </div>
        <div className = "job__date">
            {new Date(job.created_at).toLocaleString()}
        </div>
        <div className = "job__badge">
            <span>{job.type}</span>
            <span>{job.location}</span>
        </div>
        <div className = "job__apply__link">
        <ReactMarkdown source = {job.how_to_apply}/>
           </div>
        <div className = "company__logo">
            <img style = {{height:'50px'}}src = {job.company_logo} alt = {job.company}/>
        </div>
        <div className = "view__details">
            <span className = "details__btn"
             onClick = {handleClick}>View Details</span>
               {open ? <ReactMarkdown
                source = {job.description}
                /> : null }             
        </div>
        </div>
    )
}

export default JobCard

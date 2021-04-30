import React from 'react';
import '../css-modules/JobSectionCssShushan/jobSearchForm.css';

const JobSearchForm = () => {
    return (
        <form className='job'>
        <input type = "text"  placeholder = "desciption"
        autoComplete = "on" name = "desciption"/>
        <input type = "text"
        placeholder = "location"
        autoComplete = "on" name = "location" />
        <div className = "full__time">
        <label class="full__time__label">Full Time
        <input type="checkbox" 
        name = "full_time" />
        <span class="checkmark"></span>
        </label>        
         </div> 
        </form>
    )
}

export default JobSearchForm

import React from 'react'

const JobSearchForm = ({ params, onParamChange }) => {
    return (
        <form>
        <input type = "text" value = {params.description} placeholder = "desciption"
        autoComplete = "on" name = "desciption" onChange = {onParamChange}/>
        <input type = "text" value = {params.location}
        placeholder = "location"
        autoComplete = "on" name = "location" onChange = {onParamChange}/>
        <div className = "full__time">
        <label>
        <input type = "checkbox" value = {params.full_time}
        name = "full_time" onChange = {onParamChange}
        />Full time
         </label>  
         </div> 
        </form>
    )
}

export default JobSearchForm

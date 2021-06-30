import React, { useEffect,useState  } from 'react';
import '../css-modules/JobSectionCssShushan/jobSearchForm.scss';
import JobList from './jobList';



const JobSearchForm = () => {

    const [name, setTitle] = useState("");
    const [mains, setMain] = useState();

    useEffect(() => {
        if(name.length=== 4){
        fetch(` http://localhost:3000/${name}`)
        .then(res=>{
            if(!res.ok){
             throw Error("could not fetch tha data")
            }
            return res.json();
          })
          .then(data =>{
            setMain(data)
            
          })
        }
    },[name]);

    return (
     
        <div className='searchJob'>
          <form className='job'>
            <input type = "text" value={name} onChange={(evt) => setTitle(evt.target.value)}  placeholder = "search by title"
            autoComplete = "off" name = "desciption"/>
            <input type = "text"
            placeholder = "location"
            autoComplete = "on" name = "location" />
          </form>
          <div>
            {mains && <JobList jobs={mains} />}
          </div>  
        </div>
       
    )
}

export default JobSearchForm












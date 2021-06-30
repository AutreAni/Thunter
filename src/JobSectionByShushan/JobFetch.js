import { useState, useEffect, Fragment} from 'react'
import JobList from './jobList'

const JobFetch =() =>{

 const [mains, setMain] = useState(null )
 const [pending, setPending] = useState(true)
 const [error, setError] = useState(null)
 
 
 useEffect(()=>{
  fetch(' http://localhost:3000/jobs')
    .then(res=>{
      if(!res.ok){
       throw Error("could not fetch tha data")
      }
      return res.json();
    })
    .then(data =>{
      setMain(data)
      setPending(false)
      setError(null)
    })
    .catch(err =>{
      setPending(false)
      setError(err.message)
      
      console.log(err.message)
    }
      )
},[])
  
  
  return(
    <Fragment >
      {error && <div> {error} </div>}
      {pending && <div>Loading...</div>}
      {mains && <JobList jobs={mains} />}   
    </Fragment>
    
  )
}

export default JobFetch


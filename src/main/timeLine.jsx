import {useState, useEffect} from 'react'
import MainList from './TimeLineList'

const Main =() =>{

 const [mains,setMain] = useState(null )
const [pending,setPending] = useState(true)
const [error,setError] = useState(null)
 
 
useEffect(()=>{
  fetch(' http://localhost:3000/blogs')
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
    <div  >
      {error && <div> {error} </div>}
      {pending && <div>Loading...</div>}
     {mains &&<MainList blogs={mains} />}
   
    </div>
    
  )
}

export default Main


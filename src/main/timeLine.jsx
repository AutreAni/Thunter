import { useEffect } from 'react'
import MainList from './TimeLineList';
import { useSelector } from 'react-redux';

const Main =({ mains, setMain, pending, setPending, error, setError, textInput, setTextInput }) =>{ 
  const username = useSelector(state => state.currentUser.username);
  const avatar = useSelector(state=> state.currentUser.picture);

  const url = ' http://localhost:3000/blogs';
  let date = new Date();
  const formatted = date.toString().slice(4, 16);

useEffect(()=>{
  fetch(' http://localhost:3000/blogs')
    .then(res=>{
      if(!res.ok){
       throw Error("could not fetch tha data")
      }
      return res.json();
    })
    .then(data =>{
      setMain(data.reverse())
      setPending(false)
      setError(null)
    })
    .catch(err =>{
      setPending(false)
      setError(err.message)      
      console.log(err.message)
    }
      )
},[]);

useEffect(()=>{
  if(textInput && textInput.length) {
  fetch(url, {
    method: "Post",
    body: JSON.stringify({
      date: formatted,
      title: username,
      link:'/profile/about',
      text: textInput,
      logo: avatar,
    }),
      headers: {
  'Content-type': 'application/json; charset=UTF-8',
},
})
  .then(res=>{
    if(!res.ok){
     throw Error("could not fetch tha data")
    }
    return res.json();
  })
  .then(data =>{
    setMain([data, ...mains])
    setPending(false)
    setError(null);
    setTextInput("")
  })
  .catch(err =>{
    setPending(false)
    setError(err.message)
    console.log(err.message)
  })
      
  }
},[textInput]);

  
  
  return(
    <div  >
      {error && <div> {error} </div>}
      {pending && <div>Loading...</div>}
      {mains && <MainList blogs={mains} />}   
    </div>
    
  )
}

export default Main


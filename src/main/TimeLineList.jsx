import {useState} from 'react'
import LikeButtons from "../PostTimeline/LikesButtons"
import { useSelector, useDispatch } from 'react-redux'
// import { addList, deleteList } from '../actions/hUserPost'
// import InputImg from '../PostTimeline/InputImg';





const MainList = ({blogs}) =>{

  const [inputText, setInputText] = useState("Add a comment ...")
  const postList = useSelector(state => state.postReducer)
  const dispatch = useDispatch()

  return (
    <div>
        {blogs.map(d =>(
          <div key={d.id} className='divContainer'>
            <p>{d.date}</p>
            <div> 
               <img src={d.logo} className="logoT" alt = "logo" />
               <a href={d.link} target = "_blank" rel="noopener noreferrer">{d.title}</a> 
            </div>
            <p>{d.text}</p>
           <img src={d.img} className=' imgStyle' alt = "img"/>
           <div>
              <LikeButtons />
            </div>
            <div className='inputDiv-c'>
              <input type="text" placeholder={inputText}/>
            </div>
         
 
          </div>
        ))}
      
      </div>
    
  )
}
export default MainList

import LikeButtons from "../PostTimeline/LikesButtons"
// import InputImg from '../PostTimeline/InputImg';


const MainList = ({blogs}) =>{
  return (
    <div>
        {blogs.map(d =>(
          <div key={d.id} className='divContainer'>
             <p>{d.date}</p>
            <div> 
               <img src={d.logo} className="logo" alt = "logo" />
               <a href={d.link}>{d.title}</a> 
            </div>
            <p>{d.text}</p>
           <img src={d.img} className=' imgStyle' alt = "img"/>
           <div>
              <LikeButtons />
           </div>
         <div className='inputDiv-c'>
         <input type = "text"
         placeholder ="Add a comment ..."/>
        </div>
          </div>
        ))}
      </div>
    
  )
}
export default MainList
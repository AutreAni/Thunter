
import LessText from './LessText';
import {NewDate} from './date';

const JobList = ({jobs}) =>{
    return (
      <div className='wraper'>
         {jobs.map(el =>(
            <div key={el.id} className='divContainer'>
               <span> <NewDate /></span>               
               <div> 
                 <img src={el.logo} className="mylogo" alt = "logo" />
                 <p className='myP'><a href={el.link}>{el.title}</a></p> 
               </div>
               <p>{el.Jobdescription}</p>
               <img src={el.img} className='myimgStyle' alt = "img"/>
              <LessText max ={10} key={el.id} text ={el.text} />
            </div>
          ))}
         
        </div>
      
    )
  }
  export default JobList

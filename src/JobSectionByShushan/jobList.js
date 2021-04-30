
import LessText from './LessText';

const JobList = ({jobs}) =>{
    return (
      <div className='wraper'>
         {jobs.map(el =>(
            <div key={el.id} className='divContainer'>
               <span>{el.date}</span>
               {console.log(typeof el.text)}
               
               <div> 
                 <img src={el.logo} className="logo" alt = "logo" />
                 <p><a href={el.link}>{el.title}</a></p> 
               </div>
               <p>{el.Jobdescription}</p>
               <img src={el.img} className=' imgStyle' alt = "img"/>
              <LessText max ={10} key={el.id} text ={el.text} />
            </div>
          ))}
         
        </div>
      
    )
  }
  export default JobList

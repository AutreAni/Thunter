import React, { useEffect } from 'react';
import '../css-modules/JobSectionCssShushan/jobSearchForm.css';
import { useState } from 'react';
// import JobList1 from './jobList1';
import LessText from './LessText';
import {NewDate} from './date';



const JobSearchForm = () => {

    // const [title, setTitle] = useState("");
    // const [main, setMain] = useState();

    // useEffect(() => {
    //     fetch(` http://localhost:3000/jobs/1`)
    //     .then(res=>{
    //         if(!res.ok){
    //          throw Error("could not fetch tha data")
    //         }
    //         return res.json();
    //       })
    //       .then(data =>{
    //         setMain(data)
            
    //       })

    // },[title]);

    // console.log(main.logo, 'shush')
    return (
        <div className='serchJob'>
        <form className='job'>
        <input type = "text"  placeholder = "search by title"
        autoComplete = "off" name = "desciption"/>
        <input type = "text"
        placeholder = "location"
        autoComplete = "on" name = "location" />
        {/* <div className = "full__time">
        <label className="full__time__label">Full Time
        <input type="checkbox" 
        name = "full_time" />
        <span class="checkmark"></span>
        </label>
        
        <button className='button_search'>Search</button>

         </div>  */}
        </form>
         {/* <div className='wraper'>
         
         <div key={main.id} className='divContainer'>
            <span> <NewDate /></span>               
            <div> 
              <img src={main.logo} className="logo" alt = "logo" />
              <p><a href={main.link}>{main.title}</a></p> 
            </div>
            <p>{main.Jobdescription}</p>
            <img src={main.img} className=' imgStyle' alt = "img"/>
           <LessText max ={10} key={main.id} text ={main.text} />
         </div>
       
      
     </div>  */}
        </div> 
    )
}

export default JobSearchForm











// import React from 'react';
// import '../css-modules/JobSectionCssShushan/jobSearchForm.css';

// const JobSearchForm = () => {
//     return (
//         <form className='job'>
//         <input type = "text"  placeholder = "desciption"
//         autoComplete = "on" name = "desciption"/>
//         <input type = "text"
//         placeholder = "location"
//         autoComplete = "on" name = "location" />
//         <div className = "full__time">
//         <label className="full__time__label">Full Time
//         <input type="checkbox" 
//         name = "full_time" />
//         <span className="checkmark"></span>
//         </label>        
//          </div> 
//         </form>
//     )
// }

// export default JobSearchForm

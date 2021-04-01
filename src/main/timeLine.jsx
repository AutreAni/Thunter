import React, { Component } from 'react';
import {getData} from './fakeData'
import LikeButtons from '../PostTimeline/LikesButtons'
import InputImg from '../PostTimeline/InputImg';

class TimeLine extends Component {
  state = { 
    data:getData()
   }
  render() { 
    
    return ( 
      <div style={{width:"600px",margin:"auto"}}>
        {this.state.data.map(d =>(
          <div key={d._id} className='divContainer'>
             <p style={{fontSize:"12px"}}>{d.date}</p>
            <div style={{marginTop:"-3%"}}> 
            <img src={d.logo} className="logo" / >
           <a href={d.link}>{d.title}</a> 
            </div>
            <p>{d.text}</p>
           <img src={d.img} className=' imgStyle'/>
         <div style={{marginLeft:'25%'}}>
             <LikeButtons />
         </div>
         <div className='inputDiv-c'>
             <InputImg placeholder="Add a comment..." />
        </div>

          </div>
        ))}
      </div>
     );
  }
}
 
export default TimeLine;
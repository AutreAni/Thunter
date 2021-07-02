import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart, faThumbsUp,faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import React, { Component } from 'react';

class LikeButtons extends Component {
  state ={
    heart:0,
    thumbsDown:0,
    thumbsUp:0

  }
  handelIncrementHeart =()=> {
   this.setState({heart:this.state.heart +1})
  }
  handelIncrementThumbUp =()=> {
    this.setState({thumbsUp:this.state.thumbsUp +1})
   }
   handelIncrementThumbDown =()=> {
    this.setState({thumbsDown:this.state.thumbsDown +1})
   }
  render() { 
    return (  
        <ul className="likeUl">
          <li><FontAwesomeIcon className = "timeline-icon" onClick={this.handelIncrementHeart} icon={faHeart} /> <span>{this.formatHeart()}</span> </li>
          <li><FontAwesomeIcon className = "timeline-icon" onClick={this.handelIncrementThumbUp} icon={faThumbsUp} /> <span>{this.formatUp()}</span> </li>
          <li><FontAwesomeIcon className = "timeline-icon" onClick={this.handelIncrementThumbDown} icon={faThumbsDown} /><span>{this.formatDown()} </span></li>
        </ul>
     );
  }
  formatHeart() {
    const {heart} = this.state;
    return heart === 0 ? null : heart
  }
  formatUp() {
    const {thumbsUp} = this.state;
    return thumbsUp === 0 ? null : thumbsUp
  }
  formatDown() {
    const {thumbsDown} = this.state;
    return thumbsDown === 0 ? null : thumbsDown
  }
}
 
export default LikeButtons;

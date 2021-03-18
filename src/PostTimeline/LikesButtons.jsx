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
      <div>
        <ul className="likeUl">
          <li> <span>{this.formatHeart()}</span> <FontAwesomeIcon onClick={this.handelIncrementHeart} icon={faHeart} /></li>
          <li> <span>{this.formatUp()}</span> <FontAwesomeIcon onClick={this.handelIncrementThumbUp} icon={faThumbsUp} /></li>
          <li> <span>{this.formatDown()} </span> <FontAwesomeIcon onClick={this.handelIncrementThumbDown} icon={faThumbsDown} /></li>
        </ul>
      </div>
      
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

import React, { Component } from 'react';
import './network.css';
// import Button from '../Button/index'
import { Card,Button, ButtonGroup} from 'react-bootstrap';


class Network extends Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }
  render() { 
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }
  
    return ( 
      <Card   style={{ width: '12rem' }} className="box text-center">
        
        <Card.Img variant="top" src={this.state.person.picture.medium} className="rounded-circle"/>
        
        <h6>{this.state.person.name.first} {this.state.person.name.last}</h6>
        <p> {this.state.person.location.country}</p>
        {/* <Button buttonName="Add Friend" /> */}
        <ButtonGroup size="sm">
          <Button size="sm" className="btn-color-c mr-2">Add Friend</Button>
          <Button size="sm" className="btn-color-c ">Remove</Button>
       </ButtonGroup>
       
        
    </Card>
     );
  }
}
 
export default Network;
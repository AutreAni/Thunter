import React, { Component } from 'react';
import './network.css';
// import Button from '../Button/index'
import { Card,Button } from 'react-bootstrap';


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
      <Card  className="box text-center">
        <div style={{background:"linear-gradient(45deg, #f66d1a, #c21d28, #862f4f)"}}>
        <Card.Img variant="top" src={this.state.person.picture.medium} className="rounded-circle"/>
        </div>
        <h6>{this.state.person.name.first} {this.state.person.name.last}</h6>
        {/* <h6> {this.state.person.location.city} </h6> */}
        <p> {this.state.person.location.country}</p>
        {/* <Button buttonName="Add Friend" /> */}
        <Button className="btn-color-c mb-2 rounded-pill">Add Friend</Button>
        <Button className="btn-color-c rounded-pill">Remove</Button>
    </Card>
     );
  }
}
 
export default Network;
import React, { Component } from 'react';
// import '../css-modules/Network/network.css';
import '../css-modules/UserProfile/Audience/AudienceNetwork/style.css';
// import { Card, Button, ButtonGroup } from 'react-bootstrap';


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
      <div className="cards__wrapper">
        <div className="card__item">
          <img src={this.state.person.picture.medium} alt={this.state.person.first} className="profile__img" />
          <span className="name">{this.state.person.name.first} {this.state.person.name.last}</span>
          <p> {this.state.person.location.country}</p>
          <div className="button__wrapper">
            <span className="button">Reach</span>
            <span className="button">Remove</span>
          </div>
        </div>
      </div>

    );
  }
}

export default Network;
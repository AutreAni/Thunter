import React, { Fragment } from "react";

export  class NewDate extends React.Component {
  state = {
    date: ""
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };

  render() {
    const { date } = this.state;

    return <Fragment>{date}</Fragment>;
  }
}
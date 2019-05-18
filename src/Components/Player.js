import React, { Component } from 'react';

export default class Player extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App__player">
        <div className="" >{this.props.playerFight}</div>
      </div>
    )
  }
}

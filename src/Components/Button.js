import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.runGame = this.runGame.bind(this);
  }

  runGame(e) {
    console.log('run');
  }

  render() {
    return (
      <div>
        <button className="App__button"> Play </button>
      </div>
    )
  }
}

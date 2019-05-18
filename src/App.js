import React, { Component } from 'react';
import Player from './Components/Player';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.weapons = ["rock", "paper", "scissors"];
    this.runGame = this.runGame.bind(this);
  }

  runGame() {
    //this.checkWeaponStrength();    
    console.log( this.state.playerWeapon1);

    this.setState({
      playerWeapon1: this.weapons[Math.floor(Math.random() * 3)],
      playerWeapon2: this.weapons[Math.floor(Math.random() * 3)],
    });
    this.checkWeaponStrength();
    //alert(this.state.playerWeapon1)
    //console.log(this.state.playerWeapon1, this.state.playerWeapon2);
  }

  checkWeaponStrength() {
    const weapon1 = this.state.playerWeapon1;
    const weapon2 = this.state.playerWeapon2;

    if ((weapon1 && weapon2)) {
      this.setState({
        'winner': 'tie'
      })
    }
    if ((weapon1 === "paper" && weapon2 === "scissors") ||
      (weapon1 === "scissors" && weapon2 === "paper")) {
      this.setState({
        'winner': 'scissors'
      })
    }
    if ((weapon1 === "paper" && weapon2 === "rock") ||
      (weapon1 === "rock" && weapon2 === "paper")) {
      this.setState({
        'winner': 'paper'
      })
    }
    if ((weapon1 === "scissors" && weapon2 === "rock") ||
      (weapon1 === "rock" && weapon2 === "scissors")) {
      this.setState({
        'winner': 'rock'
      })
    }    

  }

  render() {
    return (
      <div className="App">
        <Player className="App__player" playerWeapon={this.state.playerWeapon1} />
        <Player className="App__player" playerWeapon={this.state.playerWeapon2} />
        <p>Battle has won: <b>{this.state.winner}</b></p>
        <button className="App__button" onClick={this.runGame}> Play </button>
      </div>
    );
  }

}


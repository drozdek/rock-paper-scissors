import React, { Component } from 'react';
import Player from './Components/Player';
import './App.css';

/**
 * @namespace App
 * @extends React.Component
 * @author [Rafal Drozdowski](https://rdrozdowski.github.io/)
 */
export default class App extends Component {

  /**
   * @constructor 
   * 
   * @param {string} props 
   */
  constructor(props) {
    super(props);
    this.state = {
    };
    this.weapons = ["rock", "paper", "scissors"];
    this.runGame = this.runGame.bind(this);
  }

  /**
   * 
   * @method runGame  starts game
   * 
   * @param none
   */
  runGame() {

    // sets states of weapons used
    this.setState({
      playerWeapon1: this.weapons[Math.floor(Math.random() * 3)],
      playerWeapon2: this.weapons[Math.floor(Math.random() * 3)],
    });

    // fix non immediate mutation
    // of setState method
    setTimeout(() => {
      this.checkWeaponStrength()
    }, 0);
  }

  /**
   * @method checkWeaponStrength  check who has stronger weapon 
   * 
   * @params none
   */
  checkWeaponStrength() {
    const weapon1 = this.state.playerWeapon1,
     weapon2 = this.state.playerWeapon2;

    // in case of weapons have the same values
    if ((weapon1 === weapon2) || (weapon2 === weapon1)) {
      this.setState({
        winner: 'tie'
      })
    }

    // in case if paper interacts with scissors or opposite
    if ((weapon1 === "paper" && weapon2 === "scissors") ||
      (weapon1 === "scissors" && weapon2 === "paper")) {
      this.setState({
        winner: 'scissors'
      })
    }

    // in case if paper interacts with rock or opposite
    if ((weapon1 === "paper" && weapon2 === "rock") ||
      (weapon1 === "rock" && weapon2 === "paper")) {
      this.setState({
        winner: 'paper'
      })
    }

    // in case if scissors interacts with rock or opposite
    if ((weapon1 === "scissors" && weapon2 === "rock") ||
      (weapon1 === "rock" && weapon2 === "scissors")) {
      this.setState({
        winner: 'rock'
      })
    }
  }

  /**
   * @method render 
   */
  render() {
    return (
      <div className="App">
        {/**
         *instantiate Player components & assign weapon
         */}
        <Player className="App__player App__player--one" playerWeapon={this.state.playerWeapon1} />
        <Player className="App__player App__player--two" playerWeapon={this.state.playerWeapon2} />

        {/**
         * display result
         */}
        <p>Battle has won: <b>{this.state.winner}</b></p>
        
        {/**
        *show clickable button
        */}
        <button className="App__button" onClick={this.runGame}> Play </button>
      </div>
    );
  }

}


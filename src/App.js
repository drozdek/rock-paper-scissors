import React, { Component } from 'react';
import Player from './Components/Player';
import Button from './Components/Button';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
  console.log('run');
  alert('ff');
}

render(){
  return (
    <div className="App">
      <Player className="App__player"/>
      <Player className="App__player"/>
      <Button className="App__button"/>
    </div>
  );
}
}


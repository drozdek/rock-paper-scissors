import React, { Component } from 'react';

/**
 * @namespace Player
 * @extends React.Component
 * @author [Rafal Drozdowski](https://rdrozdowski.github.io/)
 */
export default class Player extends Component {

  /**
   * @constructor  
   * @param {string} props 
   */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App__player">

        {/** 
       * apply props playerWeapon 
       */}
        <div>
          <img className="App__player__image--adjust" src={this.props.playerWeapon + '.png'} alt={"Image of " +this.props.playerWeapon+ ".png"} />
        </div>
      </div>
    )
  }
}

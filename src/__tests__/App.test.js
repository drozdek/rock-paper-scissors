import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import { create } from 'react-test-renderer'

describe('Rock, paper, scissors game', () => {
  test('creates snapshot', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('has Play button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button').length).toBe(1);
  });

  test('we have 2 players', () => {
    const wrapper = shallow(<App />);
    const img = wrapper.find('.App__player').length;
    expect(img).toBe(2);
  })

  test('simulates click and sets state via setState', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');    
    button.simulate('click');

    wrapper.setState({
      playerWeapon1: 'rock',
      playerWeapon2: 'paper',
    });    

    console.debug(wrapper.state());
});

});


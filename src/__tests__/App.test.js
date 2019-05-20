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

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has Play button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text().includes('Play')).toBe(true);
  });

  test('simpulates click', () => {
    const wrapper = shallow(<App />);
    wrapper.find('button').simulate('click');
  })
});


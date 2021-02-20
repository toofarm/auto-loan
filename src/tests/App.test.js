import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('App component testing', function() {
  const wrapper = shallow(<App />); 

  it('renders welcome message', function() {
    const welcome = <h1 className='App-title'>Auto loan pre-approval</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });

});

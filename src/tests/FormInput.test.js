import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16'

import FormInput from '../components/FormInput'
import { Control, Errors } from 'react-redux-form'

configure({ adapter: new Adapter() });

const validators = {
    required: (val) => val && val.length
}

describe('FormInput component testing', function() {
    const wrapper = shallow(<FormInput 
        model="intake.purchasePrice"
        type="number"
        label="Auto Purchase Price"
        validators={validators}
    />); 

  it('should render properly', function() {
    expect(wrapper).to.exist;
  });

  it('should render a single Control component', function() {
      expect(wrapper.find(Control)).to.have.length(1)
  })

  it('should render a single, populated <label> component', function() {
    expect(wrapper.find("label")).to.have.length(1)
    expect(wrapper.find("label").text()).to.not.be.empty
  })

});

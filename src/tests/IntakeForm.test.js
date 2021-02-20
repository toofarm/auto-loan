import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16'

import IntakeForm from '../components/IntakeForm'
import FormInput from '../components/FormInput'

configure({ adapter: new Adapter() });

describe('IntakeForm component testing', function() {
    const mockSubmit = jest.fn();
    const wrapper = shallow(<IntakeForm submitHandler={mockSubmit} />); 

  it('should render properly', function() {
    expect(wrapper).to.exist;
  });

  it('should render five FormInput components', function() {
      expect(wrapper.find(FormInput)).to.have.length(5)
  })

});

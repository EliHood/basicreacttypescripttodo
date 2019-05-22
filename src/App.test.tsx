import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import App from './App';


describe('Should render <App/> component', () => {

  it('Should render App component', () => {
    const component = shallow(<App/>);
    expect(component.find("h1")).toHaveLength(1); // checks to see if a h1 exists 
    expect(component.find("h1").text()).toContain("React Typescript Todo") // check value inside h1
  });
  

})

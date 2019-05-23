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

describe('Should test onChange method', ()=> {
  it('should test onChange method', ()=> {
    const component = shallow(<App/>)
    // here will find the input on the form 
    component.find('input').simulate('change', {
      // we call preventDefault here, if not it will show e.preventDefault error
      preventDefault() {},
      target:{
        value: "test"

      }
    })
    // currentTask is equal to state property of currentTask in the App.tsx file. 
    expect(component.state('currentTask')).toEqual('test')

  })
})


describe('Should test onSubmit method',() => {
  it('should test onSubmit method', ()=>{
    const component = shallow(<App/>)
    const preventDefault = jest.fn();
    const items = ['Learn react', 'rest', 'go out'];
    component.setState({
     currentTask:"test-task",
     tasks:[...items, 'test-task']
    })

    component.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toBeCalled();

  })
})

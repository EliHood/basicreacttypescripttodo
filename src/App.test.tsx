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
describe('should test onChange method', () => {
  it('should test onChange method', ()=> {
    const component = shallow(<App/>)

    const form = component.find('Form').at(0);
    form.props().onChange({
      preventDefault() {},
      target:{
        value: 'test-todo'
      }
    })
    expect(component.state('currentTask')).toEqual('test-todo')
  })
})



describe('Should test onSubmit method',() => {
  it('should test onSubmit method', ()=>{
    const component = shallow(<App/>)
    const form = component.find('Form').at(0);
    const preventDefault = jest.fn();
    const items = ['Learn react', 'rest', 'go out'];
    component.setState({
     currentTask:"test-task",
     tasks:[...items, 'test-task']
    })

    form.simulate('submit', { preventDefault });
    expect(preventDefault).toBeCalled();

  })
})

describe('Should test empty array on onSubmit method',() => {
  it('should test empty array onSubmit method', ()=>{
    const component = shallow(<App/>)
    const form = component.find('Form').at(0);
    const preventDefault = jest.fn();
 
    form.simulate('submit', {preventDefault})
    expect(component.state().tasks).toHaveLength(0);

  })
})



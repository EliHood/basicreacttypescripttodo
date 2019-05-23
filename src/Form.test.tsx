import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Form from './Form';

const onChangeMock = jest.fn();
const onSubmitMock = jest.fn();
let wrapper: any;
beforeEach( () => {
    const props = {
        onChange: onChangeMock,
        onSubmit: onSubmitMock,
        currentTask:''
    }

    wrapper = shallow(<Form {...props}/>)
})

describe('should render <Form/> component', () => {
    it('Should render <Form/> component', () => {
        const input = wrapper.find('input');
        const button = wrapper.find('button');
        expect(input).toHaveLength(1);
        expect(button).toHaveLength(1);
         
    })
})
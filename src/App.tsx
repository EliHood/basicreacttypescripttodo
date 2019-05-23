import React from 'react';
import logo from './logo.svg';
import Form from './Form';
import './App.css';
// we need an interface to be able to use the state properties, if not error.
// the same rule applies when using props
// so here we call Istate
interface IState {
  currentTask: string;
  tasks: Array<string>;
}

export default class App extends React.Component<{}, IState>{
  constructor(props: {}){
    super(props);
    this.state = {
      currentTask: "",
      tasks:[]
    }
  }

  // when using e.preventDefault in typescript, or any paramater, it has to be followed
 //  by the following any, array, string, etc. in this case we use any

  handleSubmit(e: any){
    e.preventDefault();
    this.setState(prevState =>({
      currentTask: "",
      tasks: prevState.currentTask ? [...prevState.tasks, prevState.currentTask] : prevState.tasks
    }), () => {
      console.log(this.state.tasks)
    })
    
   
  }

  onChange = (e: any) => {
    e.preventDefault();
    this.setState({
      currentTask: e.target.value
    })

  }

  render(){
    return (
      <div className="App">
        <h1 className="sampleh1">React Typescript Todo</h1>

        <Form 
          onSubmit={(e)=> this.handleSubmit(e)}
          currentTask={this.state.currentTask}
          onChange={this.onChange}  
        />
      </div>
    );

  }
}

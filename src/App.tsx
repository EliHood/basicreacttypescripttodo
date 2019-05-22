import React from 'react';
import logo from './logo.svg';
import './App.css';
// we need an interface to be able to use the state properties
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

  handleSubmit(e: any){
    e.preventDefault();
    this.setState({
      currentTask: "",
      tasks: [...this.state.tasks, this.state.currentTask]
    }, () => {
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
    // console.log(this.state);
    return (
      <div className="App">
        <h1>React Typescript Todo</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
           <input value={this.state.currentTask} type="text" placeholder="enter a todo"
            onChange={this.onChange}/>
           <button type="submit"> Add Todo</button>
        </form>
      </div>
    );

  }
}

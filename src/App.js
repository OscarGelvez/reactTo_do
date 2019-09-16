import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/title";
import Task from "./components/task";
import Layout from "./components/layout";
import TaskList from "./components/task-list";
import Input from "./components/input";


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      newTask : "",
      tasks  : []
    }
  }
  handleTaskChange =(event) => {
    this.setState({
      newTask : event.target.value,     
    })
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask);
    this.setState({
      newTask : "",
      tasks : newTasks,
    })
  }
  render() {
    return (
      <Layout>
        <Title />        
        <Input 
            handleSubmit = {this.handleSubmit}
            handleTaskChange = {this.handleTaskChange}
            value = {this.state.newTask}
        />  
        <TaskList tasks = {this.state.tasks}/>          
      </Layout>
    );
  }

}

export default App;

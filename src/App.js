import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15').then(res =>
      this.setState({ todos: res.data} ))
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
      })
    })
  }

  //Delete ToDo Item
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(
      todo => todo.id !== id)]}))
  }

  //Add Todo Item
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false }).then(
      res => this.setState({ todos: [...this.state.todos, res.data]}))
  }
  //Switch Positions of Items
  swap = (obj, prop1, prop2) => {
    const tmp = obj[prop1];
    obj[prop1] = obj[prop2];
    obj[prop2] = tmp;
    }
  //Move Up
  moveUp = (id) => {
    const itemIndex = this.state.todos.findIndex(todo => todo.id === id)
    const array = this.state.todos
    if (itemIndex > 0) {
      this.swap(array, itemIndex, itemIndex - 1);
    }
    console.log(array)
  }
  //Move Down
  moveDown = (id) => {
    const array = this.state.todos
    const itemIndex = this.state.todos.findIndex(todo => todo.id === id)
    if (itemIndex < array.length - 1) {
    this.swap(array, itemIndex, itemIndex + 1);
  }


  }

  render () {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} moveUp={this.moveUp} moveDown={this.moveDown}/>
                <AddTodo addTodo={this.addTodo} />
              </React.Fragment>
              )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;

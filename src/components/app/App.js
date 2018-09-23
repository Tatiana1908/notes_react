import React, { Component } from 'react';
import Form from '../form';
import Todos from '../todos';
import Search from '../search'
import { getTodos, postTodo, deleteTodo } from '../../api'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      search: {
        fieldForSearch: '',
        searchText: ''
      },
      alert: false,
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  async componentWillMount() {
    this.todoList = await getTodos();
    this.setState({todos: [...this.todoList]})
  }

  async addNewTodo(todo) {
    if( todo.title && todo.content){
      let newTodoItem = await postTodo(todo);
      this.setState({todos: [...this.state.todos, newTodoItem], alert: false})
      return;
    } 
    this.setState({alert: true})
  }

  async removeTodo(id) {
    await deleteTodo(id);
    let updatedTodoList = await getTodos();
    this.setState({todos: [...updatedTodoList]})
  }
 
  onSeachFilterChange = (e) =>{
    let newSearchFilter = {...this.state.search,[e.target.name]: e.target.value};
    this.setState({search: newSearchFilter});
  }

  render() {
    return (
      <div className="app">
        <Form alert={this.state.alert} addNewTodo={this.addNewTodo} />
        <Search onSeachFilterChange={this.onSeachFilterChange} />
        <Todos todos={this.state.todos} filter={this.state.search} removeItem={this.removeTodo} />
      </div>
    );
  }
}

export default App;

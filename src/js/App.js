import ReactDOM, { Component } from 'react';
import React from 'react';
import 'whatwg-fetch'

class TodoList extends Component {
  constructor() {
    super();
    this.state = {todos: []};
    this._fetchTodos = this._fetchTodos.bind(this);
  }

  render() {
    this._fetchTodos();

    return <ul className="todo-list">
               {this.state.todos.map((todo) => {
                   return <li>
                            <Todo name={todo.name}/>
                          </li>
                   debugger
                 })
               }
           </ul>
  }
  _fetchTodos() {
    var url = 'http://192.168.43.157:8080/todo';
    var header = {"Content-Type": "application/json"};
    var options = {method: 'GET'};//};
    fetch(url, options).then(response => {
      return response.json();
    }).then(json => {
      this.setState({todos: json});
    });
  }
  _getTodos() {
    const todos = [
      { id: 1, name: "task1", done: false},
      { id: 2, name: "task2", done: true},
      { id: 3, name: "asd", done: true}
    ];
    return todos.map((todo) => {
      return (
        <li>
          <Todo name={todo.name}/>
        </li>
      );
    });
  }
}

class Todo extends Component {
  render() {
    const props = [];
    return <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>{this.props.name}</label>
            <button className="destroy"></button>
           </div>
  }
}

export default TodoList;

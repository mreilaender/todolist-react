import ReactDOM, { Component } from 'react';
import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import 'whatwg-fetch';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
    this._fetchTodos = this._fetchTodos.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);
     this.url = 'https://mytodolist-rest.herokuapp.com/todo';
  }


  _fetchTodos() {
    var header = {"Content-Type": "application/json"};
    var options = {method: 'GET'};
    fetch(this.url, options).then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({todos: json});
    });
    debugger
  }

  _sendTodo(todo) {
    alert("Test");
    var header = {'Content-Type': 'application/json'};
    var options = { method: 'POST', headers: header, body: todo };
    const result = fetch(this.url, options).then((response) => {
              return response.json();
            }).then((json) => {
              return json;
            });
            // TODO: return false if rest call fails
    debugger
    return true;
  }

  _onKeyPress(event) {
    if(event.key == 'Enter') {
      var todo = JSON.stringify({ name: event.currentTarget.value, done: false});
      return this._sendTodo(todo);
    }
  }
  render() {
    this._fetchTodos();

    return(
        <div>
          <TodoInput onKeyPress={this._onKeyPress.bind(this)} />
          <ul className="todo-list">
                 {this.state.todos.map((todo, index) => {
                     return <li>
                              <Todo name={todo ? todo.name : 'default' + index}/>
                            </li>
                   })
                 }
             </ul>
        </div>
    );
  }
}

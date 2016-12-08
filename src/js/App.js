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
    this.url = 'https://myawesome-todolist-react.herokuapp.com/todo';
  }


  _fetchTodos() {
    var header = {"Content-Type": "application/json"};
    var options = {method: 'GET'};
    fetch(this.url, options).then((response) => {
      return response.json();
    }).then((json) => {
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

  _sendTodo(todo) {
    const result = fetch(this.url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: todo
            }).then((response) => {
              return response.json();
            }).then((json) => {
              console.log('second:then:response: ', json);
            });

  }

  render() {
    this._fetchTodos();

    return(
        <div>
          <TodoInput />
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

import React, { PropTypes } from 'react'

class TodoInput extends React.Component {
  render () {
    return (
      <div>
        <h1>JS-Todos</h1>
        <input className="new-todo" type="text" placeholder="Enter todo here"/>
      </div>
    );
  }
}

export default TodoInput;

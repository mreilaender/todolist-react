import React, { PropTypes } from 'react'

class TodoInput extends React.Component {

  constructor() {
    super();
    TodoInput.propTypes = {
      onKeyPress: React.PropTypes.func
    }
  }

  render () {
    return (
      <div>
      <h1>JS-Todos</h1>
      <input className="new-todo" type="text" placeholder="Enter todo here" onKeyPress={this.props.onKeyPress}/>
      </div>
    );
  }
}

export default TodoInput;

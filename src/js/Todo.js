import React, { PropTypes } from 'react'

class Todo extends React.Component {

    render() {
      return (
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>{this.props.name}</label>
              <button className="destroy"></button>
            </div>
      );
    }
}

export default Todo;

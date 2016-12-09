import React, { PropTypes } from 'react'

class TodoInput extends React.Component {

  constructor() {
    super();
    this._onKeyPress = this._onKeyPress.bind(this);
    TodoInput.propTypes = {
      onKeyPress: React.PropTypes.func
    }
  }

  render () {
    return (
      <div>
      <h1>JS-Todos</h1>
      <input className="new-todo" type="text" placeholder="Enter todo here" onKeyPress={this._onKeyPress} ref={(input) =>  {this.textInput = input; }}/>
      </div>
    );
  }

  _onKeyPress(event) {
    if(event.key == "Enter") {
      if(this.props.onKeyPress(event)) {;
        this.textInput.value="";
      } else {
        // TODO: better fail handling
        alert("Rest call failed. Please contact an Admin");
      }
    }
  }
}

export default TodoInput;

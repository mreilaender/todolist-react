import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './js/App';
import './css/todoapp.css';
import $ from 'jquery';

$(document).ready(function() {
    ReactDOM.render(
      <TodoList />, document.getElementById('todos')
    );
});

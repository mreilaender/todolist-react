import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';

it('renders without crashing', () => {
  const div = document.getElementById('todos');
  ReactDOM.render(<App />, div);
});

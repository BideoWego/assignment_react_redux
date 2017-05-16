import React from 'react';
import ReactDOM from 'react-dom';




import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { groceryApp } from './reducers';
import { default as items } from '../data/items';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';




let store = createStore(groceryApp, {
  items,
  categories: ['Foo', 'Bar'],
  fields: ['name', 'description']
});




ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

















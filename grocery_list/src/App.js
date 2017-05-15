import React, { Component } from 'react';
import ItemsListContainer from './containers/ItemsListContainer';
import AddItemContainer from './containers/AddItemContainer';


class App extends Component {
  render() {
    return (
      <main className="App">
        <h1 className="text-center">Groceries</h1>
        <ItemsListContainer />
        <br/>
        <AddItemContainer />
      </main>
    );
  }
}




export default App;














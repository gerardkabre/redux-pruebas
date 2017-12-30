import React, { Component } from 'react';
import logo from './logo.svg';
import Jumbotron from './components/jumbotron'; 
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Jumbotron />
       </div>
      </Provider>
    );
  }
}

export default App;

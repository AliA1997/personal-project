import React, { Component } from 'react';
import routes from './routes';
import './App.css';
import Nav from './components/subComponents/Nav';
import Login from './components/subComponents/Login';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Nav />
          <Login />
        </header>
        {routes}
      </div>
    );
  }
}

export default App;

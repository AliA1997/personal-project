import React, { Component } from 'react';
import routes from './routes';
import './App.css';
import Nav from './components/subComponents/Nav';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;

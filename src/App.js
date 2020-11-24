import React, { Component } from 'react';
import Dashboard from './modules/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>FOODERS</h1>
          <p>Lets order some delicious food of your choice at the door in easy steps</p>
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;

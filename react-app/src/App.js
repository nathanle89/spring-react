import React, { Component } from 'react';
import Dashboard from './components/dashboard';
import { Layout } from './components/layout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout />
          <Dashboard />
      </div>
    );
  }
}

export default App;

//Components
import React, { Component } from 'react';
import Dashboard from './components/dashboard';
import { Header } from './components/layout';
import { AddProject, UpdateProject } from './components/project';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
              <div className="App">
                  <Header />
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/addProject" component={AddProject} />
                  <Route exact path="/updateProject/:id" component={UpdateProject} />
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;

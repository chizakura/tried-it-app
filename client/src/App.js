import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;
import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import CreateReview from './Components/CreateReview';
import ShowUser from './Components/ShowUser';
import ShowReview from './Components/ShowReview';
import EditReview from './Components/EditReview';
import ShowPlace from './Components/ShowPlace';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/create/user" component={Signup}/>
          <Route exact path="/create/review" component={CreateReview}/>
          <Route exact path="/user/:id" component={ShowUser}/>
          <Route exact path="/review/:id" component={ShowReview}/>
          <Route exact path="/review/:id/edit" component={EditReview}/>
          <Route exact path="/place/:id" component={ShowPlace}/>
        </Switch>
      </div>
    )
  }
}

export default App;
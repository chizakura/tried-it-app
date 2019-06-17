import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import CreateUser from './Components/CreateUser';
import CreateReview from './Components/CreateReview';
import UserProfile from './Components/UserProfile';
import ShowReview from './Components/ShowReview';
import EditShowReview from './Components/EditShowReview';
import ListOfUsers from './Components/ListOfUsers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/create/user" component={CreateUser}/>
          <Route exact path="/create/review" component={CreateReview}/>
          <Route exact path="/user/:id" component={UserProfile}/>
          <Route exact path="/review/:id" component={ShowReview}/>
          <Route exact path="/review/:id/edit" component={EditShowReview}/>
          <Route exact path="/places/:id" component={ListOfUsers}/>
        </Switch>
      </div>
    )
  }
}

export default App;
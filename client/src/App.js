import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import authService from './services/authService';
import {login, getProfile, signup} from './services/apiService';
import ProtectedRoute from './Components/ProtectedRoute';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CreateReview from './Components/CreateReview';
import ShowUser from './Components/ShowUser';
import ShowReview from './Components/ShowReview';
import EditReview from './Components/EditReview';
import ShowPlace from './Components/ShowPlace';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false,
      user: {}
    }

    this.loginUser = this.loginUser.bind(this);
    this.signoutUser = this.signoutUser.bind(this);
    this.signupUser = this.signupUser.bind(this);
  }

  async componentDidMount() {
    try {
      const fetchedUser = await getProfile();

      this.setState({
        isSignedIn: authService.isAuthenticated(),
        user: fetchedUser
      })
    } catch (e) {
      console.log("Issue fetching token")
    }
  }

  async loginUser(credentials) {
    try {
      const user = await login(credentials);
      this.setState({
        isSignedIn: true,
        user
      })
    } catch (error) {
      throw error
    }
  }

  signoutUser() {
    authService.signOut();
    this.setState({
      isSignedIn: false,
      user: {}
    })
  }

  async signupUser(credentials) {
    try {
      const user = await signup(credentials);
      this.setState({
        isSignedIn: true,
        user
      })
    } catch (e) {
      throw e
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => {
            return (
              <LandingPage
                {...props}
                isSignedIn={this.state.isSignedIn}
                user={this.state.user}
                signoutUser={this.signoutUser}
              />
            )
          }}/>
          <ProtectedRoute
            exact path="/"
            user={this.state.user}
            component={LandingPage}
          />
          <Route exact path="/login" render={(props) => {
            return (
              <Login
                {...props}
                handleLogin={this.loginUser}
                isSignedIn={this.state.isSignedIn}
              />
            )
          }}/>
          <Route exact path="/create/user" render={(props) => {
            return (
              <Signup
                {...props}
                handleSignup={this.signupUser}
                isSignedIn={this.state.isSignedIn}
              />
            )
          }}/>
          <ProtectedRoute exact path="/create/review" user={this.state.user} component={CreateReview}/>
          <Route exact path="/user/:id" component={ShowUser}/>
          <Route exact path="/review/:id" render={(props) => {
            return (
              <ShowReview
                {...props}
                user={this.state.user}
              />
            )
          }}/>
          <ProtectedRoute exact path="/review/:id/edit" user={this.state.user} component={EditReview}/>
          <Route exact path="/place/:id" component={ShowPlace}/>
        </Switch>
      </div>
    )
  }
}

export default App;
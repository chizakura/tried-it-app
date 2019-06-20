import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import authService from './services/authService';
import {login, getProfile} from './services/apiService';
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
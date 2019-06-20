import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import NewsFeed from './NewsFeed';

//This page includes Link to Signup
//This page should import SearchBAr
//This page should import NewsFeed

class LandingPage extends Component {
    render() {
        const name = (this.props.user.name !== undefined) ? this.props.user.name : "";
        console.log(`Welcome back ${name}`);
        return (
            <div>
                <nav>
                    {!this.props.isSignedIn && <Link to="/login">Login</Link>}
                    {!this.props.isSignedIn && <Link to="/create/user">Signup</Link>}
                    {this.props.isSignedIn && <Link to="/create/review">Create a Review</Link>}
                    {this.props.isSignedIn && <Link onClick={this.props.signoutUser}>Signout</Link>}
                </nav>
                <div className="home">
                    <h1>Tried It</h1>
                    <SearchBar/>
                    <NewsFeed/>
                </div>
            </div>
        )
    }
}

export default LandingPage;
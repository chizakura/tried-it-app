import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import NewsFeed from './NewsFeed';

//This page includes Link to Signup
//This page should import SearchBAr
//This page should import NewsFeed

class LandingPage extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/create/user">Signup</Link>
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
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import NewsFeed from './NewsFeed';


//This page includes Link to CreateUser
//This page should import SearchBAr
//This page should import NewsFeed

class LandingPage extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/create/user">Add User</Link>
                </nav>
                <div className="home">
                    <h1>Tried It</h1>
                    <SearchBar/>
                    <NewsFeed/>
                </div>

        )
    }
}

export default LandingPage;
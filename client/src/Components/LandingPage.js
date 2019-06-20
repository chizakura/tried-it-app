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
                    <img src="https://www.freelogodesign.org/file/app/client/thumb/d251db0b-bb9d-40ef-a816-ff7d0546ed18_200x200.png?1561053710185"/>
                    <SearchBar/>
                    <NewsFeed/>
                </div>
            </div>
        )
    }
}

export default LandingPage;
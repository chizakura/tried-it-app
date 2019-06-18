import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ShowUser from './ShowUser';


//This page includes Link to CreateUser
//This page should import SearchBAr
//This page should import NewsFeed


class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Tried It</h1>
                <SearchBar />
                <ShowUser />
            </div>
        )
    }
}

export default LandingPage;
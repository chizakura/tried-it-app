import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            searchTerm: "",
            placesList: [],
            usersList: []
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    async handleSearch(event) {
        if (event.target.value) {
            let name = event.target.name;
            let value = event.target.value;
            const places = await axios.get(`/place/findByName/${value}`)
            const users = await axios.get(`/user/findByName/${value}`);
     
            this.setState({
                [name]: value,
                placesList: places.data.place,
                usersList: users.data.user
            })
        }else{
            let name = event.target.name;
            let value = event.target.value;

            this.setState({
                [name]: value,
                placesList: [],
                usersList: []
            })
        }
 
    }

    render() {
        let results
        if (this.state.searchTerm ) {
            results = <div className='results'>
                <ul>
                    {this.state.placesList.map( place => <li><Link to={`/place/${place.id}`}>{place.name}</Link></li>)}
                    <hr />
                    {this.state.usersList.map( user => <li><Link to={`/user/${user.id}`}>{user.name}</Link></li>)}
                </ul>
            </div>
        }
        return (
            <form onChange={this.handleSearch}>
                <input 
                    autoComplete="off"
                    name='searchTerm'
                    type='text'
                    list="ice-cream-flavors"
                    placeholder='Look for place or friend'
                    value={this.state.searchTerm}
                    onChange={function(){}}
                />
                {results}
            </form>
        )
    }
}
export default SearchBar;
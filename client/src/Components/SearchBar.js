import React, {Component} from 'react';
import axios from 'axios';

class SearchBar extends Component {
    constructor(){
        super();

        this.state = {
            searchTerm: "",
            placesList: [],
            usersList: [],
            searchList: []
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    async componentDidMount() {
        const places = await axios.get('http://localhost:4567/place');
        this.setState({
            placesList: places.data.places
        })
    }

    async handleSearch(event) {
        let name = event.target.name;
        let value = event.target.value;
        let searchList = this.state.placesList.filter(place => {
            return place.name.includes(value);
        })
        this.setState({
            [name]: value,
            searchList
        })
    }

    render() {
        return (
            <form onChange={this.handleSearch}>
                <input 
                    name='searchTerm'
                    type='text'
                    list="ice-cream-flavors"
                    placeholder='Look for place or friend'
                    value={this.state.searchTerm}
                    onChange={function(){}}
                />
                {/* <datalist id="ice-cream-flavors">
                    <optgroup label="places">
                        <option value="Chocolate">Chocolate</option>
                        <option value="mms" />
                        <option value="rockyroad" />
                    </optgroup>
                    <option value="icecream" />
                    <option value="sugarrush" />
                    <option value="musketeers" />
                </datalist> */}
            </form>
        )
    }
}

export default SearchBar;
import React, {Component} from 'react';



class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchTerm : ''
        }
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(event){
        event.preventDefault()

        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form onChange={this.handleInput}>
                <input 
                name='searchTerm'
                type='text'
                list="ice-cream-flavors"
                placeholder='Look for ......'
                value={this.state.searchTerm}
                onChange={function(){}}
                />
                <datalist id="ice-cream-flavors">
                    <option value="Chocolate" />
                    <option value="mms" />
                    <option value="rockyroad" />
                    <option value="icecream" />
                    <option value="sugarrush" />
                    <option value="musketeers" />
                </datalist>
            </form>
        )
    }
}

export default SearchBar;
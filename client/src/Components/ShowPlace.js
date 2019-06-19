// This page should show list of users that link to their review of that place
// this page displays list of places of a specific user
import React, {Component} from 'react';
import axios from 'axios';


class ShowPlace extends Component{
    constructor(props){
        super(props)
        this.state = {
            place: {}
        }
    }

    async componentDidMount(){
        const response = await axios.get(`/place/${this.props.match.params.id}`)
        const place = response.data.place
        this.setState({
            place
        })
    }
    
        
    render(){
        return (
            <div>
                <h2>{this.state.place.name}</h2>
                <h4>{this.state.place.category}</h4>
                <p>{this.state.place.description}</p>
                <p>{this.state.place.address}  -  <b>{this.state.place.phone}</b></p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}
export default ShowPlace;
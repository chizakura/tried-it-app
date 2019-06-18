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
        const place = response.data.specifiedPlace
        this.setState({
            place
        })
    }
    
        
    render(){
        return (
            <div>
                <h1>{this.state.place}</h1>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}
export default ShowPlace;
// this page displays list of places of a specific user
import React, {Component} from 'react';
import axios from 'axios';

class ShowUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                name: "Dummy Dummer"
            }
            // ,places = []
        }
    }

    async componentDidMount(){
        const response = await axios.get(`/user/${this.props.match.params.id}`)
        // const placesResponse = await axios.get(`/user/${this.props.match.params.id}`)
        const user = response.data.specifiedUser
        this.setState({
            user
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.user.name}</h1>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}
export default ShowUser;
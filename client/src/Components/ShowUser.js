// this page displays list of places of a specific user
import React, {Component} from 'react';
import axios from 'axios';

class ShowUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {},
            reviewsList: []
        }
    }

    // This componentDidMount calls user api to show one specific user, it also calls the review table with user_id and gets
    // PlacesIdResponse and saves it in placesId variable, which is to be used in the 3rd axios call to places table to 
    // get place information.
    
    async componentDidMount(){
        const response = await axios.get(`http://localhost:4567/user/${this.props.match.params.id}`);
        const user = response.data.user;
        const placesIdResponse = await axios.get(`http://localhost:4567/review/findUserPlaces/${this.props.match.params.id}`);
        let reviewsList = placesIdResponse.data.reviews;
        // placesIdResponse.data.reviews.forEach(review  => {
        //     placesIds.push(review.place)            
        // });
        
        this.setState({
            user,
            reviewsList
        })
    }

    render(){
        return (
            <div className="App">
                <h1>{this.state.user.name}</h1>
                <h4>{this.state.user.email}</h4>
                <ul>
                    {this.state.reviewsList.map(review => {
                        return (
                            <li key={review.id}>{review.place.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default ShowUser;
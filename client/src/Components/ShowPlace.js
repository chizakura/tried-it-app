// This page should show list of users that link to their review of that place
// this page displays list of places of a specific user
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ShowPlace extends Component{
    constructor(props){
        super(props)
        this.state = {
            place: {},
            usersList: []
        }
    }

    async componentDidMount(){
        const response = await axios.get(`/place/${this.props.match.params.id}`);
        const place = response.data.place;
        const usersIdResponse = await axios.get(`/review/findPlaceUsers/${this.props.match.params.id}`);
        let usersList = usersIdResponse.data.reviews;

        this.setState({
            place,
            usersList
        })
    }
    
        
    render(){
        return (
            <div>
                <h2>{this.state.place.name}</h2>
                <h4>{this.state.place.category}</h4>
                <p>{this.state.place.description}</p>
                <p>{this.state.place.address}  -  <b>{this.state.place.phone}</b></p>
              <div className="all-reviews">
                    {this.state.usersList.map(review => {
                        return (
                            <div className="review-box" key={review.id}>
                            <Link to={`/user/${review.user.id}`}>{review.user.name}</Link> 
                            <b>{review.title}</b>
                             <p>{review.entry}</p>
                            </div>
                            
                        
                        )
                    })}
                    </div>
            </div>
        )
    }
}
export default ShowPlace;
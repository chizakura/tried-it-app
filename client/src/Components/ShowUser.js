// This page displays list of places of a specific user
import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShowUser extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            user: {},
            reviewsList: []
        }
    }

    async componentDidMount() {
        const response = await axios.get(`/users/${this.props.match.params.id}`);
        const user = response.data.user;
        const placesIdResponse = await axios.get(`/reviews/findUserPlaces/${this.props.match.params.id}`);
        let reviewsList = placesIdResponse.data.reviews;
        
        this.setState({
            user,
            reviewsList
        })
    }

    render(){
        return (
            <div className='inside-app'>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <div className="user-info">
                    <h1>{this.state.user.name}</h1>
                    <h4>{this.state.user.email}</h4>
                    </div>
                <div className="user-reviews">
                        {this.state.reviewsList.map(review => {
                            return (
                            <div className="review-box"
                                key={review.id}>
                                <p><b><Link to={`/review/${review.id}`}>{review.place.name}</Link></b> - {review.place.category}</p>
                                <p>{review.title}</p>
                            </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default ShowUser;
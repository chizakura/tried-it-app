// this page is going to show the user's review of place
//Should have edit and delete buttons
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ShowReview extends Component{
    constructor(){
        super();

        this.state = {
            review: {},
            user: {},
            place: {}
        }
    }

    async componentDidMount(){
        const res = await axios.get(`/review/${this.props.match.params.id}`)
        
        this.setState({
            review: res.data.review,
            user: res.data.review.user,
            place: res.data.review.place,
        })
    }
    
    render() {
        const entryDate = new Date(this.state.review.date);
        return (
            <div className="outer-review">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to={`/review/${this.props.match.params.id}/edit`}>Edit</Link>
                </nav>
                <div className="review">
                <h4><Link to={`/user/${this.state.user.id}`}>{this.state.user.name}</Link></h4>
                <h2><Link to={`/place/${this.state.place.id}`}>{this.state.place.name}</Link></h2>
                <h2>{this.state.review.title}</h2>
                <p>{entryDate.toLocaleString("en-US", {month: "numeric", day: "numeric", year: "numeric"})}</p>
                <p>{this.state.review.rating}</p>
                <p>{this.state.review.entry}</p>
                </div>
            </div>
        )
    }
}

export default ShowReview;
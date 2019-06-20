// This page should show user reviews
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NewsFeed extends Component {
    constructor() {
        super();

        this.state = {
            review: {},
            place : {},
            user : {}
        }
    }

    async componentDidMount (){
        const res = await axios.get(`http://localhost:4567/review`)
        const reviews = res.data.reviews;
        let index = Math.floor(Math.random()*(reviews.length));
        const review = reviews[index];
        const place = review.place
        const user = review.user
        
        this.setState({
            review,
            place,
            user
        })
    }

    render() {
        const entryDate = new Date(this.state.review.date);
        return (
            <div className="news-container">
                <div className="post">
                    <div className="top">
                        <p>{entryDate.toLocaleString("en-US", {month: "numeric", day: "numeric", year: "numeric"})}</p>
                        <h2><Link to={`/place/${this.state.place.id}`}>{this.state.place.name}</Link></h2>
                        <h4>Rating: {this.state.review.rating}</h4>
                    </div>
                    <div className="title">
                        <p><Link to={`/user/${this.state.user.id}`}>{this.state.user.name}</Link> : </p>
                        <h2>{this.state.review.title}</h2>
                    </div>
                    <p>{this.state.review.entry}</p>
                </div>
            </div>
        )
    }
 }

export default NewsFeed;
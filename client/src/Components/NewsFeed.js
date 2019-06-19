// This page should show user reviews
import React, {Component} from 'react';
import axios from 'axios';

class NewsFeed extends Component {
    constructor() {
        super();

        this.state = {
            review: {}
        }
    }

    async componentDidMount (){
        const res = await axios.get(`http://localhost:4567/review`)
        const reviews = res.data.reviews;
        let index = Math.floor(Math.random()*(reviews.length));
        const review = reviews[index];
        this.setState({
            review
        })
    }

    render() {
        const entryDate = new Date(this.state.review.date);
        return (
            <div className="news-container">
                <div className="post">
                    <div className="top">
                        <p>{entryDate.toLocaleString("en-US", {month: "numeric", day: "numeric", year: "numeric"})}</p>
                        <h4>Rating: {this.state.review.rating}</h4>
                    </div>
                    <div className="title">
                        <h2>{this.state.review.title}</h2>
                    </div>
                    <p>{this.state.review.entry}</p>
                </div>
            </div>
        )
    }
 }

export default NewsFeed;
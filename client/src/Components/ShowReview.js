// this page is going to show the user's review of place
//Should have edit and delete buttons
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ShowReview extends Component{
    constructor(){
        super();

        this.state = {
            review: {}
        }
    }

    async componentDidMount(){
        const res = await axios.get(`http://localhost:4567/review/${this.props.match.params.id}`)
        
        this.setState({
            review: res.data.review
        })
    }
    
    render() {
        const entryDate = new Date(this.state.review.date);
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to={`/review/${this.props.match.params.id}/edit`}>Edit</Link>
                </nav>
                <h1>{this.state.review.title}</h1>
                <h3>{entryDate.toLocaleString("en-US", {month: "numeric", day: "numeric", year: "numeric"})}</h3>
                <h3>{this.state.review.rating}</h3>
                <p>{this.state.review.entry}</p>
            </div>
        )
    }
}

export default ShowReview;
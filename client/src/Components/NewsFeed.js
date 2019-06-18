// This page should show user reviews
import React, {Component} from 'react';
import axios from 'axios'

class NewsFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }
    componentDidMount(){
        this.fetchReviews()
    }

     async fetchReviews (){
        const res = await axios.get(`http://localhost:4567/review`)
        const reviews = res.data.reviews
        console.log(reviews)
        this.setState({
          reviews: reviews
        })
    }

    renderReviews() {
        if (this.state.reviews){
            return this.state.reviews.map(review => {
                return (
                     <div>
                         <h2>{review.title}</h2>
                         <h3>{review.rating}</h3>
                         <h4>{review.date}</h4>
                         <p>{review.entry}</p>
                    </div>
                 )})
             }
    }
    
    render() {
    

        return (
            <div className="news-container">
                <div>
                    {this.renderReviews()}
                </div>
            </div>
        )
     }
 }

export default NewsFeed
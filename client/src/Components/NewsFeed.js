// This page should show user reviews
import React, {Component} from 'react';
import axios from 'axios'

class NewsFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: {}
        }
    }
    async componentDidMount(){
        const res = await axios.get(`http://localhost:4567/review`)
        const reviews = res.data
        this.setState({
          reviews: reviews
        })
        console.log(reviews)
    }
    render() {
        return (
            <div className="news-container">
                <div>
                    {this.state.reviews.map(review => {
                        return (
                             <div>
                                 <h2>{review.title}</h2>
                                 <h3>{review.rating}</h3>
                                 <h4>{review.date}</h4>
                                 <p>{review.entry}</p>
                            </div>
                         )
                     })}
                </div>
            </div>
        )
     }
 }

export default NewsFeed
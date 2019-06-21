import React, { Component } from 'react'
import { Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class NewsFeed extends Component {
    constructor(props){
        super(props)
        this.state ={
            reviewsArray: []
        }
        this.setIcon = this.setIcon.bind(this)
    }

    async componentDidMount (){
        let reviewsArray = []
        const res = await axios.get(`/reviews`)
        const reviews = res.data.reviews;        
 
        let index1 = reviews.length -1;
        let index2 = reviews.length -2;
        let index3 = reviews.length -3;
        reviewsArray.push(reviews[index1], reviews[index2], reviews[index3])
        
        this.setState({
            reviewsArray
        })
    }

    setIcon(category){
        let icon 
        switch (category) {
            case 'food':
                icon = "fastfood"
                break;
            case 'club':
                icon = "queue_music"
                break;
            case 'education':
                icon = "school"
                break;
            case 'activity':
                icon = "directions_run"
                break;
        
            default:
                break;
        }

        return icon
    }

    render(){
        const { reviewsArray } = this.state
        return (
        <Feed>
            {reviewsArray.map( (review, key) =>
            <div key={key}>
                <Feed.Event> 
                    <Feed.Content>
                        <Feed.Summary className='feed-item'>
                            <span className='material-icons icon'>{this.setIcon(review.place.category)}</span>
                            <span>
                                <Link to={`/user/${review.user.id}`}>{review.user.name}</Link> Tried 
                                <Link to={`/place/${review.place.id}`}>  {review.place.name}   </Link>
                                <br />
                                go checkout their<Link to={`/review/${review.id}`}> TriedIt</Link>
                            </span>
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
                </div>
            )}
        </Feed>
        )
    }
}

export default NewsFeed







    
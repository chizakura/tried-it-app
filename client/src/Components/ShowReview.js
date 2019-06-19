// this page is going to show the user's review of place
//Should have edit and delete buttons

import React, {Component} from 'react';
import axios from 'axios';


class ShowReview extends Component{
    constructor(props){
        super(props)
        this.state = {
            review: {}
        }
    }

    async componentDidMount(){
        const response = await axios.get(`/review/${this.props.match.params.id}`)
        const review = response.data.review
        this.setState({
            review
        })
    }
    
        
    render(){
        return (
            <div>
                <h1>{this.state.review.title}</h1>
                <h4>{this.state.review.entry}</h4>

            </div>
        )
    }
}
export default ShowReview;
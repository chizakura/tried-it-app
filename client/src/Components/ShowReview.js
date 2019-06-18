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
        const review = response.data.specifiedReview
        this.setState({
            review
        })
    }
    
        
    render(){
        return (
            <div>
                <h1>{this.state.review}</h1>

            </div>
        )
    }
}
export default ShowReview;
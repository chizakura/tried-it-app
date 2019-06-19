// this page shows a form to edit a review
import React, {Component} from 'react';
// import axios from 'axios';

class EditReview extends Component{
    constructor(props){
        super(props)
        this.state = {
            review: {}
        }
    }

    // async componentDidMount(){
    //     const response = await axios.get(`/user/${this.props.match.params.id}`)
    //     // const placesResponse = await axios.get(`/user/${this.props.match.params.id}`)
    //     const user = response.data.user
    //     console.log(user);
        
    //     this.setState({
    //         user
    //     })
    // }

    // render(){
    //     return (
    //         <div>
    //             <h1>{this.state.user.name}</h1>
    //             <ul>
    //                 <li></li>
    //             </ul>
    //         </div>
    //     )
    // }
}
export default EditReview;
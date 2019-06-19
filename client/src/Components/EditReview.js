// this page shows a form to edit a review
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditReview extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to={`/review/${this.props.match.params.id}`}>Back</Link>
                </nav>
                <h1>Edit Review</h1>
            </div>
        )
    }
}
export default EditReview;
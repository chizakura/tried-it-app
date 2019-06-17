// This page should have a form to create reviews
import React, {Component} from 'react';

class CreateReview extends Component {
    render() {
        return (
            <div>
                <h1>Add Review Form</h1>
                <form className="form">
                    <div className="date">
                        <label>Date</label>
                        <input name="date" type="date"/>
                    </div>
                    <div>
                        <label>Title</label>
                        <input name="title" type="text"/>
                    </div>
                    <div>
                        <label>Rating</label>
                        <input name="rating" type="number"/>
                    </div>
                    <div>
                        <label>Entry</label>
                        <textarea name="entry" rows="5" cols="40"></textarea>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateReview;
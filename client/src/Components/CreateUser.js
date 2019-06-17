// This page should have a form to create user
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CreateUser extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/create/review">Add Review</Link>
                </nav>
                <h1>Add User Form</h1>
                <form className="form">
                    <div>
                        <label>Name</label>
                        <input name="name" type="text"/>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser;
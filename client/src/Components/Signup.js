// This page should have a form to create user
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        await axios.post('http://localhost:4567/user/create', {
            name: this.state.name,
            email: this.state.email
        })
    }

    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/create/review">Add Review</Link>
                </nav>
                <h1>Add User Form</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input name="name" type="text" onChange={this.handleChange} value={this.state.name} required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input name="email" type="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;
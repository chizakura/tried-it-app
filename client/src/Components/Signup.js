// This page should have a form to create user
import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

class Signup extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            password: ""
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
        const {name, email, password} = this.state;
        try {
            await this.props.handleSignup({name, email, password});
        } catch (err) {
            throw err
        }
    }

    render() {
        if (this.props.isSignedIn) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <h1>Signup Form</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input name="name" type="text" onChange={this.handleChange} value={this.state.name} required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input name="email" type="email" onChange={this.handleChange} value={this.state.email} required/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required/>
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
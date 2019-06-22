// This page should have a form to login an existing user
import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            showError: false
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
        const {email, password} = this.state;
        try {
            await this.props.handleLogin({email, password});
        } catch (err) {
            this.setState({showError: true})
        }
    }

    render() {
        let errorMessage;
        if(this.state.showError) {
            errorMessage = (
                <div className="errorMessage">
                    An error occurred, please ensure your credentials are correct
                </div>
            )
        }
        return (
            <div>
                {this.props.isSignedIn ? <Redirect to="/"/> : null}
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <h1>Login</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    {errorMessage}
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

export default Login;
// This page should have a form to create reviews
import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class CreateReview extends Component {
    constructor() {
        super();

        this.state = {
            userId: "",
            placeId: "",
            date: "",
            title: "",
            rating: "",
            entry: "",
            userList: [],
            placeList: [],
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const resPlace = await axios.get('http://localhost:4567/place');
        const resUser = await axios.get('http://localhost:4567/user');
        this.setState({
            userList: resUser.data.users,
            placeList: resPlace.data.places
        })
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
        await axios.post('http://localhost:4567/review/create', {
            title: this.state.title,
            date: this.state.date,
            rating: this.state.rating,
            entry: this.state.entry,
            userId: this.state.userId,
            placeId: this.state.placeId
        })
        this.setState({
            redirect: true
        })
    }

    render() {
        return (
            <div className='inside-app'>
                {this.state.redirect ? <Redirect to="/"/> : null}
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <h1>Add Review Form</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Who is writing this review:</label>
                        <input name="userId" list="user-list" onChange={this.handleChange} required/>
                        <datalist id="user-list">
                            {this.state.userList.map(user => {
                                return (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                )
                            })}
                        </datalist>
                    </div>
                    <div>
                        <label>Choose a place:</label>
                        <input name="placeId" list="place-list" onChange={this.handleChange} required/>
                        <datalist id="place-list">
                            {this.state.placeList.map(place => {
                                return (
                                    <option key={place.id} value={place.id}>{place.name}</option>
                                )
                            })}
                        </datalist>
                    </div>
                    <div className="date">
                        <label>Date</label>
                        <input name="date" type="date" onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label>Title</label>
                        <input name="title" type="text" onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label>Rating</label>
                        <input name="rating" type="number" onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label>Entry</label>
                        <textarea name="entry" rows="5" cols="20" onChange={this.handleChange} required></textarea>
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
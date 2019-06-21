// This page should have a form to create reviews
import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class CreateReview extends Component {
    constructor() {
        super();

        this.state = {
            placeId: "",
            date: "",
            title: "",
            rating: "",
            entry: "",
            placeList: [],
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const resPlace = await axios.get('/places');
        this.setState({
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
        await axios.post('/reviews/create', {
            title: this.state.title,
            date: this.state.date,
            rating: this.state.rating,
            entry: this.state.entry,
            userId: this.props.user.id,
            placeId: this.state.placeId
        })
        this.setState({
            redirect: true
        })
    }

    render() {
        console.log(this.props.user.id)
        return (
            <div className='inside-app'>
                {this.state.redirect ? <Redirect to="/"/> : null}
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <h1>Create a Review</h1>
                <form className="form" onSubmit={this.handleSubmit}>
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
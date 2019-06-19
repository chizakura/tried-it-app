// this page shows a form to edit a review
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class EditReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            title: "",
            date: "",
            rating: "",
            entry: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    async componentDidMount() {
        const res = await axios.get(`http://localhost:4567/review/${this.props.match.params.id}`)
        const reviews = res.data.review
        console.log(reviews);

        this.setState({
            reviews: reviews,
            title: reviews.title,
            date: reviews.date,
            rating: reviews.rating,
            entry: reviews.entry
        })
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    async handleSubmit(e) {
        e.preventDefault()
        await axios.put(`http://localhost:4567/review/${this.props.match.params.id}`, {
            title: this.state.title,
            date: this.state.date,
            rating: this.state.rating,
            entry: this.state.entry
        })
        this.setState({
            redirect: true
        })
    }

    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to={`/review/${this.props.match.params.id}`}>Back</Link>
                </nav>
                <form
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}>
                    <label>Title: </label>
                    <input
                        type="text"
                        value={this.state.title}
                    />
                    <label>Date: </label>
                    <input
                        type="date"
                        value={this.state.date}
                    />
                    <label>Rating: </label>
                    <input
                        type="integer"
                        value={this.state.rating}
                    />
                    <label>Entry: </label>
                    <input
                        type="text"
                        value={this.state.entry}
                    />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default EditReview;
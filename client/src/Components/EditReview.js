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
        this.changeTitle = this.changeTitle.bind(this)
        this.changeDate = this.changeDate.bind(this)
        this.changeRating = this.changeRating.bind(this)
        this.changeEntry = this.changeEntry.bind(this)
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
    changeTitle(e) {
        this.setState({
            title: e.target.value,
        })
    }
    changeDate(e) {
        this.setState({
            date: e.target.value,
        })
    }
    changeRating(e) {
        this.setState({
            rating: e.target.value,
        })
    }
    changeEntry(e) {
        this.setState({
            entry: e.target.value,
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
                <form className="form"
                    onSubmit={this.handleSubmit}
                >
                    <div className="title">
                        <label>Title: </label>
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.changeTitle}
                        />
                    </div>
                    <div className="date">
                        <label>Date: </label>
                        <input
                            type="date"
                            value={this.state.date}
                            onChange={this.changeDate}
                        />
                    </div>
                    <div className="rating">
                        <label>Rating: </label>
                        <input
                            type="integer"
                            value={this.state.rating}
                            onChange={this.changeRating}
                        />
                    </div>
                    <div className="entry">
                        <label>Entry: </label>
                        <input
                            type="text"
                            value={this.state.entry}
                            onChange={this.changeEntry}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="submit"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditReview;
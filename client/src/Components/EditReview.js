// this page shows a form to edit a review
import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class EditReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [],
            title: "",
            date: "",
            rating: "",
            entry: "",
            redirectOnUpdate: false,
            redirectOnDelete: false,
            userId: this.props.user.id

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.changeEntry = this.changeEntry.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    async componentDidMount() {
        const res = await axios.get(`/review/${this.props.match.params.id}`);
        const reviews = res.data.review;
        const entryDate = new Date(reviews.date);

        this.setState({
            reviews: reviews,
            title: reviews.title,
            date: entryDate.toISOString().split('T')[0],
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
        e.preventDefault();
        await axios.put(`/review/${this.props.match.params.id}`, {
            title: this.state.title,
            date: this.state.date,
            rating: this.state.rating,
            entry: this.state.entry
        })
        this.setState({
            redirectOnUpdate: true
        })
    }

    async handleDelete() {
        await axios.delete(`/review/${this.props.match.params.id}`);
        this.setState({
            redirectOnDelete: true
        })
    }

    render() {
        // console.log(this.props.user.id)
        // console.log(this.state.reviews.userId)
        if (this.state.redirectOnUpdate) {
            return <Redirect to={`/review/${this.props.match.params.id}`}/>
        } else if(this.state.redirectOnDelete) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                {this.state.redirect ? <Redirect to={`/review/${this.props.match.params.id}`} /> : null}
                {/* {(this.props.user.id !== this.state.reviews.userId) ? <Redirect to={`/review/${this.props.match.params.id}`}/> : null} */}
                <nav>
                    <Link to="/">Home</Link>
                    <Link to={`/review/${this.props.match.params.id}`}>Back</Link>
                </nav>
                <form className="form" onSubmit={this.handleSubmit}>
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
                        <textarea name="entry" 
                        rows="5" 
                        cols="20" 
                         value={this.state.entry}
                            onChange={this.changeEntry}
                        />
                    </div>
                    <input type="submit" value="submit"/>
                </form>
                <div className="delete">
                    <input type="button" value="Delete Review" onClick={this.handleDelete}/>
                </div>
            </div>
        )
    }
}
export default EditReview;
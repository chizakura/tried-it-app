const express = require('express')
const reviewRouter = express.Router()
const { Review } = require('../models/models')

reviewRouter.get('/', async (req, res) => {
    const reviews = await Review.findAll()
    res.json({
        reviews: reviews
    })
})
reviewRouter.get('/:id', async (req, res) => {
    const review = await Review.findByPk(req.params.id)
    res.json({
        review: review
    })
})
reviewRouter.post('/create', async (req, res) => {
    const newReview = await Review.create(req.body)
    res.json({
        newReview: newReview
    })
})
reviewRouter.put('/:id', async (req, res) => {
    const updateReview = {
        title: req.body.title,
        date: req.body.date,
        rating: req.body.rating,
        entry: req.body.entry
    }

    let update = await Review.update(updateReview, {
        where: {
            id: req.params.id
        }
    })

    res.json({ update })
})

reviewRouter.delete('/:id', async (req, res) => {
    let deleteReview = await Review.destroy({
        where: {
            id: req.params.id
        }
    })

    res.json({
        message: "deleted",
        data: req.params
    })
})

module.exports = {
    reviewRouter
}
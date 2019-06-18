const express = require('express')
const placeRouter = express.Router()
const { Place } = require('../models/models')

placeRouter.get('/', async (req, res) => {
    const places = await Place.findAll()
    res.json({
        places: places
    })
})
placeRouter.get('/:id', async (req, res) => {
        const place = await Place.findByPk(req.params.id)
        res.json({
            place: place
        })    
})

module.exports = {
    placeRouter
}
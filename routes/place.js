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
//find places with id present in the given array id
placeRouter.get('/findPlacesWithIdsArray/:id', async (req, res) => {
        const place = await Place.findAll({
            where :{
                [Op.in]: req.params.id
            }
        })
        res.json({
            place: place
        })    
})

module.exports = {
    placeRouter
}
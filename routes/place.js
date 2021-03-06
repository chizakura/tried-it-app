const express = require('express');
const placeRouter = express.Router();
const { Place } = require('../models/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

// find places by name and return a list of places that are similar to the name
placeRouter.get('/findByName/:name', async (req, res) => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const searchTerm = req.params.name
    const place = await Place.findAll({
        where: {
            name: {
                [Op.or]: [ {[Op.like]: `%${capitalizeFirstLetter(searchTerm)}%`} , {[Op.like]: `%${searchTerm}%`} ]
            }
        }
    })
    res.json({
        place: place
    })
})

module.exports = {
    placeRouter
}
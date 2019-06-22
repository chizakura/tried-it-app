const express = require('express');
const userRouter = express.Router();
const { User } = require('../models/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

userRouter.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json({
        users: users
    })
})

userRouter.get('/:id', async (req, res) => {
        const user = await User.findByPk(req.params.id)
        res.json({
            user: user
        })    
})

userRouter.get('/findByName/:name', async (req, res) => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const searchTerm = req.params.name
    const user = await User.findAll({
        where: {
            name: {
                [Op.or]: [ {[Op.like]: `%${capitalizeFirstLetter(searchTerm)}%`} , {[Op.like]: `%${searchTerm}%`} ]
            }
        }
    })
    res.json({
        user: user
    })
})

userRouter.post('/create', async (req, res) => {
    const newUser = await User.create(req.body)
    res.json({
        newUser: newUser
    })    
})

module.exports = {
    userRouter
}
const express = require('express')
const userRouter = express.Router()
const { User } = require('../models/models')

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
userRouter.post('/create', async (req, res) => {
    const newUser = await User.create(req.body)
    res.json({
        newUser: newUser
    })    
})

module.exports = {
    userRouter
}
const express = require('express');
const authRouter = express.Router();

authRouter.post('/login', (req, res, next) => {
    res.status(200).json({message: "Status: Good"})
})

module.exports = {
    authRouter
}
const express = require('express');
const appRouter = express.Router();
const {passport} = require('../auth/handleAuth');

appRouter.get('/protected', passport.authenticate('jwt', { session: false}),
  async (req, res) => {
    res.json({ user: req.user, message: 'authenticated'})
  }
)

module.exports = {
    appRouter
}
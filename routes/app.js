// Most code on this page is based on Kareem Grant's repo here:
// https://git.generalassemb.ly/sei-nyc-thunderbolt/express-auth-lesson
const express = require('express');
const appRouter = express.Router();
const {passport} = require('../auth/handleAuth');

appRouter.get('/profile', passport.authenticate('jwt', { session: false}),
  async (req, res) => {
    res.json({ user: req.user, message: 'authenticated'})
  }
)

module.exports = {
    appRouter
}
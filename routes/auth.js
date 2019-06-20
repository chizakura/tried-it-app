const express = require('express');
const authRouter = express.Router();
const {passport, jwtSign} = require('../auth/handleAuth');

authRouter.post('/login', (req, res, next) => {
    passport.authenticate('login', async(err, user, info) => {
        try {
            if(err || !user) {
                const error = new Error('An Error Occurred');
                return next(error)
            }

            req.login(user, {session: false}, async(error) => {
                if(error) {
                    return next(error)
                }

                const {email, id} = user;
                const payload = {email, id}
                const token = jwtSign(payload);

                // return the user object
                return res.json({user, token})
            })
        } catch (error) {
            return next(error)
        }
    }) (req, res, next)
})

module.exports = {
    authRouter
}
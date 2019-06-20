const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const buf = Buffer.from(`TOKEN_KEY=${process.env}`)
const config = dotenv.parse(buf)

const SECRET = config.TOKEN_KEY;
const jwtSign = (payload) => {
    return jwt.sign(payload, SECRET)
}

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (email, password, done) => {
        try {
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            console.log(user.email);
            console.log(`*** user: ${user} ***`);

            if(!user) {
                return done(null, false, {message: 'User not found'})
            }

            // compare passwords
            const validate = await bcrypt.compare(password, user.password);
            console.log(`*** validate: ${validate} ***`)

            if (!validate) {
            return done(null, false, { message: 'Wrong password'})
            }

            // login was a success, return the user object
            return done(null, user, { message: 'Logged in successfully'})

        } catch (error) {
            return done(error)
        }
    }
))

module.exports = {
    passport,
    jwtSign
}
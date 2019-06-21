const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {userRouter} = require('./routes/user');
const {reviewRouter} = require('./routes/review');
const {placeRouter} = require('./routes/place');
const {authRouter} = require('./routes/auth');
const {appRouter} = require('./routes/app');
const {authorized} = require('./auth/handleAuth');
const cors = require('cors');
const passport = require('passport');
const path = require('path')

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json())

// Static hosting for built files
// app.use(express.static(path.join(__dirname, './client/build')));

app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.json({ message: err.message })
})

app.use('/users',userRouter)
app.use('/reviews',reviewRouter)
app.use('/places',placeRouter)
app.use('/auth', authRouter)
app.use('/app', authorized, appRouter)
app.use(passport.initialize());

const PORT = process.env.PORT || 4567

app.get('/', (req, res) => res.send('TriedIt'))

// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
if (process.env.NODE_ENV == "production") {
    app.use('*', (req, res) => res.sendFile(path.join(__dirname, './client/build', "index.html")));
}
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
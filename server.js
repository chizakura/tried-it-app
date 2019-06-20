const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const {userRouter} = require('./routes/user')
const {reviewRouter} = require('./routes/review')
const {placeRouter} = require('./routes/place')
const cors = require('cors')
const PORT = process.env.PORT || 4567
const path = require('path')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('TriedIt'))
app.use('/user',userRouter)
app.use('/review',reviewRouter)
app.use('/place',placeRouter)

// Static hosting for built files
app.use(express.static(path.join(__dirname, './client/build')));

// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
if (process.env.NODE_ENV == "production") {
    app.use('*', (req, res) => res.sendFile(path.join(__dirname, './client/build', "index.html")));
}

app.use((err, req, res, next)=>{
    console.warn(err.stack)
    res.status(500).json({message: err.message})
})
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const {userRouter} = require('../routes/user')
const {reviewRouter} = require('../routes/review')
const {placeRouter} = require('../routes/place')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.use((err, req, res, next)=>{
    console.warn(err.stack)
    res.status(500).json({message: err.message})
})
app.use('/user',userRouter)
app.use('/review',reviewRouter)
app.use('/place',placeRouter)

const PORT = process.env.PORT || 4567

app.get('/', (req, res) => res.send('TriedIt'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
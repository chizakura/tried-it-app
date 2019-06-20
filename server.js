const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {userRouter} = require('./routes/user');
const {reviewRouter} = require('./routes/review');
const {placeRouter} = require('./routes/place');
const {authRouter} = require('./routes/auth');
const cors = require('cors');
const PORT = process.env.PORT || 4567

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('TriedIt'))
app.use('/user',userRouter)
app.use('/review',reviewRouter)
app.use('/place',placeRouter)
app.use('/auth', authRouter)

app.use((err, req, res, next)=>{
    console.warn(err.stack)
    res.status(500).json({message: err.message})
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
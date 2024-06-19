const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const routes = require('./routes')

dotenv.config()

const app = express()
app.use(bodyParser.json())
routes(app)
const port = process.env.PORT || 3005

mongoose.connect(`${ process.env.MONGO_DB }`)
    .then(() => console.log('Connected database!'))
    .catch((e) => console.log('Not connect database', e))


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
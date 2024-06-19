const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
import router from "./src/router/index"

dotenv.config()

const app = express()
router(app)
const port = process.env.PORT || 3005

mongoose.connect(`${ process.env.MONGO_DB }`)
    .then(() => console.log('Connected database!'))
    .catch((e) => console.log('Not connect database'))


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
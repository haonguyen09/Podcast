const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3005 || process.env.PORT

mongoose.connect(`${ process.env.MONGO_DB }`)
    .then(() => console.log('Connected database!'));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
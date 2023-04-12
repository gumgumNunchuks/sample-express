const router = require('./routes')
const express = require('express')

const app = express()

app.use('/', router)

app.listen(8000, () => {
    console.log("Server Started...")
})
const express = require('express')
require('dotenv').config()
const breadRoutes = require('./controllers/bread')

const app = express()

// middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// routes
app.use('/bread', breadRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))
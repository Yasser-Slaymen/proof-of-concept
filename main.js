const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const BasUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
  console.log(`server running op port ${PORT}`)
})

// static
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
// Template engine
app.set('view engine', 'ejs')
app.set('views', './views')

// Routes
const homeRoute = require('./routes/home')
const addRoute = require('./routes/add')
const articleRoute = require('./routes/article')

app.use('/',homeRoute)
app.use('/',addRoute)
app.use('/',articleRoute)

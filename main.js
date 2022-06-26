// require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const compression = require('compression')
// const BasUrl = 'https://blog.api.fdnd.nl/v1/post'
const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
  console.log(`server running op port ${PORT}`)
})

// static
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())
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

// Cache headers
app.use((request,response,next) =>{
  // cache get reqest
  if(request.method ==='GET'){
    response.set('Cache-control', 'public, max-age=500')
  } else{
    response.set('Cache-control', `no-store`)
  }
  next()
})

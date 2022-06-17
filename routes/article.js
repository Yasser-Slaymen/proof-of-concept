const express = require('express')
const router = express.Router()

router.get('/article', (request,response) => {
    response.render('pages/article')

})

module.exports= router
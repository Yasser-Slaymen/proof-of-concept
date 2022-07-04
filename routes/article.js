const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// const BasUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const BasUrl = 'https://blog.api.fdnd.nl/v1/post'


router.get('/article/:postId', (request, response) => {
    fetchJson(`${BasUrl}/${request.params.postId}`).then( function (jsonData){
      // console.log(jsonData)
      response.render('pages/article', {
        title: 'Voorbeeld titel',
        data: jsonData.data[0],
      })
    })
  })

  
async function fetchJson(url, postData = {}) {
   return await fetch(url, postData)
   .then((response) => response.json())
   .catch((error) => error)
}

module.exports = router


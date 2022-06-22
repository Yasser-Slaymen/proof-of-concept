const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const BasUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'

router.get('/article/:smartzoneId', (request, response) => {
    fetchJson(`${BasUrl}/${request.params.smartzoneId}`).then((jsonData) => {
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


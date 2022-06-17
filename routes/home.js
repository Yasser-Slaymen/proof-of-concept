const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const BasUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'

router.get('/', (request, response) => {
   fetchJson(BasUrl).then((JsonData) =>{
            //   console.log(JsonData)
      response.render('pages/home',{
         title:'More From FDND',
         smartzones: JsonData.data,
      })

   })
})
async function fetchJson(url, postData = {}) {
   return await fetch(url, postData)
   .then((response) => response.json())
   .catch((error) => error)
}

module.exports = router
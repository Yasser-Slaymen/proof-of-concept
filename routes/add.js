const express = require('express')
const router = express.Router()
const bodyparser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended:false})
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const BasUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'

router.post('/add', urlencodedParser,(request,response) => {
    const postData = {
        methode:'POST',
        body:JSON.stringify(request.body),
        headers:  {'Content-Type': 'application/json'}
    }
    fetchJson(BasUrl, postData).then(() =>{
        response.render('pages/add',{
            title:'add new article',
        })
    })
    
})
router.get('/add',(request,response) =>{
    response.render('pages/add',{
        title:'add new article',
    })
})

async function fetchJson(url, postData = {}){
    return await fetchJson(url, postData)
    .then((response) => response.json())
    .catch((error) =>error)

}

module.exports = router


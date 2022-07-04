const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended:false})
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// const BasUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const BasUrl = 'https://blog.api.fdnd.nl/v1/post'


router.post('/delete', urlencodedParser,(request,response) => {
    const postData = {
        method:'delete',
        body:JSON.stringify(request.body),
        headers:  {'Content-Type': 'application/json'}
    }
    fetchJson(BasUrl, postData).then(() =>{
        response.render('pages/delete.ejs')
        console.log(postData)

    })
    
})
router.get('/delete',(request,response) =>{
    response.render('pages/delete')
})

async function fetchJson(url, postData = {}){
    return await fetch(url, postData)
    .then((response) => response.json())
    .catch((error) => error)

}

module.exports = router

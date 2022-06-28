const postcss = require('postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const fs = require('fs')
const path = require('path')
const cssHome = './public/styles/style.css'
const cssArticle = './public/styles/article.css'
const cssAdd = './public/styles/add.css'
const minicsshome = './public/styles/style.mini.css'
const minicsarticle = './public/styles/article.mini.css'
const minicssadd = './public/styles/add.mini.css'
const jsfiles =[
    './public/js/erorr.s',
    './public/js/loading.js'
]

fs.readFile(cssHome, async (err, data) =>{
    const output = await postcss([cssnano,autoprefixer]).process(data)
    const minifiedCss = output.css
    fs.writeFile(minicsshome, minifiedCss, err => {
        if(err) {
            console.log(err)
        }
    })
})

fs.readFile(cssArticle, async (err, data) =>{
    const output = await postcss([cssnano,autoprefixer]).process(data)
    const minifiedCss = output.css
    fs.writeFile(minicsarticle, minifiedCss, err => {
        if(err) {
            console.log(err)
        }
    })
})

fs.readFile(cssAdd, async (err, data) =>{
    const output = await postcss([cssnano,autoprefixer]).process(data)
    const minifiedCss = output.css
    fs.writeFile(minicssadd, minifiedCss, err => {
        if(err) {
            console.log(err)
        }
    })
})







jsfiles.forEach(filejs => {
    const inputPath = path.join(__dirname, `../public//${filejs}`)
	let outputName = file.split('.')
	outputName[1] = 'min'
	outputName[2] = 'js'
	outputName = outputName.join('.')
	const outputPath = path.join(__dirname, `../public/js/${outputName}`)

    //Minify css here
	fs.readFile(inputPath, (err, data) => {
		const code = data.toString()
		const result = postcss.minify(code)
		fs.writeFile(outputPath, result.code, () => true)
	}) 
})


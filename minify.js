// const postcss = require('postcss')
// const cssnano = require('cssnano')
// const autoprefixer = require('autoprefixer')
// const fs = require('fs')
// const path = require('path')
// // const cssFile = './public/styles/style.css'
// const minicssFile = './public/styles/style.mini.css'
// const cssFiles = [
//     'styles/add.css',
//     'styles/article.css',
//     'styles/style.css'
// ]
// cssFiles.forEach(cssFile => {
//     const inputPath = path.join(__dirname, `../public/scripts/${file}`)
// 	let outputName = file.split('.')
// 	outputName[1] = 'min'
// 	outputName[2] = 'css'
// 	outputName = outputName.join('.')
// 	const outputPath = path.join(__dirname, `../public/scripts/${outputName}`)

//     //Minify css here
// 	fs.readFile(inputPath, (err, data) => {
// 		const code = data.toString()
// 		const result = postcss.minify(code)
// 		fs.writeFile(outputPath, result.code, () => true)
// 	})



    
// })

// fs.readFile(cssFile, async (err, data) =>{
//     const output = await postcss([cssnano,autoprefixer]).process(data)
//     const minifiedCss = output.css
//     fs.writeFile(minicssFile, minifiedCss, err => {
//         if(err) {
//             console.log(err)
//         }
//     })
// })
const {readFileSync,writeFile,readFile,rename, unlink, appendFile} = require('fs')





// const file = readFileSync('index.html','utf8')
// const style = readFileSync('style.css','utf8')
// const js = readFileSync('index.js','utf8')
// const file2 = readFileSync('about.html','utf8')
// const file3 = readFileSync('contact.html','utf8')

// module.exports = {file,file2,file3,style,js}
// ==== writefile ====
// writeFile('index.html','coding is sweet','utf8',(err,res)=>{

// if (err) throw err;
// console.log(res)

// })

// readFile('index.html','utf8', (err,res)=>{

//     if (err) throw err;
//     output = res
//     console.log(output)

// })
// ==== RENAME A FILE ====
// rename('index2.html','index2.txt', (err,res)=>{

//     if (err) throw err;
//     console.log(res)

// })


// ==== DELETE A FILE ====
// unlink('index.txt',(err,res)=>{

//     if(err) throw err;
//     console.log(res)

// })


// APPEND A FILE

// appendFile('index2.txt', ',i am very grateful',(err,res)=>{
// if(err) throw err;
//     console.log(res)
// })
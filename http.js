const http = require('http');
const {join,extname} = require('path')
const {readFile} = require('fs')
// const {file,file2,file3,style,js} = require('./fs')


const server = http.createServer((req,res)=>{
const file = join(__dirname, 'public' ,req.url === '/' ? 'index2.html' : req.url) 
console.log(file)
const ext = extname(file)
console.log(ext)
let contenType = 'text/html'
switch(ext){
   case '.css':
      contenType = 'text/css'
   break;
   case '.js':
      contenType = 'text/javascript'
   break;
   case '.json':
      contenType = 'application/json'
   break;
   case '.jpg':
      contenType = 'image/jpg'
   break;
   case '.png':
      contenType = 'image/png'
   break;
}
res.writeHead(200,{'Content-Type' : contenType})
      readFile(file, 'utf8', (err,result)=>{
         if (err){
            throw err
         }
         res.write(result)
      })
      res.end()

      //   if(req.url === '/index.html'){
      //       res.writeHead(200, {'Content-Type' : 'text/html'})
      //      res.write(file)
      //      res.end()
      //   }
      //   if(req.url === '/about.html'){
      //   res.writeHead(200, {'Content-Type' : 'text/html'})
      //      res.write(file2)
      //      res.end()
      //   }
      //   if(req.url === '/contact.html'){
      //       res.writeHead(200, {'Content-Type' : 'text/html'})
      //       res.write(file3)
      //       res.end()
      //    }
      //    if(req.url === '/style.css'){
      //       res.writeHead(200,{'Content-Type' : 'text/css'})
      //       res.write(style)
      //       res.end()
      //    }
      //    if(req.url === '/index.js'){
      //       res.writeHead(200,{'Content-Type' : 'text/javascript'})
      //       res.write(js)
      //       res.end()
      //    }
       
})
server.listen(5000)
module.exports = server


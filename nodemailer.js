const {createTransport} = require('nodemailer')
const {readFileSync} = require('fs')
const {join} = require('path')
const {createServer} = require('http')
const file = readFileSync(join(__dirname,'public','index.html'),'utf8')
//  console.log(file)
// const server = createServer((req,res)=>{
// const file = readFileSync(join(__dirname,'public',req.url === '/' ? 'index.html' : req.url),'utf8')
    
// }).listen(5000)


const transport = createTransport({

    service:'gmail',
    auth:{
        user:'yunusabdullateef95@gmail.com',
        pass:'xjtbfcsjocbjllrl'
    }
})
// const mailOptions = {
//     from:'yunusabdullateef95@gmail.com',
//     to:'yunusabdullateef68@gmail.com',
//     subject:'sending mail through node',
//     html:file,
    
// }
const mailOptions = {
    from:'yunusabdullateef95@gmail.com',
    to:'yunusabdullateef68@gmail.com',
    subject:'sending mail through node',
    html:file,
    // attachments:[
    //     {
    //         filename:'plane.jpg',
    //         path:__dirname+'/image-plane.jpg',
    //         cid:"image-plane"
    //     }
    // ],
    attachments:[
        {
            filename:'plane',
            path:__dirname+'/public/images/image-restaurant.jpg',
            cid:'image'
        },
        {
            filename:'plane2',
            path:__dirname+'/public/images/image-plane.jpg',
            cid:'image2'
        }
    ]
    
}

transport.sendMail(mailOptions,(err,res)=>{
    if (err) throw err
    console.log('sent '+res)
})
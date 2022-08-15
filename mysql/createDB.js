const {createConnection } = require('mysql')

const con = createConnection({
  host:'localhost',
  user:'root',
  password:'latyus'
}
)
con.connect((err)=>{
  if (err) throw err;
  con.query('CREATE DATABASE mydb',(err,result)=>{
  if (err) throw err;
    console.log(result)
  })
})
// const  {createConnection} = require('mysql');

// // const con = createConnection({
// //   host: "localhost",
// //   user: "root",
// //   password: "latyus"
// // });

// const con = createConnection({
//   host:'localhost',
//   user:'root',
//   password:'latyus'
// })

// con.connect((err)=>{
//   if(err) throw err;
//   console.log('connected')
//   con.query('CREATE DATABASE mydb', (err,result)=>{
//    if(err) throw err;
//     console.log(result)
//   })
// })
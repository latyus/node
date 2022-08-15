const {createConnection} = require('mysql');

const con = createConnection({
  host: "localhost",
  user: "root",
  password: "latyus",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql,(err, result) =>{
    if (err) throw err;
    console.log("Table created");
  });
});
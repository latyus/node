
const {createConnection} = require('mysql');

const con = createConnection({
  host: "localhost",
  user: "root",
  password: "latyus",
  database: "mydb"
});



con.connect(err=> {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
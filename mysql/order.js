const {createConnection} = require('mysql');

const con = createConnection({
  host: "localhost",
  user: "root",
  password: "latyus",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
const {createConnection} = require('mysql');

const con = createConnection({
  host: "localhost",
  user: "root",
  password: "latyus",
  database: "mydb"
});



con.connect(err=>{
    if (err) throw err;
    var sql = "DROP TABLE latyusDev";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
  });
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "ddup-test-instance-1.c8aakn0gprig.us-east-2.rds.amazonaws.com",
    user: "Dr_Applestar",
    password: "Anabacon5%"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.end();
});
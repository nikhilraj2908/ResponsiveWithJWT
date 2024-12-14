// const mysql = require('mysql');
// const dotenv = require('dotenv');

// dotenv.config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err.message);
//     process.exit(1); // Exit the application if the connection fails
//   }
//   console.log('Connected to MySQL');
// });
// module.exports = db;
var mysql=require("mysql2");
var mysqlconnect=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"user_management"
})
mysqlconnect.connect((err)=>{
    if(!err){
        console.log("connected to database");
    }else{
        console.log("error in connecting to database",err);
    }
})
module.exports= mysqlconnect;

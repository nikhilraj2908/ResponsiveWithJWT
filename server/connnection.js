
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

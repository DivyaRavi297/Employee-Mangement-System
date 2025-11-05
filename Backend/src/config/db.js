import mysql from 'mysql2'

const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "hari",
    database:"ems",
});

db.connect((err) => {
    if(err){
        console.log("falied to connect database");
    }
    else
        console.log("Database connected successfully");
})

export default db;
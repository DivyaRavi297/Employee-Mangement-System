import express from 'express';
import db from './src/config/db.js'


const app = express();

app.listen(8080,()=>{
    console.log("server started....")
})
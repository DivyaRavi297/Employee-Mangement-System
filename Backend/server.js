import express from 'express';
import employeeRoutes from "./src/routes/employeeRoutes.js"


const app = express();
app.use(express.json());

app.use("/api/employees",employeeRoutes)
app.listen(8080,()=>{
    console.log("server started....")
})
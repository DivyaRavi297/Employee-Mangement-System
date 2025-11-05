import db from './config/db.js';

export const getAllEmployees = (callback) => {
    db.query("SELECT * FROM employees",callback)
};


export const getEmployeeById = (id, callback)=>{
    db.query("SELECT * FROM employees WHERE id = ?",[id],callback)
};  

export const addEmployee = (callback,employee)=>{
    db.query("INSERT INTO employess SET ?",employee,callback)
};

export const updateEmployee = (callback,[employee,id])=>{
    db.query("UPDATE employees SET ? WHERE id = ?",employee,id,callback)
};

export const deleteEmployee =(callback,id)=>{
    db.query("DELETE FROM employees WHERE id = ?",[id],callback)
};
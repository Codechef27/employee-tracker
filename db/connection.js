const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'terminal',
        user: 'root',
        password: 'Jaxonsdad#1',
        database: 'employee_tracker'
    },
    console.log('connected to the employee_tracker database')
);

module.exports = db;
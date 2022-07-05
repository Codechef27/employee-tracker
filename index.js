// GIVEN a command-line application that accepts user input


// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, 
// job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, 
// and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is 
// updated in the databaseUpdate employee managers.

// View employees by manager.

// View employees by department.

// Delete departments, roles, and employees.

// View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.

const db = require('./db/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, 
// add a department, add a role, add an employee, and update an employee role
// Bonus criteria = View employees by manager, View employees by department, Delete departments, roles, and employees,
// View the total utilized budget of a department—in other words, the combined salaries of all employees in that-
// department.
const options = () => {
    inquirer.prompt (
        [
            {
                type: 'list',
                name: 'choices',
                message: 'What would you like to do?',
                choices: [
                    { name: 'View all Departments', value: 1},
                    { name: 'View all Roles', value: 2 },
                    { name: 'View all employees', value: 3 },
                    { name: 'Add a department', value: 4 }, 
                    { name: 'Add a Role', value: 5 },
                    { name: 'Add an employee', value: 6 },
                    { name: 'Update an employee role', value: 7 },
                    { name: 'Quit' , value: 8}

                ]

            }
        ]
    ) 

    .then((data) => {
        if ( data.choices === 1 ) {
            viewAllDepartments()
        } else if (data.choices === 8) {
            db.end()
        }
    })
};

const viewAllDepartments = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        options();
    })
}

options();
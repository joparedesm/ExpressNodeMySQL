import config from '../config.js';
import { pool } from '../db.js';

export const getEmployees = (req, res) => {
    res.send('Get employees! \n Dummy key: ' + config.testKey);
}

export const createEmployee = async (req, res) => {
    await pool.query('INSERT INTO employees (name, email, phone, salary) VALUES (?, ?, ?, ?)', [req.body.name, req.body.email, req.body.phone, req.body.salary]);
    res.send('Employee created!');
}

export const updateEmployee = (req, res) => res.send('Update employee!')

export const deleteEmployee = (req, res) => res.send('Delete employee!')
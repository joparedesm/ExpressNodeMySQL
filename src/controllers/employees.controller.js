import config from '../config.js';
import { pool } from '../db.js';

function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employees');
    res.send(rows);
}

export const getEmployee = async (req, res) => {
    const [row] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
    if (row.length === 0) return res.status(404).json({
            message: 'Employee not found'
        });

    res.send(row[0]);
}

export const createEmployee = async (req, res) => {
    const { name, email, phone, salary } = req.body;

    // Validate request
    if (!name || !email || !phone || !salary || !isString(name) || !isString(email) || !isString(phone) || !isNumber(salary)) {
        return res.status(400).send({
            message: 'All fields are required'
        });
    }

    const [rows] = await pool.query('INSERT INTO employees (name, email, phone, salary) VALUES (?, ?, ?, ?)', [name, email, phone, salary]);
    res.send({
        id: rows.insertId,
        name,
        email,
        phone,
        salary
    });
}

export const updateEmployee = (req, res) => res.send('Update employee!')

export const deleteEmployee = (req, res) => res.send('Delete employee!')
import { pool } from '../db.js';

function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

export const getEmployees = async (req, res) => {
    try {
        //throw new Error('Unexpected Error');
        const [rows] = await pool.query('SELECT * FROM employees');
        res.json(rows);
    } catch (e) {
        return res.status(500).json({ message: 'Error at Reading Employees data' });
    }
}

export const getEmployee = async (req, res) => {
    try {
        const [row] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
        if (row.length === 0) return res.status(404).json({
            message: 'Employee not found'
        });

        res.json(row[0]);
    } catch (e) {
        return res.status(500).json({ message: 'Error at Reading a Employee data' });
    }
}

export const createEmployee = async (req, res) => {
    const { name, email, phone, salary } = req.body;
    // Validate request
    if (!name || !email || !phone || !salary || !isString(name) || !isString(email) || !isString(phone) || !isNumber(salary)) {
        return res.status(400).json({ message: 'All fields are required: Data Error' });
    }

    try {
        const [rows] = await pool.query('INSERT INTO employees (name, email, phone, salary) VALUES (?, ?, ?, ?)', [name, email, phone, salary]);
        res.json({
            id: rows.insertId,
            name,
            email,
            phone,
            salary
        });
    } catch (e) {
        return res.status(500).json({ message: "Error at Employee creation" });
    }
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, salary } = req.body;

    try {
        const [ dbResult  ] = await pool.query('UPDATE employees SET name = ?, email = ?, phone = ?, salary = ? WHERE id = ?', [name, email, phone, salary, id]);

        if (dbResult.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });

        const [row] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);

        res.json(row[0]);
    } catch (e) {
        return res.status(500).json({ message: "Error at Update Employee" })
    }
}

export const patchEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, salary } = req.body;
    try {

        const [ dbResult  ] = await pool.query('UPDATE employees SET name = IFNULL(?, name), email = IFNULL(?, email), phone = IFNULL(?, phone), salary = IFNULL(?, salary) WHERE id = ?', [name, email, phone, salary, id]);

        if (dbResult.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });

        const [row] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);

        res.json(row[0]);
    } catch (e) {
        return res.status(500).json({ message: "Error at Patch Employee" })
    }
}

export const deleteEmployee = async (req, res) => {

    try {
        const [row] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id]);

        if (row.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });
        res.sendStatus(204);
    } catch (e) {
        return res.status(500).json({ message: "Error at Delete Employee" })
    }
    // express-promise-routes module replace express's router
}
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

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, salary } = req.body;


    const [ dbResult  ] = await pool.query('UPDATE employees SET name = ?, email = ?, phone = ?, salary = ? WHERE id = ?', [name, email, phone, salary, id]);

    if (dbResult.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });

    const [row] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);

    res.send(row[0]);
}

export const patchEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, salary } = req.body;

    const [ dbResult  ] = await pool.query('UPDATE employees SET name = IFNULL(?, name), email = IFNULL(?, email), phone = IFNULL(?, phone), salary = IFNULL(?, salary) WHERE id = ?', [name, email, phone, salary, id]);

    if (dbResult.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });

    const [row] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);

    res.send(row[0]);
}

export const deleteEmployee = async (req, res) => {

    const [row] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id]);

    if (row.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });
    res.sendStatus(204);

}
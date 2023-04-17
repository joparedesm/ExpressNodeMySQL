import { pool } from '../db.js';

export const ping = async (req, res) => {
    const [response] = await pool.query('SELECT "Pong" AS response');
    res.json(response[0]);
};
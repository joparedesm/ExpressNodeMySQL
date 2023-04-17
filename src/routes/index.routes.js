import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/ping', async (req, res) => {
    const [response] = await pool.query('SELECT "Pong" AS response');
    res.json(response[0]);
});

export default router;
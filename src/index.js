import express from 'express';
import routes from './routes/employees.routes.js';
import { pool } from './db.js';

const app = express();

// setting up the server
app.set('port', process.env.PORT || 3000);

// middleware
app.use(express.json());

// routes
app.get('/ping', async (req, res) => {
    const [solution] = await pool.query('SELECT 1 + 1 AS solution');
    res.json(solution[0]);
});

app.use( '/employees', routes );


// starting the server
app.listen(app.get('port'), () => {
    console.log('On port', app.get('port'));
    });
import express from 'express';
import routesEmployees from './routes/employees.routes.js';
import routesIndex from './routes/index.routes.js';
import { PORT } from './config.js';

const app = express();

// setting up the server
app.set('port', PORT);
app.set('json spaces', 2); // number of spaces for indentation

// middleware
app.use(express.json());

// routes
app.use( routesIndex );

app.use( '/api/employees', routesEmployees );

// error 404 middleware
app.use((req, res, next) => {
    res.status(404).json({ message: "Endpoint Not Found 404" })
})

export default app;
import express from 'express';
import routes from './routes/employees.routes.js';
const app = express();

// setting up the server
app.set('port', process.env.PORT || 3000);

// middleware
app.use(express.json());

// routes
app.use(routes);


// starting the server
app.listen(app.get('port'), () => {
    console.log('On port', app.get('port'));
    });
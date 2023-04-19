import app from './app.js';

// starting the server
app.listen(app.get('port'), () => { console.log('On port', app.get('port')); });
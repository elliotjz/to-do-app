let express = require('express');
let toDoController = require('./controllers/toDoController');
let path = require('path');

const app = express();

// set up template engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

// Fire controllers
toDoController(app);

// Listen to port
app.listen(process.env.PORT || 3000);

console.log('Listning to port 3000');
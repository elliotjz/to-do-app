let express = require('express');
let toDoController = require('./controllers/toDoController');
var engine = require('ejs');
let app = express();

// set up template engine
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

// Fire controllers
// toDoController(app);
app.get('/todo', function(req, res) {
    res.sendFile(__dirname + '/views/todo.html');
});

// Listen to port
app.listen(3000, function() {
	console.log('Listning to port 3000');
});

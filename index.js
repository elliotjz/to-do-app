let express = require('express');
let toDoController = require('./controllers/toDoController');

let app = express();

// set up template engine
//app.set('view engine', 'ejs');

// Static files
//app.use(express.static('public'));

// Fire controllers
//toDoController(app);

app.get('/todo', function(req, res) {
	res.sendFile(__dirname + '/views/todo.html');
});

app.post('/todo', function(req, res) {

});

app.delete('/todo', function(req, res) {

});

// Listen to port
app.listen(3000, function() {
	console.log('Listning to port 3000');
});

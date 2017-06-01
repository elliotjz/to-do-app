let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Connect to database
let url = process.env.MLAB_URL;
mongoose.connect(url);

// Create a schema - this is like a blueprint
let todoSchema = new mongoose.Schema({
	item: String
});

// Create model
let Todo = mongoose.model('Todo', todoSchema);

let urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

	app.get('/todo', function(req, res) {
		// Get data from mongodb and pass it to view
		Todo.find({}, function(err, data) {
			if (err) throw err;
			res.render('todo', { todos: data });
		});
	});

	app.post('/todo', urlencodedParser, function(req, res) {
		// Get data from the view and add it to mongodb
		let newTodo = Todo(req.body).save(function(err, data) {
			if (err) throw err;
			res.json(data);
		})
	});

	app.delete('/todo/:item', function(req, res) {
		// Delete requested item from mongodb
		Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
			if (err) throw err;
			res.json(data);
		})
	});
};
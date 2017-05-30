module.exports = function(app) {

	app.get('/todo', function(req, res) {
    	res.sendFile(__dirname + '/../views/todo.html');
	});

	app.post('/todo', function(req, res) {

	});

	app.delete('/todo', function(req, res) {

	});
};